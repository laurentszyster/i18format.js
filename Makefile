test: ugly
	phantomjs deps/make_test.js/run_qunit.js test/index.html

ugly: pull
	uglifyjs \
		src/i18format.js \
		-o i18format-min.js \
		-c -m

pull: deps
	cd deps/make_test.js && git pull origin

deps: deps/make_test.js test/qunit-1.14.0.js test/qunit-1.14.0.css

deps/make_test.js:
	git clone \
		https://github.com/unframed/make_test.js \
		deps/make_test.js

CDNJS_AJAX_LIBS = http://cdnjs.cloudflare.com/ajax/libs

test/qunit-1.14.0.js:
	wget "${CDNJS_AJAX_LIBS}/qunit/1.14.0/qunit.js" -O "test/qunit-1.14.0.js"

test/qunit-1.14.0.css:
	wget "${CDNJS_AJAX_LIBS}/qunit/1.14.0/qunit.css" -O "test/qunit-1.14.0.css"

clean:
	rm deps/* -rf

install:
	sudo apt-get install wget git # nodejs npm phantomjs
	npm install uglify-js
	mkdir deps
