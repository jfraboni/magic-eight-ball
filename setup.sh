mv * .[^.]* .. &
wait
echo "Files relocated"
cd ..
npm install &
wait

rm $0
rm -rf `node-magic-eight-ball-lesson $0`
