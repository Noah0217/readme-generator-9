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

}, {
    type: "input", 
    message: "Whats tools need to be installed to run this project",
    name: "Installation"
}, {

}, {
    type: "input", 
    message: "What License are you using for this project",
    name: "License"
}, {
    type: "input", 
    message: "Contact Info",
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
        fs.writeFile(fileName, data, function(err) {
            console.log(fileName)
            console.log(data)
            if (err) {
                return console.log(err)
            } else {
                    console.log("Success")
            }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
};

// Function call to initialize app
init();

