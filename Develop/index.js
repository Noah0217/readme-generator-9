// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util")
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [{
    type: "input", 
    message: "What is the Title for this project",
    name: "Title"
}, {
    type: "input", 
    message: "Give a rundown of how your project works",
    name: "Description"
}, {

}, {
    type: "input", 
    message: "How would someone install your project",
    name: "Installation"
}, {

}, {

}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
