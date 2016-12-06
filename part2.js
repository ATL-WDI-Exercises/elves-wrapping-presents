function ribbonCalculator(boxes) {

    var refinedArray = [ ];
    var iterateArray = boxes.length;

    for (var i = 0; i < iterateArray; i++) {
        var x = boxes[ i ];
        console.log(x)
        var y = x.split('x');
         y = y.map(Number); 
        refinedArray.push(y);
    }

    var crazyArray = refinedArray.length;

    var totalRibbon = 0;
    for (var i = 0; i < crazyArray; i++) {
        var ribbon = (refinedArray[ i ] [ 0 ] * 2 ) + (refinedArray[ i ] [ 1 ] * 2);
        var bow = refinedArray [ i ] [ 0 ] * refinedArray [ i ] [ 1 ] * refinedArray [ i ] [ 2 ];
        totalRibbon += ribbon + bow;
        console.log ('total length of ribbon = ' + totalRibbon);
    }
    return totalRibbon;
}


exports.ribbonCalculator = ribbonCalculator;
