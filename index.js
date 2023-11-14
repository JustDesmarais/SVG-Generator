const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const shapeGen = require('./lib/shapes');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// Writes data into a new SVG file
function writeToFile(data) {
    fs.writeFile(`./examples/logo.svg`, shapeGen.generateSVG(data), (err) =>
      err ? console.error(err) : console.log('Generated logo.svg'))
}

// A function to initialize app and prompt user for info
function init() {

    inquirer
    .prompt ([
        {
        type: 'maxlength-input',
        name: 'logo', 
        message: 'Enter up to three characters to display on your logo',
        maxLength: 3
        }, 
        {
        type: 'input',
        name: 'fontColor', 
        message: 'What color do you want your text to be? (enter color or hexcode)'
        },
        {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        default: 'circle',
        choices: ['circle', 'triangle', 'square']
        },
        {
        type: 'input',
        name: 'bgColor', 
        message: 'What color do you want your background to be? (enter color or hexcode)'
        }
        ])
        .then((response) =>
        writeToFile(response)
        );
}

init();