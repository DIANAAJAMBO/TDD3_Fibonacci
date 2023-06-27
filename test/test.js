const { assert } = require('chai');
const fibonacci = require('../fibonacci');

describe('Fibonacci test', () => {
  it('should return 0 as fibonacci number', () => {
    assert.equal(fibonacci(0), 0);
  });
  it('should return 1 as fibonacci number', () => {
    assert.equal(fibonacci(1), 1);
  });
  it('should return 1 as fibonacci number', () => {
    assert.equal(fibonacci(2), 1);
  });
  it('should return 3 as fibonacci number', () => {
    assert.equal(fibonacci(3), 2);
  });
  it('should return 5 as fibonacci number', () => {
    assert.equal(fibonacci(4), 3);
  });
  it('should return 8 as fibonacci number', () => {
    assert.equal(fibonacci(5), 5);
  });
});
