# cross-env-scaffold

[![Greenkeeper badge](https://badges.greenkeeper.io/konsumer/cross-env-scaffold.svg)](https://greenkeeper.io/)

A quick starter for an express-based webapp with [travis](https://secure.travis-ci.org/) & local [mocha](http://mochajs.org/) testing (client and server-side) and [handlebars](http://handlebarsjs.com/) templates. 

[![Build Status](https://secure.travis-ci.org/konsumer/cross-env-scaffold.png)](http://travis-ci.org/konsumer/cross-env-scaffold)

## Usage

* `npm install` to install development dependencies
* `npm start` starts a developer-server for browser-based usage (totally optional)

## Testing

* `npm test` for test
* `open test/index.html` for in-browser testing.
* `open test/lib/test.html?{TESTNAME}` for in-browser testing of a single test

For single-tests, {TESTNAME} can be combined with & symbol, to include multiple files in a single instance.


To add more tests, make tests that look like `test/test.foobar.js` and put them in `test` folder with filename that begins with `test.`. Add to `tests` var in test/index.html, just like  `foobar`
