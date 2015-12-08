/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/

var boxes = ['2x3x4', '3x5x8', '1x1x10'];
var dimensions = [];

function wrappingCalculator(boxes) {
  for (var i = 0; i < boxes.length; i++) {
    dimensions.push(boxes[i].split('x').map(Number));

    // var l = dimensions[i][0];
    // var w = dimensions[i][1];
    // var h = dimensions[i][2];

  }

}

function paperCalculator(boxes) {

  // TODO: return the correct amount of wrapping paper needed.
  return 0;
};


var paperNeeded = wrappingCalculator(['2x3x4','1x1x10'])
console.log('You need ' + paperNeeded + ' square feet of wrapping paper.')
exports.wrappingCalculator = wrappingCalculator;
exports.paperCalculator = paperCalculator;

