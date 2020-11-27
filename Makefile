
.PHONY: build deploy

build:
	babel src --out-dir ./src --ignore "src/**/*.js; src/node_modules; src/**/package.json"

deploy:
	./scripts/publish.sh $(git describe --abbrev=0 --tags)

