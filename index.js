//require jest and inquirer
const Jest = require('jest');
const Inquirer = require('inquirer');

//Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "text",
        message: "Text: Enter up to 3 characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Text Color: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "Shape Color: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like?",
        choices: ["Circle", "Square", "Triangle"],
    },

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log("Success!");
    }
  });