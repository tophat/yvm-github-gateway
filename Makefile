node_modules:
	@yarn install

.PHONY: build
build: node_modules
	@yarn build

.PHONY: start
start: build
	@PORT=3000 node dist/server.js

.PHONY: deploy
deploy: build
	@serverless deploy
