#!/bin/sh
cd /var/www/html/node-app
#ls
git pull
npm install --production
pm2 restart all

