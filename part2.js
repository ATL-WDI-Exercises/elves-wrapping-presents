function ribbonCalculator(boxes) {
  var dimensions = [];
  var total = 0;
  for (var i = 0; i < boxes.length; i++) {
    dimensions.push(boxes[i].split('x').map(Number));
  }
  // console.log(dimensions);
  for (var i = 0; i < dimensions.length; i++) {
    var l = dimensions[i][0];
    var w = dimensions[i][1];
    var h = dimensions[i][2];
    var ribbon = 2 * l + 2 * w;
    var bow = l * w * h;
    total += ribbon + bow;
  }
  return (total);
};

exports.ribbonCalculator = ribbonCalculator;
