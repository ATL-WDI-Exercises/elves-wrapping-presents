/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/

function getBoxDimensions(box) {
  return box.split('x')
}

function getBoxPerimeters(box) {
 var sorted = box.sort(function(a, b) { return a - b; })
 var perimeter = (2 * box[0]) + (2 * box[1])
 var extra = box[0] * box[1] * box[2]
 console.log(perimeter + extra)
 return perimeter + extra;
}

function ribbonCalculator(boxes) {
  var boxDimensions = boxes.map(getBoxDimensions)
  var boxPerimeters = boxDimensions.map(getBoxPerimeters)
  return boxPerimeters.reduce(function(a, b) { return a + b; })
}

exports.ribbonCalculator = ribbonCalculator;
