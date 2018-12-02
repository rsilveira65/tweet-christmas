ESLINT=./node_modules/.bin/eslint
TAPE=./node_modules/.bin/tape

# ------------------------------------------------------------------------------

lint:
	$(ESLINT) ./application/**/*.js
	$(ESLINT) ./tests/*.js

test:
	@make lint
	$(TAPE) ./tests/*.js 

# ------------------------------------------------------------------------------

coverage:
	$(TAPE) ./tests/*.js --coverage --coverage-report=lcov

# ------------------------------------------------------------------------------

deploy:
	./scripts/deploy.sh ${version}

# ------------------------------------------------------------------------------