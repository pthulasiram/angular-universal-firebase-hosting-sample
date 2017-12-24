ng build --prod
ng build --prod --app 1 --output-hashing=none
node_modules/.bin/tsc -p server/tsconfig.json
mv dist dist-server
mv dist-server/dist/index.html dist-server/
cp server/package.json dist-server
cd dist-server
npm i
cd ..
