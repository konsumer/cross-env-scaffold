#!/usr/bin/env node

// run a single test in CLI

var sys = require('sys');
var exec = require('child_process').exec;

command = 'phantomjs ' + __dirname + '/lib/mocha-phantomjs/lib/mocha-phantomjs.coffee ' + __dirname + '/test.html?' + process.env.TEST + ' spec';
console.log(command);

var child = exec(command,  function (error, stdout, stderr) {
	sys.puts(stdout);
});