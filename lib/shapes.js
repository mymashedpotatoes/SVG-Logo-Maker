class Shape { //shape class holds all shared values for shapes
    constructor(text, shapeColor, textColor) {
        this.shapeColor = '',
        this.text = '',
        this.textColor = ''
    }
    setColor(shapeColor){
        this.shapeColor=(shapeColor);
    }
    setText(text){
        this.text=(text);
    }
    setTextColor(textColor){
        this.textColor=(textColor);
    }
}


class Circle extends Shape{
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" style="fill:${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        
      </svg>`
    }
}


class Square extends Shape{
    constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" viewBox="0, 0, 100, 100" xmlns="http://www.w3.org/2000/svg">

        <rect width="400" height="400" style="fill:${this.shapeColor}" />

        <text x="62" y="62" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        
      </svg>`
    }
}

class Triangle extends Shape{
    constructor(text, shapeColor, textColor) {
    super(text, shapeColor, textColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="200,50 70,275 330,275" style="fill:${this.shapeColor}" />

        <text x="200" y="165" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        
        </svg>`
    }
}
module.exports = { Circle, Square, Triangle };