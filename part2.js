/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dims of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
var totals = [];
var total = 0;
function ribbonCalculator(boxes) {
  for (i = 0; i < boxes.length; i++) {
    var dim = boxes[i].split('x').map(Number);
    dim.sort();
    var ribbon = (dim[0] * dim[1] * dim[2]) + ((dim[0] * 2) + (dim[1] * 2));
    totals.push(ribbon);
  }
  for (i = 0; i < totals.length; i++) {
    total += totals[i];
  }
  return total;
}

exports.ribbonCalculator = ribbonCalculator;
