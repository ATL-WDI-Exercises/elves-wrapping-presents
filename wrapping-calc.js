/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box)
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function wrappingCalculator(boxes) {
  // TODO: return the correct amount of wrapping paper needed.
  var boxDimensions = boxes.split('x');
  var length = boxDimensions[0];
  var width = boxDimensions[1];
  var height = boxDimensions[2];
  console.log("Length: " + length + ". Width: " + width + ". Height: "+height);

  var lengthHeight = length * height;
  var lengthWidth = length * width;
  var widthHeight = width * height;
  console.log("lengthheight: "+lengthHeight+" lengthWidth: "+lengthWidth+" widthHeight: "+widthHeight)

  var surfaceArea = 2 * lengthHeight + 2 * lengthWidth + 2 * widthHeight;
  var extraPaper = 0;
  if (lengthHeight < lengthWidth && lengthHeight < widthHeight){
    extraPaper = lengthHeight;
  } else if (lengthWidth < lengthHeight && lengthWidth < widthHeight){
    extraPaper = lengthWidth;
  } else {
    extraPaper = widthHeight;
  }
  console.log("surfaceArea: " + surfaceArea);

  console.log("extraPaper: " + extraPaper);
  return surfaceArea + extraPaper;
}

var paper = wrappingCalculator(['2x3x4', '1x1x10']);

console.log('paper needed: '+ paper);

exports.wrappingCalculator = wrappingCalculator;
