/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
     ribbon for shortest distance around box + volume of box (to tie ribbon)
*/

var boxSamples = ['2x3x4', '3x5x8', '1x1x10'];

function ribbonCalculator(arrOfBoxes) {
  var total = 0;
  for (i = 0; i < arrOfBoxes.length; i++) {
    total += ribbonCalculatorHelper(arrOfBoxes[i]);
  }
  return total;
}

function ribbonCalculatorHelper(box) {
  // TODO: return the correct amount of ribbon needed.
  var l = box.slice(0, box.indexOf('x'));
  var w = box.slice((box.indexOf('x') + 1), box.lastIndexOf('x'));
  var h = box.slice(box.lastIndexOf('x') + 1);

  var lInt = parseInt(l, 10);
  var wInt = parseInt(w, 10);
  var hInt = parseInt(h, 10);

  var shortestDist =
    [((2 * lInt) + (2 * hInt)),
    ((2 * hInt) + (2 * wInt)),
    ((2 * lInt) + (2 * wInt))];

  shortestDist.sort(function(a, b) {
    return a - b;
  });

  var ribbonNeeded = shortestDist[0] + (lInt * wInt * hInt);
  console.log(ribbonNeeded);
  return ribbonNeeded;
}

ribbonCalculator(boxSamples);

exports.ribbonCalculator = ribbonCalculator;
