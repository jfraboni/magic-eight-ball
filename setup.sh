#!/usr/bin/env bash

(shopt -s dotglob; mv -- * ..)
echo "Files relocated"
cd ../ && npm install
rm setup.sh
rm -rf node-magic-eight-ball-lesson
