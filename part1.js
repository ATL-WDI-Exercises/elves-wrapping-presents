function paperCalculator(boxes) {
    var dimensions = [];
    var total = 0;
    for (var i = 0; i < boxes.length; i++) {
        dimensions.push(boxes[i].split("x").map(Number));
    }
    // console.log(dimensions);
    for (var i = 0; i < dimensions.length; i++) {
        var l = dimensions[i][0];
        var w = dimensions[i][1];
        var h = dimensions[i][2];
        var side1 = l * w;
        var side2 = w * h;
        var side3 = h * l;
        var extra = [side1, side2, side3];
        extra.sort(function(a, b) {
            return a - b
        });
        total += (2 * side1 + 2 * side2 + 2 * side3 + extra[0]);
        // return box;
    }
    return (total);
};

var paperNeeded = paperCalculator(['2x3x4', '1x1x10']);
console.log('You need ' + paperNeeded + ' square feet of wrapping paper.');
exports.paperCalculator = paperCalculator;
