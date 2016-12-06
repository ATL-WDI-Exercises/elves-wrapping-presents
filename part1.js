/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dims of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
var totals = [];
var total = 0;
function paperCalculator(boxes) {
  for (i = 0; i < boxes.length; i++) {
    var dim = boxes[i].split('x').map(Number);
    dim.sort();
    var paper = (((2 * (dim[0] * dim[1])) + (2 * (dim[1] * dim[2])) +
                (2 * (dim[0] * dim[2]))) + (dim[0] * dim[1]));
    totals.push(paper);
    console.log(dim);
    console.log(paper);
    console.log(totals);
  }
  for (i = 0; i < totals.length; i++) {
    total += totals[i];
  }
  return total;
}

exports.paperCalculator = paperCalculator;


  //for (i = 0; i < boxes.length; i++) {
  //var dim = boxes.split('x').map(Number);
  //}
