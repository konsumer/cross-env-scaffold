# cross-env-scaffold

## Usage

* `npm install` to install development dependencies
* `npm start` starts a developer-server for browser-based usage

## Testing

* `npm test` for test
* `TEST={TESTNAME} npm run singletest` for a single test in CLI
* `open test/index.html` for in-browser testing.
* `open test/test.html?{TESTNAME}` for in-browser testing of a single test

For single-tests, testname can be combined with & symbol, to include multiple files in a single instance.


To add more tests, make tests that look like `test/test.foobar.js` and put them in `test` folder with filename that begins with `test.`. Add a script tag in test/index.html, just like  `foobar`
