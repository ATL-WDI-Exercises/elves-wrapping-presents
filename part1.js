/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/

var boxArray = ['2x3x4', '3x5x8', '1x1x10'];

var dims1 = boxArray[0];
var dims2 = boxArray[1];
var dims3 = boxArray[2];

//var numOfBoxes = boxArray.length;
//console.log("numOfBoxes: " + numOfBoxes);
//console.log('dims1: ' + dims1);


//function getDims(dims1,dims2,dims3){
  var lwh1 = dims1.split('x');
  var lwh2 = dims2.split('x');
  var lwh3 = dims3.split('x');
//}

//console.log('lwh1: ' + lwh1);

// maps the numbers for each box to convert string digits to Numbers
var lwhNums1 = lwh1.map(function(n) {
    return parseInt(n, 10);
});
var lwhNums2 = lwh2.map(function(n) {
    return parseInt(n, 10);
});
var lwhNums3 = lwh3.map(function(n) {
    return parseInt(n, 10);
});


// Sorts the numbers dims ascending so that the next function has the
// smallest box side to add
var lwhNumsSorted1 = lwhNums1.sort(function(a, b) {
    return a - b;
});
var lwhNumsSorted2 = lwhNums2.sort(function(a, b) {
    return a - b;
});
var lwhNumsSorted3 = lwhNums3.sort(function(a, b) {
    return a - b;
});

// used to check to see the data returned from lwhNumsSorted are numbers
//var typeOf = typeof lwhNumsSorted1;


var l1 = parseInt(lwhNumsSorted1[0], 10);
var w1 = parseInt(lwhNumsSorted1[1], 10);
var h1 = parseInt(lwhNumsSorted1[2], 10);
var l2 = parseInt(lwhNumsSorted2[0], 10);
var w2 = parseInt(lwhNumsSorted2[1], 10);
var h2 = parseInt(lwhNumsSorted2[2], 10);
var l3 = parseInt(lwhNumsSorted3[0], 10);
var w3 = parseInt(lwhNumsSorted3[1], 10);
var h3 = parseInt(lwhNumsSorted3[2], 10);

// used to check to see the data returned from l1 is a number
//var typeOfl = typeof l1;

// var l = parseInt(lwhNumsSorted[0], 10);
// var w = lwhNumsSorted[1];
// var h = lwhNumsSorted[2];

function boxes(l1, w1, h1, l2, w2, h2, l3, w3, h3) {
    var lw1 = l1 * w1;
    var lh1 = l1 * h1;
    var wh1 = w1 * h1;
    var lw2 = l2 * w2;
    var lh2 = l2 * h2;
    var wh2 = w2 * h2;
    var lw3 = l3 * w3;
    var lh3 = l3 * h3;
    var wh3 = w3 * h3;

    return lw1 + lw1 + lh1 + wh1 + lw2 + lw2 + lh2 + wh2 + lw3 + lw3 + lh3 + wh3;


}


// console.log('lwhNums:' + lwhNums + ', ' + "lwhNumsSorted: " + lwhNumsSorted);
// console.log(lwh);
// console.log("var lwh = " + lwh);
// console.log('data type of var lwhNumbsSorted: ' + typeOf);
// console.log('data type of var l: ' + typeOfl);
// console.log('l: ' + l + ' w: ' + w + ' h: ' + h);
// console.log('boxes: ' + boxes(l1, w1, h1, l2, w2, h2, l3, w3, h3));






// remember to sort and add the smallest side area of the box to the total
function paperCalculator(boxes) {
    // TODO: return the correct amount of wrapping paper needed.


    return boxes(l1, w1, h1, l2, w2, h2, l3, w3, h3);
}

// exports.paperCalculator = paperCalculator;
