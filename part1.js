/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function paperCalculator(boxes) {

  var totalPaper = 0;

  //The forEach function will allow the user to put multiple boxes into the
  //array and still return the correct calculation

  boxes.forEach(function(boxString) {
    //The first line of this function splits the string into an array of
    //[length,width,height]

    var boxDimensions = boxString.split('x');
    var length = boxDimensions[0];
    var width = boxDimensions[1];
    var height = boxDimensions[2];

    //These variables compute the 3 calculations needed to find the surface
    //area.

    var lengthHeight = length * height;
    var lengthWidth = length * width;
    var widthHeight = width * height;

    var surfaceArea = 2 * lengthHeight + 2 * lengthWidth + 2 * widthHeight;
    var extraPaper = 0;

    //This if statement determines which of the following variable are the
    //shortest. This lets the function know how much extra paper is needed.

    if (lengthHeight < lengthWidth && lengthHeight < widthHeight) {
      extraPaper = lengthHeight;
    } else if (lengthWidth < lengthHeight && lengthWidth < widthHeight) {
      extraPaper = lengthWidth;
    } else {
      extraPaper = widthHeight;
    };

    totalPaper += surfaceArea + extraPaper;
  });
  return totalPaper;
}

module.exports.paperCalculator = paperCalculator;
