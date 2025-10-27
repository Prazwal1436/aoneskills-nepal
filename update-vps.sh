#!/bin/bash

# =============================================================================
# A.One Skills International - VPS Quick Update Script
# =============================================================================

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration (UPDATE THESE VALUES)
VPS_IP="YOUR_VPS_IP"
VPS_USER="root"
PROJECT_DIR="/var/www/aoneskillsinternational"

echo -e "${BLUE}🔄 A.One Skills - Quick VPS Update${NC}"
echo -e "${BLUE}===================================${NC}"

# Function to run commands on VPS
run_on_vps() {
    ssh -o StrictHostKeyChecking=no $VPS_USER@$VPS_IP "$1"
}

echo -e "${BLUE}1. Pulling latest changes...${NC}"
run_on_vps "cd $PROJECT_DIR && git pull origin main"

echo -e "${BLUE}2. Installing/updating dependencies...${NC}"
run_on_vps "cd $PROJECT_DIR && npm ci --only=production"

echo -e "${BLUE}3. Building application...${NC}"
run_on_vps "cd $PROJECT_DIR && npm run build"

echo -e "${BLUE}4. Restarting application...${NC}"
run_on_vps "pm2 restart aoneskills-website"

echo -e "${BLUE}5. Checking application status...${NC}"
run_on_vps "pm2 list"

echo -e "${GREEN}✅ Update completed successfully!${NC}"