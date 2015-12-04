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

    var dimensions = box.split('x');
    var w = dimensions[0];
    var h = dimensions[1];
    var d = dimensions[2];

    var areas = [d * w, w * h, h * d];
    var totalSurfaceArea = 2 * (areas[0] + areas[1] + areas[2]);

    var areaOfSmallestSide = areas[0] < areas[1] ? areas[0] : areas[1];
    areaOfSmallestSide = areaOfSmallestSide < areas[2] ? areaOfSmallestSide : areas[2];

    result += totalSurfaceArea + areaOfSmallestSide;
  });
  return result;
};

exports.wrappingCalculator = wrappingCalculator;
