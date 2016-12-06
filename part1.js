/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function paperCalculator(boxes) {
  var total = 0;
  var dimension = 0;
  var l, w, h, extra;

  for (var i = 0; i < boxes.length; i++) {
    dimension = boxes[i].split('x').map(Number);
    l = dimension[0];
    w = dimension[1];
    h = dimension[2];
    extra = dimension.sort(function(a, b) {
      return a - b;
    });
    total += (2 * l * w) + (2 * w * h) + (2 * h * l) + (extra[0] * extra[1]);
  }
  console.log(total);

  return total;
}

exports.paperCalculator = paperCalculator;
