if (typeof exports !== "undefined"){ var assert = require('assert'); } else{ var assert = QUnit.assert; suite = module; }

suite('String');

test('#length', function(){
  assert.ok('foo'.length === 3);
});