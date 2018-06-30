#!/bin/bash

clear
echo "uploading repository"

#git init 
git add .
git commit -m "first commit"
git remote add origin https://github.com/mymacy/quasar-website-template.git
gut push -u origin master

echo "done"