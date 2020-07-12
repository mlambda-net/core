
.PHONY: build deploy

build:
	babel src --out-dir ./src --ignore "src/**/*.js; src/node_modules; src/**/package.json"

deploy:
	cd ./src/packages && npm publish --tag next
