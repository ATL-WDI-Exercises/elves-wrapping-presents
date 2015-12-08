/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/

var boxArray = ['2x3x4', '3x5x8', '1x1x10'];
function paperCalculator(boxesArr) {
  var total = 0;
  for (i = 0; i < boxesArr.length; i++) {
    total += paperCalculatorHelper(boxesArr[i]);
  }
  return total;
}

function paperCalculatorHelper(boxes) {
  var l = boxes.slice(0, boxes.indexOf('x'));
  var w = boxes.slice(boxes.indexOf('x') + 1, boxes.lastIndexOf('x'));
  var h = boxes.slice(boxes.lastIndexOf('x') + 1);

  var parL = parseInt(l, 10);
  var parW = parseInt(w, 10);
  var parH = parseInt(h, 10);

  var values = [(parL * parW), (parW * parH), (parH * parL)];
  values.sort(function(a, b) {
    return a - b;
  });
  var totalPaper = ((2 * values[0]) + (2 * values[1]) + (2 * values[2]) +
  values[0]);
  return totalPaper;
}

paperCalculator(boxArray);
module.exports.paperCalculator = paperCalculator;

