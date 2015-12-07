/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
function ribbonCalculator(boxes) {
  // TODO: return the correct amount of ribbon needed.
  var totalRibbon = 0;

  //This forEach function allows the user to input multiple boxes into the
  //array and still return the correct amount of ribbon.
  boxes.forEach(function(boxString){

    var boxDimensions = boxString.split('x');

    //This sort function sorts the length, height, and width by smallest to
    //largest.  This allows the program to call on the first 2 values of the
    //new array and always have the smallest 2 numbers for ribbonWrap.

    var sortedDimensions = boxDimensions.sort(function(a, b){return a-b;});

    var ribbonWrap = 2*sortedDimensions[0] + 2*sortedDimensions[1];
    var ribbonBow = boxDimensions[0]*boxDimensions[1]*boxDimensions[2];

    totalRibbon += ribbonWrap + ribbonBow;
  });
    return totalRibbon;
}

exports.ribbonCalculator = ribbonCalculator;
