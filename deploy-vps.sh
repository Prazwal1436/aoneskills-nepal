#!/bin/bash

# =============================================================================
# A.One Skills International - VPS Deployment Script
# =============================================================================

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration (UPDATE THESE VALUES)
VPS_IP="YOUR_VPS_IP"
VPS_USER="root"  # or your VPS user
DOMAIN="aoneskills.com.np"
PROJECT_NAME="aoneskills-website"
PROJECT_DIR="/var/www/aoneskillsinternational"
LOCAL_PROJECT_DIR="/Users/prajjwalparajuli/Desktop/NextFinal/aoneskillsinternational"

echo -e "${BLUE}🚀 A.One Skills International - VPS Deployment${NC}"
echo -e "${BLUE}===============================================${NC}"

# Function to print status
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️ $1${NC}"
}

# Check if VPS_IP is configured
if [ "$VPS_IP" = "YOUR_VPS_IP" ]; then
    print_error "Please update VPS_IP in the script with your actual VPS IP address"
    exit 1
fi

# Function to run commands on VPS
run_on_vps() {
    ssh -o StrictHostKeyChecking=no $VPS_USER@$VPS_IP "$1"
}

# Function to copy files to VPS
copy_to_vps() {
    scp -o StrictHostKeyChecking=no -r "$1" $VPS_USER@$VPS_IP:"$2"
}

echo -e "${BLUE}Step 1: Testing VPS Connection${NC}"
if run_on_vps "echo 'Connection successful'"; then
    print_status "Connected to VPS successfully"
else
    print_error "Cannot connect to VPS. Please check your SSH configuration"
    exit 1
fi

echo -e "${BLUE}Step 2: Updating VPS System${NC}"
run_on_vps "apt update && apt upgrade -y"
print_status "System updated"

echo -e "${BLUE}Step 3: Installing Required Software${NC}"
run_on_vps "curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -"
run_on_vps "apt-get install -y nodejs nginx git curl wget unzip"
run_on_vps "npm install -g pm2"
print_status "Node.js, Nginx, and PM2 installed"

echo -e "${BLUE}Step 4: Configuring Firewall${NC}"
run_on_vps "ufw allow ssh && ufw allow 80 && ufw allow 443 && ufw --force enable"
print_status "Firewall configured"

echo -e "${BLUE}Step 5: Creating Project Directory${NC}"
run_on_vps "mkdir -p $PROJECT_DIR"
run_on_vps "mkdir -p /var/log/pm2"
print_status "Project directories created"

echo -e "${BLUE}Step 6: Uploading Project Files${NC}"
# Build project locally first
cd "$LOCAL_PROJECT_DIR"
npm run build
print_status "Project built locally"

# Upload files to VPS
copy_to_vps "$LOCAL_PROJECT_DIR/" "$PROJECT_DIR/"
print_status "Project files uploaded"

echo -e "${BLUE}Step 7: Installing Dependencies on VPS${NC}"
run_on_vps "cd $PROJECT_DIR && npm ci --only=production"
print_status "Dependencies installed"

echo -e "${BLUE}Step 8: Setting up Environment Variables${NC}"
# Create production environment file
cat << EOF > /tmp/.env.local
NODE_ENV=production
PORT=3001
NEXT_PUBLIC_APP_URL=https://$DOMAIN

# SMTP Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=support@aoneskills.com.np
SMTP_PASS=YOUR_EMAIL_PASSWORD

# Contact Information
CONTACT_EMAIL=support@aoneskills.com.np
WHATSAPP_NUMBER=+9779842747572

# Analytics
GOOGLE_ANALYTICS_ID=G-5Y2T9CWNX4
EOF

copy_to_vps "/tmp/.env.local" "$PROJECT_DIR/.env.local"
run_on_vps "rm /tmp/.env.local 2>/dev/null || true"
print_status "Environment variables configured"

echo -e "${BLUE}Step 9: Starting Application with PM2${NC}"
# Update ecosystem config for VPS
cat << 'EOF' > /tmp/ecosystem.config.js
module.exports = {
  apps: [{
    name: 'aoneskills-website',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/aoneskillsinternational',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'development',
      PORT: 3001
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    error_file: '/var/log/pm2/aoneskills-error.log',
    out_file: '/var/log/pm2/aoneskills-out.log',
    log_file: '/var/log/pm2/aoneskills-combined.log',
    time: true,
    autorestart: true,
    restart_delay: 1000
  }]
};
EOF

copy_to_vps "/tmp/ecosystem.config.js" "$PROJECT_DIR/ecosystem.config.js"
run_on_vps "rm /tmp/ecosystem.config.js"

