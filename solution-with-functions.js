// Return an array of the 3 surface areas of a box.
// We assume that opposite sides of the box have the same dimensions.
function getAreas(dimensions) {
  var w = dimensions[0];
  var h = dimensions[1];
  var d = dimensions[2];
  return [d * w, w * h, h * d];
}

// Return the surface area of a box with 6 sides.
// We assume that opposite sides of the box have the same dimensions.
function calcSurfaceArea(areas) {
  return 2 * (areas[0] + areas[1] + areas[2]);
}

// Return the smallest of areas[0], areas[1], and areas[2]
function getSmallestSide(areas) {
  var smallestSide = areas[0] < areas[1] ? areas[0] : areas[1];
  return smallestSide < areas[2] ? smallestSide : areas[2];
}

// Return the amount of wrapping paper needed to wrap 1 box
function getPaperNeeded(box) {
  var dimensions = box.split('x');
  var areas = getAreas(dimensions);
  return calcSurfaceArea(areas) + getSmallestSide(areas);
}

/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box)
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function wrappingCalculator(boxes) {
  var result = 0;
  boxes.forEach(function(box) {
    result += getPaperNeeded(box);
  });
  return result;
};

exports.wrappingCalculator = wrappingCalculator;
