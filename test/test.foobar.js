if (!chai){ var chai = require('chai'); }

// just setup the ones you use
var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed

var foobar = {
  sayHello: function() {
    return 'Hello World!';
  }
};

describe('Foobar', function() {
  describe('sayHello()', function() {
    it('should work with assert', function() {
      assert.equal(foobar.sayHello(), 'Hello World!');
    });

    it('should work with expect', function() {
      expect(foobar.sayHello()).to.equal('Hello World!');
    });

    it('should work with should', function() {
      foobar.sayHello().should.equal('Hello World!');
    });

    /*
    it('should fail, funky chicken', function() {
      foobar.sayHello().should.equal('funky chicken!');
    });
     */
  });
});

describe('Barfoo', function() {
  describe('sayHello()', function() {
    it('should work with assert', function() {
      assert.equal(foobar.sayHello(), 'Hello World!');
    });

    it('should work with expect', function() {
      expect(foobar.sayHello()).to.equal('Hello World!');
    });

    it('should work with should', function() {
      foobar.sayHello().should.equal('Hello World!');
    });

    /*
    it('should fail, funky chicken', function() {
      foobar.sayHello().should.equal('funky chicken!');
    });
     */
  });
});
