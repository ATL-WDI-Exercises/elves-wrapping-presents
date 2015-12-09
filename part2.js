/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/

function ribbonCalculator(boxes) {
  var totalRibbon = 0;

  boxes.forEach(function(box) {
    var dimensions = box.split('x').map(function(n) {
      return parseInt(n, 10);
    });

    // get shortest distance around box
    var d1 = 2 * (dimensions[0] + dimensions[1]);
    var d2 = 2 * (dimensions[0] + dimensions[2]);
    var d3 = 2 * (dimensions[1] + dimensions[2]);
    var shortest = d1 < d2 ? d1 : d2;
    shortest = shortest < d3 ? shortest : d3;

    // get volume of box
    var volume = dimensions[0] * dimensions[1] * dimensions[2];

    // calculate ribbon needed for this box and add it to the total
    totalRibbon += shortest + volume;
  });
  return totalRibbon;
};

exports.ribbonCalculator = ribbonCalculator;
