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
  for ( var i = 0; i < boxes.length; i++) {
    var dimensions = boxes[i].split('x');
    var length = parseInt(dimensions[0]);
    var width = parseInt(dimensions[1]);
    var height = parseInt(dimensions[2]);
    var top = 2 * length * width;
    // console.log("top: 2x"+length+"x"+width+" = "+ top);
    var side1 = 2 * width * height;
    // console.log("side1: 2x" + width + "x" + height + " = " + side1);
    var side2 = 2 * height * length;
    // console.log("side2: 2x" + height + "x" + length + " = " + side2);
    var minArea = Math.min((top/2), (side1/2), (side2/2));
    // console.log("minArea is " + minArea);
    var surfaceArea = top +  side1 + side2;
    // console.log(top + "+" + side1 + "+" + side2 + "=" + surfaceArea)
    paperNeeded += (surfaceArea + minArea);
    // console.log("paperNeeded is " + paperNeeded);
  }
  return paperNeeded;
};

// paperCalculator(['3x5x8']);
exports.paperCalculator = paperCalculator;
