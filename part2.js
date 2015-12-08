/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/

var boxArray = ['2x3x4', '3x5x8', '1x1x10'];
function ribbonCalculator(boxesArr) {
  var total = 0;
  for (i = 0; i < boxesArr.length; i++) {
    total += ribbonCalculatorHelper(boxesArr[i]);
  }
  return total;
}

function ribbonCalculatorHelper(boxes) {
  var l = boxes.slice(0, boxes.indexOf('x'));
  var w = boxes.slice(boxes.indexOf('x') + 1, boxes.lastIndexOf('x'));
  var h = boxes.slice(boxes.lastIndexOf('x') + 1);

  var parL = parseInt(l, 10);
  var parW = parseInt(w, 10);
  var parH = parseInt(h, 10);

  var shortPath = [((2 * parL) + (2 * parW)), ((2 * parW) +
    (2 * parH)), ((2 * parH) + (2 * parL))];
  shortPath.sort(function(a, b) {
    return a - b;
  });
  var totalRibbon = shortPath[0] + (parL * parW * parH);
  return totalRibbon;
}
ribbonCalculator(boxArray);

exports.ribbonCalculator = ribbonCalculator;
