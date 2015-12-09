/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/


function paperCalculator(boxes) {

var refinedArray = [ ];
var iterateArray = boxes.length;

/*
this for loop iterates thru the main array, removes the x's, then puts the result
as 3 arrays inside an array called refinedArray.
*/

for (var i = 0; i < iterateArray; i++) {
    
    var x = boxes[ i ];
    var y = x.split('x');
    y = y.map(Number);  //turned strings into integers...thanks Nick!!!
    refinedArray.push(y);
}

/*finding the scrap factor*/
var runningTotal = 0;
var crazyArray = refinedArray.length;
for (var i = 0; i < crazyArray; i++) {
    
    var smallestSurfaceArea = 0;
    if (refinedArray[ i ] [ 0 ] * refinedArray[ i ] [ 1 ] > smallestSurfaceArea) {
        smallestSurfaceArea = refinedArray[ i ] [ 0 ] * refinedArray[ i ] [ 1 ];
    } else if (refinedArray[ i ] [ 0 ] * refinedArray[ i ] [ 2 ] > smallestSurfaceArea) {
        smallestSurfaceArea = refinedArray[ i ] [ 0 ] * refinedArray[ i ] [ 2 ];
    } else {
        smallestSurfaceArea = refinedArray[ i ] [ 1 ] * refinedArray[ i ] [ 2 ];
    }

/* finding paper req'd BEFORE scrap */

    var A = refinedArray[ i ] [ 0 ] * 2 * refinedArray[ i ] [ 1 ];
    var B = refinedArray[ i ] [ 1 ] * 2 * refinedArray[ i ] [ 2 ];
    var C = refinedArray[ i ] [ 2 ] * 2 * refinedArray[ i ] [ 0 ];
    var sumABC = A + B + C;
    
/* i need to store result in seperate variable w/ each iteration */

    
    
    var totalPaper = sumABC + smallestSurfaceArea;
    runningTotal += totalPaper;
    //console.log('var A= ' + A);
    //console.log('var B= ' + B);
    //console.log('var C= ' + C);
    console.log('var sumABC= ' + sumABC);
    console.log('smallest surface area: ' + smallestSurfaceArea);
    console.log('total paper reqd : ' + totalPaper);
    console.log('overall' + runningTotal);
    
}

return runningTotal;
}
exports.paperCalculator = paperCalculator;
