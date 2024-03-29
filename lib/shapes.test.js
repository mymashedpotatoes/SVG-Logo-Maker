//imports the circle, square, and triangle shape classes
const {Circle, Square, Triangle} = require("./shapes");

describe("shapes", () => {
  it("should have the square render correctly", () => {
    const square = new Square()
    square.setColor('blue');
    square.setText('EGG');
    square.setTextColor('white');
    const expectedValue = `<svg version="1.1" width="300" height="200" viewBox="0, 0, 100, 100" xmlns="http://www.w3.org/2000/svg">

        <rect width="400" height="400" style="fill:blue" />

        <text x="50" y="65" font-size="50" text-anchor="middle" fill="white">EGG</text> 
        
      </svg>`
    expect(square.render()).toEqual(expectedValue); //tests if actual value is equal to expected value of square
  });

  it("should have the circle render correctly", () => {
    const circle = new Circle()
    circle.setColor('blue');
    circle.setText('EGG');
    circle.setTextColor('white');
    const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" style="fill:blue" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">EGG</text> 
        
      </svg>`
    expect(circle.render()).toEqual(expectedValue); //tests if actual value is equal to expected value of circle
  });
  
  it("should have the triangle render correctly", () => {
    const triangle = new Triangle()
    triangle.setColor('blue');
    triangle.setText('EGG');
    triangle.setTextColor('white');
    const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="200,50 70,275 330,275" style="fill:blue" />

        <text x="200" y="165" font-size="45" text-anchor="middle" fill="white">EGG</text> 
        
        </svg>`
    expect(triangle.render()).toEqual(expectedValue); //tests if actual value is equal to expected value of triangle
  })

});