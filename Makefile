SHELL=/bin/bash
VERSION=$(shell git describe --abbrev=0 --tags)


.PHONY: build test deploy


build:
	yarn version --new-version $(VERSION)
	yarn build

deploy:
	yarn publish --new-version $(VERSION)

test:
	yarn test
