/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
       var paperNeeded;
var length, width, height, minSide;
function paperCalculator(boxes) {
  for (var i = 0;i < boxes.length; i++ ){
    var boxDimensions = boxes[i].split('x');
    length = boxDimensions[0];
    width = boxDimensions[1];
    height = boxDimensions[2];
    minSide = Math.min((length*width),(width*height),(height*length));
    paperNeeded += (2*length*width) + (2*width*height) + (2*height*length) + minSide;
    console.log(paperNeeded);

    return paperNeeded;
*/
function paperCalculator(boxes) {
  // TODO: return the correct amount of wrapping paper needed.
  return 0;
};

exports.paperCalculator = paperCalculator;
