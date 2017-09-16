var assert = require('assert');
var Utils = require('../src');
describe('Array', function() {
  describe('#arrayCompact', function() {
    it('use original rule', function() {
      const testArray = [1, 2, null, 0, undefined, 5];
      const resultArray = Utils.arrayCompact(testArray);
      assert.deepEqual(resultArray, [1, 2, 5]);
    });

    it('use custom rule', function () {
      const testArray = [3, 5, '6', 8];
      const resultArray = Utils.arrayCompact(testArray, (item) => {
        if (Number.isInteger(item) && item > 5) {
          return true
        } else {
          return false;
        }
      });
      assert.deepEqual(resultArray, [8]);
    })
  });
});