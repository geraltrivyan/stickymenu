all: clean build

clean:
	@rm -f jquery.stickyMenu.min.js

compile:
	@cat jquery.stickyMenu.js > jquery.stickyMenu.min.js

lint:
	@jshint jquery.stickyMenu.js --config .jshintrc

build:
	@jshint jquery.stickyMenu.js --config .jshintrc
	@cat jquery.stickyMenu.js | uglifyjs -nc -o jquery.stickyMenu.min.js

.PHONY: build clean compile lint

