#!/bin/bash

# =============================================================================
# A.One Skills International - Production Deployment Script
# =============================================================================

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/Users/prajjwalparajuli/Desktop/NextFinal/aoneskillsinternational"
APP_NAME="aoneskills-website"
PM2_USER="prajjwalparajuli"
NGINX_CONF="/etc/nginx/sites-available/aoneskills.conf"
NGINX_ENABLED="/etc/nginx/sites-enabled/aoneskills.conf"

echo -e "${BLUE}🚀 A.One Skills International - Production Deployment${NC}"
echo -e "${BLUE}=================================================${NC}"

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

# Check if running as root for nginx operations
check_permissions() {
    if [[ $EUID -eq 0 ]]; then
        SUDO=""
        print_warning "Running as root"
    else
        SUDO="sudo"
        print_status "Running with sudo privileges"
    fi
}

# Step 1: Navigate to project directory
echo -e "${BLUE}Step 1: Navigating to project directory${NC}"
cd "$PROJECT_DIR" || {
    print_error "Failed to navigate to project directory: $PROJECT_DIR"
    exit 1
}
print_status "Current directory: $(pwd)"

# Step 2: Install dependencies
echo -e "${BLUE}Step 2: Installing dependencies${NC}"
if npm install; then
    print_status "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Step 3: Build the application
echo -e "${BLUE}Step 3: Building Next.js application${NC}"
if npm run build; then
    print_status "Application built successfully"
else
    print_error "Build failed"
    exit 1
fi

# Step 4: Install PM2 globally if not exists
echo -e "${BLUE}Step 4: Checking PM2 installation${NC}"
if ! command -v pm2 &> /dev/null; then
    echo "PM2 not found. Installing PM2 globally..."
    if npm install -g pm2; then
        print_status "PM2 installed successfully"
    else
        print_error "Failed to install PM2"
        exit 1
    fi
else
    print_status "PM2 is already installed"
fi

# Step 5: Stop existing PM2 process
echo -e "${BLUE}Step 5: Managing PM2 processes${NC}"
if pm2 list | grep -q "$APP_NAME"; then
    echo "Stopping existing PM2 process..."
    pm2 stop "$APP_NAME"
    pm2 delete "$APP_NAME"
    print_status "Existing process stopped and deleted"
else
    print_status "No existing PM2 process found"
fi

# Step 6: Start application with PM2
echo -e "${BLUE}Step 6: Starting application with PM2${NC}"
if pm2 start ecosystem.config.js; then
    print_status "Application started with PM2"
else
    print_error "Failed to start application with PM2"
    exit 1
fi

# Step 7: Save PM2 configuration
echo -e "${BLUE}Step 7: Saving PM2 configuration${NC}"
if pm2 save; then
    print_status "PM2 configuration saved"
else
    print_warning "Failed to save PM2 configuration"
fi

# Step 8: Setup PM2 startup script
echo -e "${BLUE}Step 8: Setting up PM2 startup script${NC}"
check_permissions
if pm2 startup | grep -q "sudo"; then
    echo "Please run the following command to setup PM2 startup:"
    pm2 startup
    print_warning "Manual intervention required for PM2 startup setup"
else
    print_status "PM2 startup script configured"
fi

# Step 9: Install Nginx if not exists
echo -e "${BLUE}Step 9: Checking Nginx installation${NC}"
if ! command -v nginx &> /dev/null; then
    echo "Nginx not found. Installing Nginx..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            brew install nginx
        else
            print_error "Homebrew not found. Please install Nginx manually"
            exit 1
        fi
    else
        # Linux
        $SUDO apt update && $SUDO apt install -y nginx
    fi
    print_status "Nginx installed successfully"
else
    print_status "Nginx is already installed"
fi

# Step 10: Setup Nginx configuration
echo -e "${BLUE}Step 10: Setting up Nginx configuration${NC}"
check_permissions

# Copy nginx configuration
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS - different nginx paths
    NGINX_CONF="/usr/local/etc/nginx/servers/aoneskills.conf"
    mkdir -p /usr/local/etc/nginx/servers/
    cp nginx.conf "$NGINX_CONF"
    print_status "Nginx configuration copied for macOS"
else
    # Linux
    $SUDO mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled
    $SUDO cp nginx.conf "$NGINX_CONF"
    
    # Enable site
    if [ ! -L "$NGINX_ENABLED" ]; then
        $SUDO ln -s "$NGINX_CONF" "$NGINX_ENABLED"
        print_status "Nginx site enabled"
    else
        print_status "Nginx site already enabled"
    fi
fi

# Step 11: Test Nginx configuration
echo -e "${BLUE}Step 11: Testing Nginx configuration${NC}"
if $SUDO nginx -t; then
    print_status "Nginx configuration is valid"
else
    print_error "Nginx configuration test failed"
    exit 1
fi

# Step 12: Restart Nginx
echo -e "${BLUE}Step 12: Restarting Nginx${NC}"
if $SUDO nginx -s reload 2>/dev/null || $SUDO systemctl restart nginx 2>/dev/null; then
    print_status "Nginx restarted successfully"
else
    print_warning "Failed to restart Nginx. You may need to start it manually"
fi

# Step 13: Check application status
echo -e "${BLUE}Step 13: Checking application status${NC}"
sleep 3
if pm2 list | grep -q "online"; then
    print_status "Application is running successfully"
else
    print_error "Application is not running properly"
    pm2 logs "$APP_NAME" --lines 10
fi

# Step 14: Display useful information
echo -e "${BLUE}Step 14: Deployment Summary${NC}"
echo -e "${GREEN}=================================================${NC}"
echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}=================================================${NC}"
echo
echo -e "${BLUE}Application Details:${NC}"
echo -e "  • App Name: $APP_NAME"
echo -e "  • Port: 3001"
echo -e "  • Process Manager: PM2"
echo -e "  • Web Server: Nginx"
echo
echo -e "${BLUE}Useful Commands:${NC}"
echo -e "  • Check PM2 status: ${YELLOW}pm2 list${NC}"
echo -e "  • View logs: ${YELLOW}pm2 logs $APP_NAME${NC}"
echo -e "  • Restart app: ${YELLOW}pm2 restart $APP_NAME${NC}"
echo -e "  • Stop app: ${YELLOW}pm2 stop $APP_NAME${NC}"
echo -e "  • Check Nginx status: ${YELLOW}sudo systemctl status nginx${NC}"
echo -e "  • Test Nginx config: ${YELLOW}sudo nginx -t${NC}"
echo
echo -e "${BLUE}URLs:${NC}"
echo -e "  • Development: ${YELLOW}http://localhost:3001${NC}"
echo -e "  • Production: ${YELLOW}https://aoneskills.com.np${NC}"
echo
echo -e "${BLUE}Next Steps:${NC}"
echo -e "  1. Configure SSL certificates in nginx configuration"
echo -e "  2. Update DNS records to point to your server"
echo -e "  3. Setup monitoring and logging"
echo -e "  4. Configure backup strategies"
echo
print_status "Deployment script completed!"