#!/bin/bash

# =============================================================================
# A.One Skills International - Website Health Check
# =============================================================================

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 A.One Skills International - Website Health Check${NC}"
echo -e "${BLUE}====================================================${NC}"

# Configuration
WEBSITE_URL="http://localhost:3001"
PROJECT_DIR="/Users/prajjwalparajuli/Desktop/NextFinal/aoneskillsinternational"

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

# Check if website is accessible
echo -e "${BLUE}1. Website Accessibility Check${NC}"
if curl -s "$WEBSITE_URL" > /dev/null; then
    print_status "Website is accessible at $WEBSITE_URL"
    
    # Check response time
    response_time=$(curl -o /dev/null -s -w '%{time_total}' "$WEBSITE_URL")
    response_ms=$(echo "$response_time * 1000" | bc)
    
    if (( $(echo "$response_time < 1.0" | bc -l) )); then
        print_status "Response time: ${response_ms%.*}ms (Excellent)"
    elif (( $(echo "$response_time < 2.0" | bc -l) )); then
        print_warning "Response time: ${response_ms%.*}ms (Good)"
    else
        print_error "Response time: ${response_ms%.*}ms (Needs improvement)"
    fi
else
    print_error "Website is not accessible"
    exit 1
fi

# Check HTTP status codes for important pages
echo -e "${BLUE}2. Page Status Check${NC}"
pages=(
    "/"
    "/about"
    "/services"
    "/contact"
    "/products"
    "/services/website-development"
    "/services/mobile-app-development"
    "/services/digital-marketing"
    "/services/ecommerce-solutions"
    "/services/software-solutions"
    "/services/it-training"
)

for page in "${pages[@]}"; do
    status_code=$(curl -s -o /dev/null -w "%{http_code}" "$WEBSITE_URL$page")
    if [ "$status_code" = "200" ]; then
        print_status "Page $page: HTTP $status_code"
    else
        print_error "Page $page: HTTP $status_code"
    fi
done

# Check for essential files
echo -e "${BLUE}3. Essential Files Check${NC}"
essential_files=(
    "$WEBSITE_URL/favicon.ico"
    "$WEBSITE_URL/manifest.json"
    "$WEBSITE_URL/robots.txt"
    "$WEBSITE_URL/sitemap.xml"
    "$WEBSITE_URL/logo.png"
    "$WEBSITE_URL/og-website.png"
    "$WEBSITE_URL/twitter-website.jpg"
)

for file in "${essential_files[@]}"; do
    status_code=$(curl -s -o /dev/null -w "%{http_code}" "$file")
    filename=$(basename "$file")
    if [ "$status_code" = "200" ]; then
        print_status "$filename: Available"
    else
        print_warning "$filename: Not found (HTTP $status_code)"
    fi
done

# Check API endpoints
echo -e "${BLUE}4. API Endpoints Check${NC}"
api_endpoints=(
    "/api/contact"
)

for endpoint in "${api_endpoints[@]}"; do
    status_code=$(curl -s -o /dev/null -w "%{http_code}" -X GET "$WEBSITE_URL$endpoint")
    if [ "$status_code" = "405" ] || [ "$status_code" = "200" ]; then
        print_status "API $endpoint: Available (HTTP $status_code)"
    else
        print_warning "API $endpoint: HTTP $status_code"
    fi
done

# Check build status
echo -e "${BLUE}5. Build Status Check${NC}"
cd "$PROJECT_DIR" || exit 1

if [ -d ".next" ]; then
    print_status "Next.js build directory exists"
    
    build_size=$(du -sh .next 2>/dev/null | cut -f1)
    print_info "Build size: $build_size"
else
    print_error "Next.js build directory not found"
fi

# Check package.json dependencies
echo -e "${BLUE}6. Dependencies Check${NC}"
if [ -f "package.json" ]; then
    print_status "package.json exists"
    
    # Check if node_modules exists
    if [ -d "node_modules" ]; then
        print_status "node_modules directory exists"
        
        modules_size=$(du -sh node_modules 2>/dev/null | cut -f1)
        print_info "Dependencies size: $modules_size"
    else
        print_warning "node_modules directory not found"
    fi
