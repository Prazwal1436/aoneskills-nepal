# 🚀 A.One Skills International - VPS Deployment Guide

## 📋 VPS Requirements

### Minimum VPS Specifications
- **CPU**: 1 vCPU (2 vCPU recommended)
- **RAM**: 1GB (2GB+ recommended for better performance)
- **Storage**: 20GB SSD (50GB+ recommended)
- **Bandwidth**: Unlimited or 1TB+
- **OS**: Ubuntu 20.04/22.04 LTS or CentOS 8+

### Recommended VPS Providers
- **DigitalOcean**: $5-10/month droplets
- **Linode**: $5-10/month Nanode/Standard plans
- **Vultr**: $5-10/month Regular Performance
- **AWS EC2**: t3.micro/small (free tier available)
- **Google Cloud**: e2-micro/small
- **Local Nepal**: Subisu, WorldLink, or Mercantile hosting

## 🛠️ Initial VPS Setup

### 1. Connect to Your VPS
```bash
# SSH into your VPS (replace with your IP)
ssh root@your-vps-ip

# Or if using key-based authentication
ssh -i ~/.ssh/your-key.pem root@your-vps-ip
```

### 2. Update System Packages
```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS/RHEL
sudo yum update -y
# OR for newer versions
sudo dnf update -y
```

### 3. Install Essential Packages
```bash
# Ubuntu/Debian
sudo apt install -y curl wget git unzip software-properties-common

# CentOS/RHEL
sudo yum install -y curl wget git unzip
```

### 4. Install Node.js (Latest LTS)
```bash
# Using NodeSource repository (recommended)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### 5. Install PM2 Process Manager
```bash
sudo npm install -g pm2
```

### 6. Install Nginx Web Server
```bash
# Ubuntu/Debian
sudo apt install -y nginx

# CentOS/RHEL
sudo yum install -y nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 7. Configure Firewall
```bash
# Ubuntu (UFW)
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable

# CentOS (firewalld)
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## 📦 Deploy Your Application

### 1. Upload Your Project Files

#### Option A: Using Git (Recommended)
```bash
# Clone your repository
git clone https://github.com/Prazwal1436/aoneskills-nepal.git
cd aoneskills-nepal

# Or if already exists, pull latest changes
git pull origin main
```

#### Option B: Using SCP/SFTP
```bash
# From your local machine
scp -r /Users/prajjwalparajuli/Desktop/NextFinal/aoneskillsinternational root@your-vps-ip:/var/www/

# Then on VPS
cd /var/www/aoneskillsinternational
```

#### Option C: Using rsync
```bash
# From your local machine
rsync -avz --progress /Users/prajjwalparajuli/Desktop/NextFinal/aoneskillsinternational/ root@your-vps-ip:/var/www/aoneskillsinternational/
```

### 2. Set Up Application Directory
```bash
# Create application directory
sudo mkdir -p /var/www/aoneskillsinternational
cd /var/www/aoneskillsinternational

# Set proper ownership
sudo chown -R $USER:$USER /var/www/aoneskillsinternational
```

### 3. Install Dependencies and Build
```bash
# Install project dependencies
npm install

# Build the application
npm run build
```

### 4. Configure Environment Variables
```bash
# Create production environment file
nano .env.local
```

Add the following content:
```env
# Application Configuration
NODE_ENV=production
PORT=3001
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# SMTP Configuration for Hostinger
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=support@aoneskills.com.np
SMTP_PASS=your_secure_email_password

# Contact Information
CONTACT_EMAIL=support@aoneskills.com.np
WHATSAPP_NUMBER=+9779842747572

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
FACEBOOK_PIXEL_ID=XXXXXXXXXX

