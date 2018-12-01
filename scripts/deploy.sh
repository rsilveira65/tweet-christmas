#!/bin/bash
versionFile="version.txt"

git checkout raspberry-deploy
git add .

versionLabel=v$1

sed -i.backup -E "s/\= v[0-9.]+/\= $versionLabel/" $versionFile $versionFile
rm $versionFile.backup

git commit -am "Incrementing version number to $versionLabel"

git tag $versionLabel

git push origin raspberry-deploy && git push --tags