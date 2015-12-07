var ribbonCalculator = require('../part2').ribbonCalculator;

describe('ribbonCalculator', function() {
  var testVector = [
    [['2x3x4'], 34],
    [['3x5x8'], 136],
    [['1x1x10'], 14],
    [['2x3x4', '3x5x8', '1x1x10'], 184]
  ];

  testVector.forEach(function(tv) {
    it('should return ' + tv[1] + ' for the boxes ' + tv[0], function() {
      var result = ribbonCalculator(tv[0]);
      expect(result).toBe(tv[1]);
    });
  });
});
