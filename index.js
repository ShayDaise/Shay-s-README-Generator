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

    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
        validate: validateInput,
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: ",
        validate: validateInput,
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
        validate: validateInput,
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?",
        validate: validateInput,
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ],
        validate: validateInput,
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?",
        validate: validateInput,
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?",
        validate: validateInput,
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? ",
        validate: validateInput,
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: ",
        validate: validateInput,
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: ",
        validate: validateInput,
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
