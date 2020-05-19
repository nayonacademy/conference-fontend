#!/bin/bash
git pull origin fontend
sudo npm run build
sudo systemctl restart nginx
echo "Deploy finished"