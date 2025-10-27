# 🔧 VPS Deployment Quick Start

## 🚀 Before You Start

1. **Get a VPS** from any provider (DigitalOcean, Linode, Vultr, etc.)
2. **Note down your VPS IP address**
3. **Ensure SSH access** to your VPS
4. **Point your domain** to the VPS IP (optional, can be done later)

## ⚡ One-Click Deployment

### Step 1: Configure the Deployment Script
```bash
# Edit the deployment script
nano deploy-vps.sh

# Update this line with your actual VPS IP:
VPS_IP="YOUR_VPS_IP"  # Change to your actual VPS IP (e.g., "138.197.123.456")
```

### Step 2: Run the Deployment
```bash
# Make sure you're in the project directory
cd /Users/prajjwalparajuli/Desktop/NextFinal/aoneskillsinternational

# Run the automated deployment
./deploy-vps.sh
```

### Step 3: Setup SSL (Manual step)
```bash
# SSH into your VPS
ssh root@YOUR_VPS_IP

# Run SSL setup command
sudo certbot --nginx -d aoneskills.com.np -d www.aoneskills.com.np
```

## 🎯 What the Script Does

✅ **System Setup**
- Updates VPS system packages
- Installs Node.js, Nginx, PM2, Git
- Configures firewall (ports 80, 443, 22)

✅ **Application Deployment**
- Uploads your project files
- Installs production dependencies
- Builds the Next.js application
- Configures environment variables

✅ **Production Configuration**
- Sets up PM2 process management
- Configures Nginx reverse proxy
- Sets up SSL certificate auto-renewal
- Configures logging and monitoring

✅ **Security & Performance**
- Security headers configuration
- Gzip compression
- Static file caching
- Rate limiting ready

## 🔄 Future Updates

After initial deployment, use the quick update script:

```bash
# Edit with your VPS IP
nano update-vps.sh

# Run updates
./update-vps.sh
```

## 📋 VPS Providers Recommendations

### Budget Options (Nepal-friendly)
- **DigitalOcean**: $5/month droplet - Excellent for beginners
- **Linode**: $5/month Nanode - Great performance
- **Vultr**: $5/month - Fast SSD storage

### Premium Options
- **AWS EC2**: t3.micro (free tier) - Enterprise grade
- **Google Cloud**: e2-micro - Integrated services

### Local Nepal Options
- **Subisu Cloud**: Local support, Nepal-based
- **WorldLink**: Local hosting with Nepali support

## 🌐 Domain Configuration

### If you have aoneskills.com.np:
1. **Point A record** to your VPS IP
2. **Point www CNAME** to aoneskills.com.np
3. **Wait for DNS propagation** (24-48 hours)

### If you don't have domain yet:
- Access via VPS IP: `http://YOUR_VPS_IP`
- Get domain later and update DNS

## 🔧 Environment Variables to Update

After deployment, SSH into your VPS and update:

```bash
# SSH into VPS
ssh root@YOUR_VPS_IP

# Edit environment file
nano /var/www/aoneskillsinternational/.env.local

# Update these values:
SMTP_PASS=your_actual_email_password
NEXT_PUBLIC_APP_URL=https://your-actual-domain.com
```

Then restart the application:
```bash
pm2 restart aoneskills-website
```

## 📊 Post-Deployment Checklist

- [ ] Website accessible via VPS IP
- [ ] Contact form working (test email sending)
- [ ] WhatsApp integration working
- [ ] SSL certificate installed
- [ ] Domain pointing to VPS (if applicable)
- [ ] Performance monitoring active
- [ ] PM2 process running stable
- [ ] Nginx serving requests
- [ ] Error logs clean

## 🆘 Quick Troubleshooting

### Website not loading:
```bash
ssh root@YOUR_VPS_IP
pm2 list
pm2 logs aoneskills-website
```

### 502 Bad Gateway:
```bash
ssh root@YOUR_VPS_IP
sudo nginx -t
sudo systemctl restart nginx
pm2 restart aoneskills-website
```

### SSL issues:
```bash
ssh root@YOUR_VPS_IP
sudo certbot renew --dry-run
sudo systemctl restart nginx
```

## 📞 Support

- **WhatsApp**: +9779842747572
- **Email**: support@aoneskills.com.np
- **Documentation**: See VPS-DEPLOYMENT.md for detailed guide

---

**🎉 Your website will be live on the internet after running the deployment script!**