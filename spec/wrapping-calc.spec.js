var wrappingCalculator = require('../wrapping-calc').wrappingCalculator;
console.log(wrappingCalculator);

describe('wrappingCalculator', function() {
  var testVector = [
    [['2x3x4'], 58],
    [['3x5x8'], 173],
    [['1x1x10'], 43],
    [['2x3x4', '3x5x8', '1x1x10'], 274]
  ];

  testVector.forEach(function(tv) {
    it('should return ' + tv[1] + ' for the boxes ' + tv[0], function() {
      var result = wrappingCalculator(tv[0]);
      expect(result).toBe(tv[1]);
    });
  });
});
