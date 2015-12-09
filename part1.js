/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
     lwh
*/

//find total square footage of wrapping paper needed for boxes
function paperCalculator(boxes) {
  var totalPaper = 0;
  var allBoxes = [];

  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i].split('x').map(Number);
    allBoxes.push(box);
  }

  //loop through allBoxes to calculate areas
  for (var y = 0; y < allBoxes.length; y++) {
    var lw = 2 * (allBoxes[y][0] * allBoxes[y][1]);
    console.log(lw);
    var wh = 2 * (allBoxes[y][1] * allBoxes[y][2]);
    console.log(wh);
    var lh = 2 * (allBoxes[y][0] * allBoxes[y][2]);
    console.log(lh);
    var smallest = [];

    //calculates the smallest side of box
    smallest.push(lw,wh,lh);
    smallest = smallest.sort(function(a, b) { return a - b; });
    smallest = smallest[0] / 2;
    console.log('smallest: ' + smallest);

    totalPaper += (lw + wh + lh + smallest); //adds sum needed for all boxes to one variable
  }
  console.log('THE END' + totalPaper);
  return totalPaper;
};

exports.paperCalculator = paperCalculator;