# Start application
run_on_vps "cd $PROJECT_DIR && pm2 start ecosystem.config.js --env production"
run_on_vps "pm2 save"
run_on_vps "pm2 startup systemd -u $VPS_USER --hp /root"
print_status "Application started with PM2"

echo -e "${BLUE}Step 10: Configuring Nginx${NC}"
# Create Nginx configuration
cat << EOF > /tmp/aoneskills.conf
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN $VPS_IP;

    # Security Headers
    add_header X-Frame-Options DENY always;
    add_header X-Content-Type-Options nosniff always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;

    # Client settings
    client_max_body_size 10M;
    client_body_timeout 60s;
    client_header_timeout 60s;

    # Logging
    access_log /var/log/nginx/aoneskills.access.log;
    error_log /var/log/nginx/aoneskills.error.log;

    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp|avif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
        try_files \$uri =404;
    }

    # Next.js static files
    location /_next/static/ {
        alias $PROJECT_DIR/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # API endpoints
    location /api/ {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Main application
    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Error pages
    error_page 404 /404;
    error_page 500 502 503 504 /50x.html;
}
EOF

copy_to_vps "/tmp/aoneskills.conf" "/etc/nginx/sites-available/aoneskills.conf"
run_on_vps "ln -sf /etc/nginx/sites-available/aoneskills.conf /etc/nginx/sites-enabled/"
run_on_vps "rm /etc/nginx/sites-enabled/default 2>/dev/null || true"
run_on_vps "nginx -t && systemctl restart nginx"
run_on_vps "rm /tmp/aoneskills.conf"
print_status "Nginx configured and restarted"

echo -e "${BLUE}Step 11: Installing SSL Certificate${NC}"
run_on_vps "apt install -y certbot python3-certbot-nginx"
print_warning "SSL certificate setup requires manual intervention"
print_info "Run this command on your VPS after deployment:"
print_info "sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"

echo -e "${BLUE}Step 12: Setting up Auto-renewal for SSL${NC}"
run_on_vps "(crontab -l 2>/dev/null; echo '0 12 * * * /usr/bin/certbot renew --quiet') | crontab -"
print_status "SSL auto-renewal configured"

echo -e "${BLUE}Step 13: Final Health Check${NC}"
sleep 5
if run_on_vps "curl -s http://localhost:3001 > /dev/null"; then
    print_status "Application is running successfully"
else
    print_warning "Application may not be running properly"
    print_info "Check logs with: ssh $VPS_USER@$VPS_IP 'pm2 logs $PROJECT_NAME'"
fi

echo -e "${BLUE}Step 14: Deployment Summary${NC}"
echo -e "${GREEN}=================================================${NC}"
echo -e "${GREEN}🎉 VPS Deployment completed successfully!${NC}"
echo -e "${GREEN}=================================================${NC}"
echo
echo -e "${BLUE}Deployment Details:${NC}"
echo -e "  • VPS IP: $VPS_IP"
echo -e "  • Domain: $DOMAIN"
echo -e "  • Application: Running on port 3001"
echo -e "  • Web Server: Nginx (port 80/443)"
echo -e "  • Process Manager: PM2"
echo -e "  • SSL: Ready for setup"
echo
echo -e "${BLUE}Access Your Website:${NC}"
echo -e "  • HTTP: ${YELLOW}http://$VPS_IP${NC}"
echo -e "  • HTTP: ${YELLOW}http://$DOMAIN${NC} (after DNS setup)"
echo -e "  • HTTPS: ${YELLOW}https://$DOMAIN${NC} (after SSL setup)"
echo
echo -e "${BLUE}Useful Commands:${NC}"
echo -e "  • SSH into VPS: ${YELLOW}ssh $VPS_USER@$VPS_IP${NC}"
echo -e "  • Check PM2 status: ${YELLOW}ssh $VPS_USER@$VPS_IP 'pm2 list'${NC}"
echo -e "  • View logs: ${YELLOW}ssh $VPS_USER@$VPS_IP 'pm2 logs $PROJECT_NAME'${NC}"
echo -e "  • Restart app: ${YELLOW}ssh $VPS_USER@$VPS_IP 'pm2 restart $PROJECT_NAME'${NC}"
echo
echo -e "${BLUE}Next Steps:${NC}"
echo -e "  1. Point your domain DNS to VPS IP: $VPS_IP"
echo -e "  2. Setup SSL certificate: ${YELLOW}sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN${NC}"
echo -e "  3. Update SMTP password in .env.local"
echo -e "  4. Test all functionality (contact form, WhatsApp, etc.)"
echo -e "  5. Set up monitoring and backup"
echo
print_status "VPS deployment script completed!"

# Cleanup
rm -f /tmp/.env.local /tmp/ecosystem.config.js /tmp/aoneskills.conf 2>/dev/null