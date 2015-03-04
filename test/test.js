var assert = require('assert');
var kata = require('../kata.js');

describe('TDD Kata 1', function() {
  describe('String calculator', function() {
    it('should have an add function', function() {
      assert.equal(typeof kata.add, 'function');
    });

    it('should return 0 for an empty string', function() {
      assert.equal(kata.add(''), 0);
    }); 

    it('should return 1 for the string "1"', function() {
      assert.equal(kata.add('1'), 1);
    });

    it('should return 3 for the string "1,2"', function() {
      assert.equal(kata.add('1,2'), 3);
    });

    it('should return 6 for the string "1,2,3"', function() {
      assert.equal(kata.add('1,2,3'), 6);
    });

    it('should accept new lines in the input', function() {
      assert.equal(kata.add('1,2\n3'), 6);
    });

    it('should support different delimiters', function() {
      assert.equal(kata.add('//;\n1;2;3'), 6);
    });

    it('should throw an error if negatives are used', function() {
      assert.throws(function() {kata.add('-1,-2,3');}, Error);
    });

    it('should ignore numbers bigger than 1000', function() {
      assert.equal(kata.add('1001,2'), 2);
    });

    it('should allow delimiters from any length', function() {
      assert.equal(kata.add('//[***]\n1***2***3'), 6);
    });

    it('should allow multiple delimiters of length 1', function() {
      assert.equal(kata.add('//[*][%]\n1*2%3'), 6);
    });

  })
});
