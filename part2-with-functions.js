/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/

Array.min = function(array) {
  return Math.min.apply(Math, array);
};

function getShortestDistance(dimensions) {
  var d1 = 2 * (dimensions[0] + dimensions[1]);
  var d2 = 2 * (dimensions[0] + dimensions[2]);
  var d3 = 2 * (dimensions[1] + dimensions[2]);
  var result = Array.min([d1, d2, d3]);
  return result;
}

function getVolume(dimensions) {
  return dimensions[0] * dimensions[1] * dimensions[2];
}

function ribbonCalculator(boxes) {
  var totalRibbon = 0;

  boxes.forEach(function(box) {
    var dimensions = box.split('x').map(function(n) {
      return parseInt(n, 10);
    });

    var shortest = getShortestDistance(dimensions);
    var volume = getVolume(dimensions);
    totalRibbon += shortest + volume;
  });
  return totalRibbon;
};

exports.ribbonCalculator = ribbonCalculator;
