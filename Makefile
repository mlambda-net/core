SHELL=/bin/bash
VERSION=$(shell git describe --abbrev=0 --tags)


.PHONY: build test deploy


build:
	yarn build

deploy:
	yarn config set version-git-tag false
	yarn config set version-tag-prefix ""
	yarn publish --new-version $(VERSION)

test:
	yarn test