# Security
JWT_SECRET=your_jwt_secret_key
SESSION_SECRET=your_session_secret_key
```

## ⚙️ Configure PM2 for Production

### 1. Update ecosystem.config.js for VPS
```bash
nano ecosystem.config.js
```

Update with VPS-specific configuration:
```javascript
module.exports = {
  apps: [{
    name: 'aoneskills-website',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/aoneskillsinternational',
    instances: 1, // or 'max' for cluster mode
    exec_mode: 'fork', // or 'cluster'
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
```

### 2. Create Log Directories
```bash
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2
```

### 3. Start Application with PM2
```bash
# Start the application
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Generate startup script
pm2 startup
# Follow the instructions provided by the command above
```

## 🌐 Configure Nginx for Production

### 1. Create Nginx Server Block
```bash
sudo nano /etc/nginx/sites-available/aoneskills.com.np
```

Add the following configuration:
```nginx
server {
    listen 80;
    server_name aoneskills.com.np www.aoneskills.com.np your-vps-ip;

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
        try_files $uri =404;
    }

    # Next.js static files
    location /_next/static/ {
        alias /var/www/aoneskillsinternational/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # API endpoints
    location /api/ {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Main application
    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Error pages
    error_page 404 /404;
    error_page 500 502 503 504 /50x.html;
}
```

### 2. Enable Nginx Site
```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/aoneskills.com.np /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

## 🔒 SSL Certificate Setup (Let's Encrypt)

### 1. Install Certbot
```bash
# Ubuntu/Debian
sudo apt install -y certbot python3-certbot-nginx

# CentOS/RHEL
sudo yum install -y certbot python3-certbot-nginx
```

### 2. Generate SSL Certificate
```bash
# Generate certificate for your domain
sudo certbot --nginx -d aoneskills.com.np -d www.aoneskills.com.np

# Follow the prompts to complete setup
```

### 3. Set up Auto-renewal
```bash
# Add to crontab for automatic renewal
sudo crontab -e

# Add this line:
0 12 * * * /usr/bin/certbot renew --quiet
```

## 📊 Monitoring and Maintenance

### 1. PM2 Monitoring Commands
```bash
# View all processes
pm2 list

# View logs
pm2 logs aoneskills-website

# Monitor resources
pm2 monit

# Restart application
pm2 restart aoneskills-website

# Stop application
pm2 stop aoneskills-website
```

### 2. System Monitoring
```bash
# Check system resources
htop
# or
top

# Check disk usage
df -h

# Check memory usage
free -h

# Check Nginx status
sudo systemctl status nginx

# Check Nginx logs
sudo tail -f /var/log/nginx/aoneskills.access.log
sudo tail -f /var/log/nginx/aoneskills.error.log
```

### 3. Application Health Check
```bash
# Test website response
curl -I http://your-domain.com

# Check if application is running
curl http://localhost:3001

# Check SSL certificate
curl -I https://your-domain.com
```

## 🔄 Deployment Automation Script

Create an automated deployment script:

```bash
nano deploy-vps.sh
```

```bash
#!/bin/bash

# VPS Deployment Script for A.One Skills International
echo "🚀 Starting VPS deployment..."

# Navigate to project directory
cd /var/www/aoneskillsinternational

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install/update dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build application
echo "🔨 Building application..."
npm run build

# Restart PM2 process
echo "🔄 Restarting application..."
pm2 restart aoneskills-website

# Check application status
echo "✅ Checking application status..."
pm2 list

echo "🎉 Deployment completed successfully!"
```

```bash
chmod +x deploy-vps.sh
```

## 🎯 Production Checklist

- [ ] VPS provisioned and accessible via SSH
- [ ] Node.js, PM2, and Nginx installed
- [ ] Application files uploaded to VPS
- [ ] Environment variables configured
- [ ] PM2 ecosystem configured and running
- [ ] Nginx reverse proxy configured
- [ ] SSL certificate installed and configured
- [ ] Domain DNS pointing to VPS IP
- [ ] Firewall configured (ports 80, 443, 22)
- [ ] PM2 startup script enabled
- [ ] Log rotation configured
- [ ] Backup strategy implemented
- [ ] Monitoring tools configured

## 🚨 Troubleshooting

### Common Issues and Solutions

1. **Application not starting**
   ```bash
   pm2 logs aoneskills-website
   pm2 restart aoneskills-website
   ```

2. **502 Bad Gateway (Nginx)**
   ```bash
   # Check if app is running
   pm2 list
   # Check Nginx config
   sudo nginx -t
   ```

3. **SSL certificate issues**
   ```bash
   sudo certbot renew --dry-run
   sudo systemctl restart nginx
   ```

4. **High memory usage**
   ```bash
   pm2 restart aoneskills-website
   # Check logs for memory leaks
   pm2 logs aoneskills-website
   ```

## 📞 Support Information

- **Website**: https://aoneskills.com.np
- **Email**: support@aoneskills.com.np
- **WhatsApp**: +9779842747572
- **Emergency Contact**: Available 24/7

---

**🎉 Your A.One Skills International website is now ready for VPS deployment!**