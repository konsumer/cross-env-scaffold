if (typeof exports !== "undefined"){ var assert = require('assert'); } else{ var assert = QUnit.assert; suite = module; }

suite('Array');

test('#length', function(){
  var arr = [1,2,3];
  assert.ok(arr.length === 3);
});

test('#indexOf()', function(){
  var arr = [1,2,3];
  assert.ok(arr.indexOf(1) === 0);
  assert.ok(arr.indexOf(2) === 1);
  assert.ok(arr.indexOf(3) === 2);
});