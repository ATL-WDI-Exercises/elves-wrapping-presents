/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function paperCalculator(boxes) {
  // TODO: return the correct amount of wrapping paper needed.
  for ( var i = 0; i < boxes.length; i++) {
    var dimensions = boxes[i].split('x');
    var length = boxes[i].indexOf;
    var width = boxes[i];
    var height = boxes[i];
  }
  return 0;
};

exports.paperCalculator = paperCalculator;
