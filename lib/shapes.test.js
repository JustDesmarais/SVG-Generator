// imports classes for testing
const {Triangle, Circle, Square} = require('./shapes.js')

// testing suite to confirm rendering functions are outputting the expected strings of text
describe('Shapes', () => {
    it('Should create a XML string defining circle shape and color', () => {
        const shape = new Circle('JRD', 'blue', 'green');
        expect(shape.renderShape()).toEqual(`<circle cx="150" cy="100" r="80" fill=\"${shape.bgColor}\" />`)
    })
});

describe('Shapes', () => {
    it('Should create an XML string formatting text in the circle', () => {
        const shape = new Circle('JRD', 'blue', 'green');
        expect(shape.renderText()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill=\"${shape.fontColor}\">${shape.text}</text>`)
    })
});

describe('Shapes', () => {
    it('Should create an XML string defining triangle shape and color', () => {
        const shape = new Triangle('JRD', 'blue', 'green');
        expect(shape.renderShape()).toEqual(`<polygon points="150,20 70,180 230,180" fill=\"${shape.bgColor}\" />`)
    })
});

describe('Shapes', () => {
    it('Should create an XML string formatting text of triangle', () => {
        const shape = new Triangle('JRD', 'blue', 'green');
        expect(shape.renderText()).toEqual(`<text x="150" y="170" font-size="60" text-anchor="middle" fill=\"${shape.fontColor}\">${shape.text}</text>`)
    })
});

describe('Shapes', () => {
    it('Should create an XML string defining rectangle shape and color', () => {
        const shape = new Square('JRD', 'blue', 'green');
        expect(shape.renderShape()).toEqual(`<rect x="70" y="20" width="160" height="160" fill=\"${shape.bgColor}\" />`)
    })
});

describe('Shapes', () => {
    it('Should create an XML string formatting text of rectangle', () => {
        const shape = new Square('JRD', 'blue', 'green');
        expect(shape.renderText()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill=\"${shape.fontColor}\">${shape.text}</text>`)
    })
});


