class Shape {
    constructor(text, color, textColor) {
        this.text = text,
        this.color = color,
        this.textColor = textColor
    }
}

class Circle extends Shape{
    constructor(text, color, textColor) {
    super(text, color, textColor)
    }
    render() {
        return `<svg height="100" width="100">
        <circle cx="50" cy="50" r="40" style="fill:${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        </svg>`
    }
}

class Square extends Shape{
    constructor(text, color, textColor) {
    super(text, color, textColor)
    }
    render() {
        return `<svg width="400" height="180">
        <rect x="50" y="20" width="150" height="150" style="fill:${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
      </svg>`
    }
}

class Triangle extends Shape{
    constructor(text, color, textColor) {
    super(text, color, textColor)
    }
    render() {
        return `<svg height="250" width="450">
        <polygon points="225,10 100,210 350,210" style="fill:${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}
module.exports = { Circle, Square, Triangle };