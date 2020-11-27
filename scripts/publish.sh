
if [ -d "./deploy" ]; then rm -Rf ./deploy; fi

cp -r ./src ./deploy
cp ./template/package.json ./deploy/package.json
cd ./deploy || exit
npm version "$1"
npm publish
rm -Rf ./deploy
