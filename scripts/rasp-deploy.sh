#!/bin/bash
PROJECT_PATH="/home/rafael/Documents/Projects/tweet-christmas"
PROJECT_SCRIPT_PATH="/home/rafael/Documents/Projects/tweet-christmas/scripts/command.sh"

cd $PROJECT_PATH

changed=0
git remote update && git status -uno | grep -q 'Your branch is behind' && changed=1

if [ $changed = 1 ]; then
    git pull origin raspberry-deploy

    npm install
    appStatus=$(ps aux | grep app.js | awk {'print $2'})

    if [ ! -z "$appStatus" ]; then
        kill -9 $appStatus
    fi
    
    cd scripts
    ./command.sh
else
    echo "Up-to-date"
fi
   