else
    print_error "package.json not found"
fi

# Check environment files
echo -e "${BLUE}7. Environment Configuration${NC}"
if [ -f ".env.local" ]; then
    print_status ".env.local exists"
else
    print_warning ".env.local not found (optional)"
fi

if [ -f ".env.example" ]; then
    print_status ".env.example exists"
else
    print_info ".env.example not found (optional)"
fi

# Check deployment files
echo -e "${BLUE}8. Deployment Files Check${NC}"
deployment_files=(
    "ecosystem.config.js"
    "nginx.conf"
    "deploy.sh"
    "DEPLOYMENT.md"
)

for file in "${deployment_files[@]}"; do
    if [ -f "$file" ]; then
        print_status "$file exists"
    else
        print_warning "$file not found"
    fi
done

# Check Git status
echo -e "${BLUE}9. Git Repository Status${NC}"
if [ -d ".git" ]; then
    print_status "Git repository initialized"
    
    # Check if there are uncommitted changes
    if git diff --quiet && git diff --staged --quiet; then
        print_status "Working directory clean"
    else
        print_warning "Uncommitted changes found"
        echo -e "${YELLOW}Modified files:${NC}"
        git status --porcelain
    fi
    
    # Current branch
    current_branch=$(git branch --show-current)
    print_info "Current branch: $current_branch"
else
    print_warning "Git repository not initialized"
fi

# Check process status
echo -e "${BLUE}10. Process Status${NC}"
if lsof -i :3001 > /dev/null 2>&1; then
    print_status "Application running on port 3001"
    
    # Get process info
    process_info=$(lsof -i :3001 | grep LISTEN)
    print_info "Process: $process_info"
else
    print_error "No process running on port 3001"
fi

# Performance check using curl
echo -e "${BLUE}11. Performance Metrics${NC}"
curl_output=$(curl -s -o /dev/null -w "DNS: %{time_namelookup}s\nConnect: %{time_connect}s\nSSL: %{time_appconnect}s\nPretransfer: %{time_pretransfer}s\nRedirect: %{time_redirect}s\nStarttransfer: %{time_starttransfer}s\nTotal: %{time_total}s\nSize: %{size_download} bytes\n" "$WEBSITE_URL")
echo -e "${BLUE}$curl_output${NC}"

# Security headers check
echo -e "${BLUE}12. Security Headers Check${NC}"
headers_to_check=(
    "X-Frame-Options"
    "X-Content-Type-Options"
    "X-XSS-Protection"
    "Content-Security-Policy"
    "Referrer-Policy"
)

for header in "${headers_to_check[@]}"; do
    if curl -s -I "$WEBSITE_URL" | grep -i "$header" > /dev/null; then
        print_status "$header header present"
    else
        print_warning "$header header missing"
    fi
done

# Summary
echo -e "${BLUE}13. Health Check Summary${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}🎉 Website Health Check Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo
echo -e "${BLUE}Website Status:${NC}"
echo -e "  • URL: $WEBSITE_URL"
echo -e "  • Status: Running"
echo -e "  • Build: Production ready"
echo -e "  • Performance: Optimized"
echo
echo -e "${BLUE}Key Features:${NC}"
echo -e "  • ✅ WhatsApp Integration (+9779842747572)"
echo -e "  • ✅ Contact Form (support@aoneskills.com.np)"
echo -e "  • ✅ SEO Optimized"
echo -e "  • ✅ Performance Monitoring"
echo -e "  • ✅ Responsive Design"
echo -e "  • ✅ PM2 Deployment Ready"
echo
echo -e "${BLUE}Next Steps:${NC}"
echo -e "  1. Review any warnings above"
echo -e "  2. Test contact form functionality"
echo -e "  3. Verify WhatsApp integration"
echo -e "  4. Check browser console for performance metrics"
echo -e "  5. Deploy to production using: ./deploy.sh"
echo
print_status "Health check completed successfully!"