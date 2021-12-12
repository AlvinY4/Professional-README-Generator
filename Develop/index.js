// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    // Project title 
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your porject title!');
                return false; 
            }
        }
    },
    // Project Description 
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project (Required)',
        validate: descriptionInput => {
            if (decriptionInput) {
                return true; 
            } else {
                console.log('Need a project description to continue!');
                return false; 
            }
        }
    },
    // Instalation Instructions 
    {
        type: 'input',
        name: 'installation',
        message: 'How did you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Project installation information required!');
                return false; 
            }
        }
    },
    // Usage Information 
    {
        type: 'input',
        name: 'usage',
        message: 'How would users use your project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true; 
            } else {
                console.log('Please provide project usage information!');
                return false; 
            }
        }
    },
    // Contribution Guidelines 
    {
        type: 'input',
        name: 'contribution',
        message: 'How could you or others ontribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true; 
            } else {
                console.log('Please provide contribution information');
                return false; 
            }
        }
    },
    // Test Instructions 
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testInput => {
            if (testInput) {
                return true; 
            } else {
                console.log('You need to provide how you test this project!'); 
                return false; 
            }
        }
    },
    // License 
    {
        type: 'checkbox', 
        name: 'licensing',
        message: 'Choose the right license for your project (Required)',
        choices: ['Apache','Boost','MIT','Mozilla','IBM','GNU','Eclipse','None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true; 
            } else {
                console.log('Please pick a license');
                return false; 
            }
        }
    },
    // GitHub 
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username!');
                return false;
            }
        }
    },
    // Email 
    {
        type:'input',
        name: 'email',
        message: 'Enter your E-mail address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true; 
            } else {
                console.log('Please provide your E-mail address');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
