/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function ribbonCalculator(boxes) {
  var total = 0;
  var dimension = 0;
  var extra, dimensionSort;

  for (var i = 0; i < boxes.length; i++) {
    dimension = boxes[i].split('x').map(function(a) { return parseInt(a, 10);});
    l = dimension[0];
    w = dimension[1];
    h = dimension[2];
    extra = l * w * h;

    dimensionSort = dimension.sort(function(a, b) {
      return a - b;
    });

    total += (dimensionSort[0] * 2) + (dimensionSort[1] * 2) + extra;
  }
  return total;
};

exports.ribbonCalculator = ribbonCalculator;
