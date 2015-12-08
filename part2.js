/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function ribbonCalculator(boxes) {
  // TODO: return the correct amount of ribbon needed.
  var ribbonNeeded = 0;
  for ( var i = 0; i < boxes.length; i++) {
    var dimensions = boxes[i].split('x');
    var length = parseInt(dimensions[0]);
    var width = parseInt(dimensions[1]);
    var height = parseInt(dimensions[2]);
    var perimeter = (2 * length) + (2 * width);
    // console.log("top: 2x"+length+"x"+width+" = "+ top);
    var cubicFt = length * width * height;
    // console.log("minArea is " + minArea);
    ribbonNeeded += (perimeter + cubicFt);
    // console.log("paperNeeded is " + paperNeeded);
  }
  return ribbonNeeded;
};

exports.ribbonCalculator = ribbonCalculator;
