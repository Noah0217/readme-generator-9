// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util")
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the Title for this project",
    name: "Title"
}, {
    type: "input",
    message: "Give a brief overview of your project",
    name: "Description"
}, {
    type: "input",
    message: "Table Of Contents (SKIP THIS)",
    name: "Table Of Contents"
}, {
    type: "input",
    message: "What tools need to be installed to run this project",
    name: "Installation"
}, {
    type: "input",
    message: "What Languages/Technologies were used to create this project",
    name: "Languages"
}, {
    type: "input",
    message: "What License are you using for this project",
    name: "License"
}, {
    type: "input",
    message: "Contact Info (SKIP THIS)",
    name: "Questions"
}, {
    type: "input",
    message: "What is your GitHub username",
    name: "Username"
}, {
    type: "input",
    message: "What is your email address",
    name: "Email"
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Success your README file has been created!")
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data));
        })
};

// Function call to initialize app
init();