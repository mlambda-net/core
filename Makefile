SHELL = /bin/bash
VERSION= $(shell git describe --abbrev=0 --tags)


.PHONY: build test deploy


build:
	babel src --out-dir ./src --ignore "src/**/*.js; src/node_modules; src/**/package.json"

deploy:

	./scripts/publish.sh $(VERSION)

test:
	npm test
