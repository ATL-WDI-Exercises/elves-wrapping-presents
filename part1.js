/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/

var boxSamples = ['2x3x4', '3x5x8', '1x1x10'];

function paperCalculator(arrOfBoxes) {
  var total = 0;
  for (i = 0; i < arrOfBoxes.length; i++) {
    total += paperCalculatorHelper(arrOfBoxes[i]);
  }
  return total;
}

function paperCalculatorHelper(box) {

  var l = box.slice(0, box.indexOf('x'));
  var w = box.slice((box.indexOf('x') + 1), box.lastIndexOf('x'));
  var h = box.slice(box.lastIndexOf('x') + 1);
  var lInt = parseInt(l, 10);
  var wInt = parseInt(w, 10);
  var hInt = parseInt(h, 10);

  var sizes = [(lInt * wInt), (wInt * hInt), hInt * lInt];

  sizes.sort(function(a, b) {
    return a - b;
  });

  var paperNeeded =
    2 * lInt * wInt + 2 * wInt * hInt + 2 * hInt * lInt + sizes[0];

  console.log(paperNeeded);
  return paperNeeded;
}

paperCalculator(boxSamples);

module.exports.paperCalculator = paperCalculator;

