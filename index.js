// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
            message: 'List any contributers to your project with links to there with links to there Github profiles.',
            name: 'contributers',
        },
        {
            type: 'input',
            message: 'Enter any third-party attributions.',
            name: 'attributions',
        },
        {
            type: 'input',
            message: 'Enter links to any tutorials used to create this project.',
            name: 'tutorials',
        },
        {
            type: 'input',
            message: 'Enter instructions for tests of your project.',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Enter the url for your Github profile.',
            name: 'profile',
        },
        {
            type: 'input',
            message: 'Enter your email.',
            name: 'email',
        },
        {
            type: 'rawlist',
            message: 'Select a license.',
            choices: [
                { name: 'None', value: 'None' },
                { name: 'MIT License', value: 'MIT License' },
                { name: 'Apache License 2.0', value: 'Apache License 2.0' },
                { name: 'GNU General Public License v3.0', value: 'GNU General Public License v3.0' },
                { name: 'BSD 2-Clause "Simplified" License', value: 'BSD 2-Clause "Simplified" License' },
                { name: 'BSD 3-Clause "New" or "Revised" License', value: 'BSD 3-Clause "New" or "Revised" License' },
                { name: 'Boost Software License 1.0', value: 'Boost Software License 1.0' },
                { name: 'Creative Commons Zero v1.0 Universal', value: 'Creative Commons Zero v1.0 Universal' },
                { name: 'Eclipse Public License 2.0', value: 'Eclipse Public License 2.0' },
                { name: 'GNU Affero General Public License v3.0', value: 'GNU Affero General Public License v3.0' },
                { name: 'GNU General Public License v2.0', value: 'GNU General Public License v2.0' },
                { name: 'GNU Lesser General Public License v2.1', value: 'GNU Lesser General Public License v2.1' },
                { name: 'Mozilla Public License 2.0', value: 'Mozilla Public License 2.0' },
                { name: 'The Unlicense', value: 'The Unlicense' },
            ],
            name: 'license',
        },

    ])
    .then((response) => {
        // let anwsers = response;
        // let elTitle = anwsers.title;
        // let elDescription = anwsers.description;
        // let elInstallation = anwsers.installation;
        // let elUsage = anwsers.usage;
        // let elContributers = anwsers.contributers;
        // let elTutorials = anwsers.tutorials;
        // // console.log(elTitle);
        // // console.log(elDescription);
        // // console.log(elInstallation);
        // // console.log(elUsage);
        // // console.log(elContributers);
        // // console.log(elTutorials);
        // // console.log(elTitle);
        // console.log(anwsers);
        return generateMarkdown(response);
    })
    .then((markdown) => {
        // console.log(markdown);
        fs.writeFileSync('READMESAMPLE.md', markdown)
    })





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
// init();
