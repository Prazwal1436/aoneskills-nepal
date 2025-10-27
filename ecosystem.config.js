module.exports = {
  apps: [
    {
      name: 'aoneskills-website',
      script: 'npm',
      args: 'start',
      cwd: '/Users/prajjwalparajuli/Desktop/NextFinal/aoneskillsinternational',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        NEXTAUTH_URL: 'https://aoneskills.com.np',
        SMTP_HOST: 'smtp.hostinger.com',
        SMTP_PORT: 465,
        SMTP_USER: 'support@aoneskills.com.np',
        SMTP_PASS: 'Saarathi@7342',
        ADMIN_EMAIL: 'support@aoneskills.com.np',
        NEXTAUTH_SECRET: 'your-production-secret-key-here-aoneskills-2024-secure'
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      kill_timeout: 5000,
      listen_timeout: 10000,
      shutdown_with_message: true
    }
  ],

  deploy: {
    production: {
      user: 'deployer',
      host: 'your-server-ip',
      ref: 'origin/main',
      repo: 'https://github.com/Prazwal1436/aoneskills-nepal.git',
      path: '/var/www/aoneskills',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};