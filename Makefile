node_modules: package.json
	@yarn install
	@touch node_modules

.PHONY: build
build: node_modules
	@yarn build

.PHONY: start
start: build
	@PORT=3000 node dist/server.js

.PHONY: deploy
deploy: build
	@yarn serverless deploy
