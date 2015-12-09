/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function paperCalculator(boxes) {
  // TODO: return the correct amount of wrapping paper needed.

  var boxDimensions = [];
  var paperNeeded = 0;
  for (i = 0; i <boxes.length; i++) {
    var box = boxes[i].split('x').map(Number);
  }

  var length = boxDimensions[i][0];
  var width = boxDimensions[i][1];
  var height = boxDimensions[i][2];

  var side1 = length * width;
  var side2 = width * height;
  var side3 = length * height;
  var smallestSide = [side1, side2, side3];
  smallestSide.sort(function(a, b) {
    return a - b;
  });

  paperNeeded = ((2 * side1) + (2 * side2) + (2 * side3) + smallestSide[0]);


  return paperNeeded;
};

exports.paperCalculator = paperCalculator;
