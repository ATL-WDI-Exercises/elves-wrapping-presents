/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box)
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
var l = "";
var w = "";
var h = "";

function wrappingCalculator(boxes) {
  // TODO: return the correct amount of wrapping paper needed.
  return 0;
};

var paperNeeded = wrappingCalculator(['2x3x4','1x1x10'])
  console.log('You need ' + paperNeeded + 'square feet of wrapping paper.')
exports.wrappingCalculator = wrappingCalculator;
