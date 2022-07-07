// TODO: Include packages needed for this application
const fs = require("fs");

// need inquirer variable here
const inquirer = require("inquirer");

// need a markdown js file here
const generateMarkdown = require("./utils/generateMarkdown");

// created validate function for the questions to make sure they get answered
function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}

// TODO: Create an array of questions for user input
const questions = [
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
