ng build --prod 
ng build --prod --app 1
cp dist/index.html dist-server/
node_modules/.bin/tsc -p server/tsconfig.json
cp -R dist dist-server
rm dist-server/dist/index.html
mv dist-server/dist/main.* dist-server/dist/main.bundle.js
mv dist-server/main.* dist-server/main.bundle.js
sed -i '' 's/main.*/main.bundle.js\">\<\/script>\<\/body>\<\/html>\ /g' dist-server/index.html
cp server/package.json dist-server
# cd dist-server 
# npm i
# cd ..
