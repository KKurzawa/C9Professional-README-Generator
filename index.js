// TODO: Include packages needed for this application
const packageJson = require('./package.json');
const inquirer = require('inquirer');
const fs = require('fs');
// const questions = [
//     'What is your project title?',
//     'Enter a description for your project.',
//     'Enter instructions for installation of your project.',
//     'Enter instructions and examples of usage of your project.',
//     'List any contributers to your project with links to there with links to there Github profiles. If none, type n/a.',
//     'Enter any third-party attributions. If none, type n/a.',
//     'Enter links to any tutorials used to create this project. If none, type n/a.'

// ];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description for your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter instructions for installation of your project.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter instructions and examples of usage of your project.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List any contributers to your project with links to there with links to there Github profiles.  If none, type n/a',
            name: 'contributers',
        },
        {
            type: 'input',
            message: 'Enter any third-party attributions. If none, type n/a.',
            name: 'attributions',
        },
        {
            type: 'input',
            message: 'Enter links to any tutorials used to create this project. If none, type n/a.',
            name: 'totorials',
        },
    ])
    .then((response) => {
        let anwsers = response;
        let elTitle = anwsers.title;
        let elDescription = anwsers.description;
        let elInstallation = anwsers.installation;
        let elUsage = anwsers.usage;
        let elContributers = anwsers.contributers;
        let elTutorials = anwsers.tutorials;
        console.log(elTitle);
        console.log(elDescription);
        console.log(elInstallation);
        console.log(elUsage);
        console.log(elContributers);
        console.log(elTutorials);
        console.log(elTitle);
    });




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
// init();
