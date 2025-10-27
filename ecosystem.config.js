module.exports = {
  apps: [
    {
      name: 'aoneskills-website',
      script: 'npm',
      args: 'start',
  cwd: '/root/aoneskills-nepal',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        PORT: 3001
      },
  error_file: '/root/aoneskills-nepal/logs/err.log',
  out_file: '/root/aoneskills-nepal/logs/out.log',
  log_file: '/root/aoneskills-nepal/logs/combined.log',
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
      path: '/aoneskills-nepal',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};