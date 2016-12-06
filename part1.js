/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/
//initial array with dimensions for 3 boxes
var  boxDim = ['2x3x4', '3x5x8', '1x1x10'];

function paperCalculator(boxes) {

//splits the initial array into an array of 3 arrays
    var  boxDimSplit = boxes.map(function(num) {
    return (num.split('x'));
});

for (i = 0 ; i < boxDimSplit.length; i++)  {

//creates individual arrays
    var boxDimensions = boxDimSplit[i];

//assigns dimensions of box to a side and converts strings to numbers
    var sideOne = parseInt(boxDimensions[0]);
    var sideTwo = parseInt(boxDimensions[1]);
    var sideThree = parseInt(boxDimensions[2]);

//calculates surface area of box
    var surfaceArea = (2 * (sideOne + sideTwo + sideThree));

//stores the area of each side in an array
    var areaSide = [(2 * sideOne) , (2 * sideTwo), (2 * sideThree)];

//initializes the extra variable - setting it equal to the area of one of the sides
    var extra = areaSide[0];

//test to see which side has the smallest area
for (x=0 ; x<areaSide.length; x++){
    if (areaSide[x] < extra) {
        extra = areaSide[x];
    }

  }

 console.log( "The elves need " + (extra + surfaceArea) + " square feet of paper.");


}
}
// calls the paperCalculator function with boxDim as the argument
paperCalculator(boxDim);

