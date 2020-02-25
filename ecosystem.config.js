// pm2 start ecosystem.config.js --only site
module.exports = {
  apps: [
    {
      name: 'site',
      script: 'npm',
      args: 'run start'
    }
  ]
}
