/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function paperCalculator(boxes) {
  // TODO: return the correct amount of wrapping paper needed.
    var total = 0;
  for (var i = 0; i < boxes.length; i++) {
    var dimensions = boxes[i].split("x");
    var length = parseInt(dimensions[0]);
    var width = parseInt(dimensions[1]);
    var height = parseInt(dimensions[2]);
    var lAndW = length * width * 2;
    var wAndH = width * height * 2;
    var hAndL = height * length * 2;
    var slack = Math.min(length*width, width*height, height*length);
    total += lAndW + wAndH + hAndL + slack;
  }
  return total;
};

exports.paperCalculator = paperCalculator;
