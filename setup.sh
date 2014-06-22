mv * .[^.]* ..
cd ..
npm install

rm $0
rm -rf `node-magic-eight-ball-lesson $0`
