#!/bin/sh

cat <<EOF
  cd /var/www/html/node-app
  git pull
  npm install --production
  pm2 restart all
  exit
EOF
