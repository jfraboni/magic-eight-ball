#!/usr/bin/env bash

(shopt -s dotglob; mv -- * ..)
echo "Files relocated"
cd ../ && npm install

#rm $0
#rm -rf `node-magic-eight-ball-lesson $0`
