//packages needed for the application
const Jest = require('jest');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require('fs'); 


//questions for prompts
const questions = [
  {
      type: 'input',
      message: 'Text: Choose up to 3 characters',
      name: 'text',
  },
  {
      type: 'input',
      message: 'Text Color: Choose what color you want the text to be (can be a hexidecimal number)',
      name: 'textColor',
  },
  {
      type: 'list',
      message: 'Select a shape for the logo',
      name: 'shape',
      choices: ['Circle', 'Square', 'Triangle']
  },
  {
      type: 'input',
      message: 'Shape Color: Choose what color you want the shape to be (can be a hexidecimal number)',
      name: 'shapeColor',
  },
];

//after questions are answered data is written to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Generating!'))
}

//prompt for questions and make logo.svg file
function init() {
  inquirer
.prompt(questions)
.then((res) => {
  console.log(res);
  writeToFile('./examples/logo.svg', generateLogo(res));
});
}


//function to apply the data to the shape, color, text, anf text color
function generateLogo(data) {

  var shape = ""; 

  if (data.shape === "Circle") {
      shape = new Circle()
  } else if (data.shape === "Square") {
      shape = new Square()
  } else {
      shape = new Triangle()
  }


  shape.setColor(data.shapeColor);
  shape.setText(data.text)
  shape.setTextColor(data.textColor)
  return shape.render()
}

init();