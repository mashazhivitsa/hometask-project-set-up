const {getRectanglePerimeter, getRectangleArea, getRectangleInfo} = require('../js/rectangle')

test('should return the perimeter of rectangle with sides length and width 5 and 5 accordingly', () => {
  const rectanglePerimeter = getRectanglePerimeter(5,5);
  expect(rectanglePerimeter).toBe(20)
});

test('should return the perimeter of rectangle with sides length and width 7 and 8 accordingly', () => {
  const rectanglePerimeter = getRectanglePerimeter(7,8);
  expect(rectanglePerimeter).toBe(30)
});


test('should return the area of rectangle with sides length and width 100001 and 99999 accordingly', () => {
  const rectangleArea = getRectangleArea(100,999);
  expect(rectangleArea).toBe(99900)
});

test('should return the area of rectangle with sides length and width 100001 and 99999 accordingly', () => {
  const rectangleArea = getRectangleArea(60,85);
  expect(rectangleArea).toBe(5100)
});

test('should return the proper info of rectangle with sides length and width 10 and 20 accordingly', () => {
  console.log = jest.fn();
  getRectangleInfo(10,20);
  expect(console.log).toHaveBeenCalledWith('The perimeter of a rectangle is 60 and the area is 200')
});

test('should return the proper info of rectangle with sides length and width 3 and 7 accordingly', () => {
  console.log = jest.fn();
  getRectangleInfo(3,7);
  expect(console.log).toHaveBeenCalledWith('The perimeter of a rectangle is 20 and the area is 21')
});

