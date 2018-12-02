ESLINT=./node_modules/.bin/eslint
TAP=./node_modules/.bin/tape

# ------------------------------------------------------------------------------

lint:
	$(ESLINT) ./application/**/*.js
	$(ESLINT) ./tests/*.js

test:
	@make lint
	$(TAP) ./tests/*.js

# ------------------------------------------------------------------------------

coverage:
	$(TAP) ./tests/*.js --coverage --coverage-report=lcov

# ------------------------------------------------------------------------------

deploy:
	./scripts/deploy.sh ${version}

# ------------------------------------------------------------------------------