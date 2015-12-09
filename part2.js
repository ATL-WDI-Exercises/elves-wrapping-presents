/*
   A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap
the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34
feet.
lwh
*/
function ribbonCalculator(boxes) {
  // TODO: return the correct amount of ribbon needed.
  var totalRibbon = 0;
  var allBoxes = [];

  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i].split('x').map(Number);
    allBoxes.push(box);
  }

  //loop through allBoxes to calculate areas
  for (var y = 0; y < allBoxes.length; y++) {
    var l = allBoxes[y][0];
    var w = allBoxes[y][1];
    var h = allBoxes[y][2];

    totalRibbon += (l * w * h) + (l + l + w + w); //adds sum needed for all boxes to one variable
  }
  console.log('THE END' + totalRibbon);
  return totalRibbon;
};

exports.ribbonCalculator = ribbonCalculator;
