// main class for shapes
class Shape {
    constructor(text, fontColor, bgColor) {
        this.text = text;
        this.fontColor = fontColor
        this.bgColor = bgColor
    }
}

// sub-class for circles
class Circle extends Shape {
    constructor(text, fontColor, bgColor,) {
        super(text, fontColor, bgColor);
        this.tag = 'circle'
        this.renderShape = function () {
            const createShape = `<circle cx="150" cy="100" r="80" fill=\"${this.bgColor}\" />`
            return createShape;
        };
        this.renderText = function () {
            const createText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill=\"${this.fontColor}\">${this.text}</text>`
            return createText;
        }
    }
}

// Sub-class for triangles
class Triangle extends Shape {
    constructor(text, fontColor, bgColor,) {
        super(text, fontColor, bgColor);
        this.tag = 'polygon'
        this.renderShape = function () {
            const createShape = `<polygon points="150,20 70,180 230,180" fill=\"${this.bgColor}\" />`
            return createShape; 
        };
        this.renderText = function () {
            const createText = `<text x="150" y="170" font-size="60" text-anchor="middle" fill=\"${this.fontColor}\">${this.text}</text>`
            return createText;
        }
    }
}

// sub-class for squares
class Square extends Shape {
    constructor(text, fontColor, bgColor,) {
        super(text, fontColor, bgColor);
        this.tag = 'rect'
        this.renderShape = function () {
            const createShape = `<rect x="70" y="20" width="160" height="160" fill=\"${this.bgColor}\" />`
            return createShape;
        };
        this.renderText = function () {
            const createText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill=\"${this.fontColor}\">${this.text}</text>`
            return createText;
        }

    }
}

// function to generate the string that will be written into the new SVG file
function generateSVG(data) {
    let shape;
    if (data.shape === 'triangle') {
        shape = new Triangle(data.logo, data.fontColor, data.bgColor);
    } else if (data.shape === 'circle') {
        shape = new Circle(data.logo, data.fontColor, data.bgColor);
    } else if (data.shape === 'square') {
        shape = new Square(data.logo, data.fontColor, data.bgColor);
    };

    return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      ${shape.renderShape()}
      ${shape.renderText()}

    </svg>`)
};

// exports functions and classes for writing and testing
module.exports = {
    generateSVG,
    Triangle,
    Circle,
    Square,
};
