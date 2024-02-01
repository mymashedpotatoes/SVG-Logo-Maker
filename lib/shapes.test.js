//imports the circle, square, and triangle shape classes
// const { describe } = require("yargs");
const {Circle, Square, Triangle} = require("./shapes");

describe('Circle', () => {
    it('render circle with green background, white EGG text', () => {
        const circle = new Circle('EGG', 'green', 'white');
        expect(circle.render()).toEqual(`<svg height="100" width="100">
        <circle cx="50" cy="50" r="40" style="fill:green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">EGG</text> 
        </svg>`);
    });
});

describe('Square', () => {
    it('render square with blue background, and black JGM text', () => {
        const square = new Square('JGM', 'blue', 'black');
        expect(square.render()).toEqual(`<svg width="400" height="180">
        <rect x="50" y="20" width="150" height="150" style="fill:blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">JGM</text> 
      </svg>`);
    });
});

describe("Triangle", () => {
    it("render triangle with red background, yellow HJG text", () => {
        const triangle = new Triangle('HJG', 'red', 'yellow');
        expect(triangle.render()).toEqual(`<svg height="250" width="450">
        <polygon points="225,10 100,210 350,210" style="fill:red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">HJG</text>
      </svg>`);
    })
})