if (!chai){ var chai = require('chai'); }

var should = chai.should();

describe('dumb', function() {
  describe('Array', function() {
    it('should have length', function() {
      [].length.should.equal(0);
    });
  });
});