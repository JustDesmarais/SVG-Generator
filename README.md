# SVG-Generator

## Description

SVG Generator is a simple Node.js application that will automatically create an SVG Logo for you to implement into any of your HTML builds!  Simply enter ```node {main.js}``` into the CLI at the directory of your choice and you will be prompted to enter your preferences.  This will determine what text to list, the color of the text and logo respectively, and the shape of the logo.

The app will output a file named "logo.svg" complete with XML code written within.

The application itself uses Inquirer and fs to relay prompts through the command line and write the new file, respectively, as well as inquirer-maxlength-input-prompt to determine the max-length of the text added.

## Table of Contents
* [Installation](#Installation)
* [Demo](#Demo)
* [Questions](#Questions)

## Installation <a id="Installation"></a>

Download the repository into your project directory by following the link below.  Run NPM Intall to ensure Inquirer and inquirer-maxlength-input-prompt are installed to the project

https://github.com/JustDesmarais/SVG-Generator


## Demo <a id="Demo"></a>

[View a demo of the app's functionality here!](https://drive.google.com/file/d/1E0hV84T7XQYJ8pnMlsT5rkxrMCINwrLC/view?usp=sharing)

### Mock-up

The following image shows a mock-up of the generated SVG given the following input entered by the user: JRD for the text, yellow for the text color, circle from the list of shapes, and blue for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![mock-up image of the svg output file](./images/logo.png)

## Questions <a id="Questions"></a>

Reach out at my [GitHub!](https://github.com/JustDesmarais)