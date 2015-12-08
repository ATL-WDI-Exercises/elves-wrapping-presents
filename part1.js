/*
   Return the wrapping paper needed to wrap a box, including some additional
   paper needed to wrap the present (based on the smallest side of the box).
   The boxes argument is assumed to be an array of strings each containing the
   dimensions of a box to be wrapped, for example:
     ['2x3x4', '3x5x8', '1x1x10']
*/

function getBoxSize(box) {
  return box.split('x')
}

function getSideArea(x, y) {
  return 2 * x * y;
}

function getSideAreas(l, w, h) {
  return [getSideArea(l, w), getSideArea(w, h), getSideArea(l, h)]
}

function getBoxAreas(box) {
  return getSideAreas(box[0], box[1], box[2])
}

function getSmallestSide(box) {
  return Math.min.apply(null, box) / 2
}

function mergeInSmallestSides(boxes, smallSides) {
  for(var i = 0; i < boxes.length; i++) {
    boxes[i].push(smallSides[i])
  }
  return boxes;
}

function paperCalculator(boxes) {
  var boxSizes = boxes.map(getBoxSize)

  var boxAreas = boxSizes.map(getBoxAreas)

  var smallestSides = boxAreas.map(getSmallestSide)

  var boxAreasWithSmallestSide = mergeInSmallestSides(boxAreas, smallestSides)

  var areas = boxAreas.map(function(box) {
    return box.reduce(function(a, b) {
      return a + b;
    })
  })

  var totalArea = areas.reduce(function(a, b) {
    return a + b
  })

  // TODO: return the correct amount of wrapping paper needed.
  return totalArea;
};

exports.paperCalculator = paperCalculator
