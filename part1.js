/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function paperCalculator(boxes) {
  var paperNeeded = 0;
  for (var i = 0; i < boxes.length; i++) {
    var boxDimensions = boxes[i].split('x');
    var length = parseInt(boxDimensions[0]);
    var width = parseInt(boxDimensions[1]);
    var height = parseInt(boxDimensions[2]);
    var minSide = Math.min((length * width), (width * height), (height * length));
    paperNeeded += (2 * length * width) + (2 * width * height) + (2 * height * length) + minSide;
}
  return paperNeeded;
}
exports.paperCalculator = paperCalculator;
