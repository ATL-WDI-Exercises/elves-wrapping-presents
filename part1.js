/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
     lwh
*/
var allBoxes = [];
var all = [];
var totalPaper = 0;
var input = ["2x3x4", "5x6x7"];

function paperCalculator(boxes) {

  //split boxes into arrays
  for(var i = 0; i < boxes.length; i++) {
    allBoxes.push(boxes[i].split('x'));
  }

  //loop through allBoxes to calculate areas
  for(var y = 0; y < allBoxes.length; y++) {
      allBoxes[y][y] = parseInt(allBoxes[y][y], 10); //convert to numbers

      var lw = 2 * (allBoxes[y][0] * allBoxes[y][1]);
      var wh = 2 * (allBoxes[y][1] * allBoxes[y][2]);
      var lh = 2 * (allBoxes[y][0] * allBoxes[y][2]);
      var smallest = [];

      //calculates the smallest side of box
      smallest.push(lw,wh,lh);
      smallest = smallest.sort(function(a,b){return a - b});
      smallest = smallest[0];

      all.push(lw + wh + lh + smallest); //sum of all needed for one box
      totalPaper += all[y]; //adds sum needed for all boxes to one variable
  }

  return totalPaper + " square feet are needed to wrap these packages.";

};

exports.paperCalculator = paperCalculator;
