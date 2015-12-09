/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function paperCalculator(boxes) {
  // TODO: return the correct amount of wrapping paper needed.

  var paperNeeded = 0;
  for (var i = 0; i <boxes.length; i++) {
    var boxDimensions = boxes[i].split('x');

  var length = parseInt(boxDimensions[0]);
  var width = parseInt(boxDimensions[1]);
  var height = parseInt(boxDimensions[2]);

  var side1 = length * width * 2;
  var side2 = width * height * 2;
  var side3 = length * height * 2;
  var smallestSide = Math.min(length * width, width * height, height * length);

  paperNeeded += side1 + side2 + side3 + smallestSide;
}

  return paperNeeded;
};

exports.paperCalculator = paperCalculator;
