all: clean build

clean:
	@rm -f jquery.stickyMenu.min.js

compile:
	@cp jquery.stickyMenu.js jquery.stickyMenu.min.js

build:
	@jshint jquery.stickyMenu.js --config .jshintrc
	@uglifyjs -nc -o jquery.stickyMenu.min.js jquery.stickyMenu.js

.PHONY: build clean compile

