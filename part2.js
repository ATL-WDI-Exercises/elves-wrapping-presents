/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
/*
   Return the ribbon needed to wrap a box.
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
//initial array with dimensions for 3 boxes
var boxDim = ['2x3x4', '3x5x8', '1x1x10'];

// splits the initial array into an array of 3 arrays
var boxDimSplit = boxDim.map(function(num) {
    return (num.split("x"));
});


// creates individual arrays
boxDimOne = boxDimSplit[0];
boxDimTwo = boxDimSplit[1];
boxDimThree = boxDimSplit[2];

function ribbonCalculator(boxes) {
  //splits the string elements into an array
    //var boxArray = boxes.split("x");

  //assigns dimensions of box to a side and converts strings to numbers
    var sideOne = parseInt(boxes[0]);
    var sideTwo = parseInt(boxes[1]);
    var sideThree = parseInt(boxes[2]);


  //calculates the possible distances of the ribbon
    var x = (2 * (sideOne + sideTwo));
    var y = (2 * (sideOne + sideThree));
    var z = (2 * (sideTwo + sideThree));

  //initial length for testing
    var ribbonLength = x;

  // if/else if to determine the shortest ribbon length
   if (ribbonLength > y) {
    ribbonLength = y;
    }
    else if (ribbonLength > z) {
    ribbonLength = z;
    }

   return ribbonLength;
}

//runs the function ribbonCalculator with the dimensions from original array
console.log("The amount of ribbon needed is " + ribbonCalculator(boxDimOne) + " feet.");
console.log("The amount of ribbon needed is " + ribbonCalculator(boxDimTwo) + " feet.");
console.log("The amount of ribbon needed is " + ribbonCalculator(boxDimThree) + " feet.");


