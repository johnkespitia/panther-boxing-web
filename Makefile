cnf ?= .env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))
RUN_APP = docker exec $(APP_NAME)-front-app-1

.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build the containers
	docker compose build

start: ## Start the containers
	docker compose up -d

stop: ## Stop the containers
	docker compose down

node-install: ## install all dependencies
	$(RUN_APP) npm install

npm-install: ## add new dependency
	$(RUN_APP) npm i $(c)

test: ## run test
	$(RUN_APP) npm run test

build-app: ## run build
	$(RUN_APP) npm run build

eject: ## run eject
	$(RUN_APP) npm run eject