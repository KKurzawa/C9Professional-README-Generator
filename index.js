const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
                { name: 'MIT', value: 'MIT' },
                { name: 'Apache 2.0', value: 'Apache 2.0' },
                { name: 'GNU General Public v3.0', value: 'GNU General Public v3.0' },
                { name: 'BSD 2-Clause "Simplified"', value: 'BSD 2-Clause "Simplified"' },
                { name: 'BSD 3-Clause "New" or "Revised"', value: 'BSD 3-Clause "New" or "Revised"' },
                { name: 'Boost Software 1.0', value: 'Boost Software 1.0' },
                { name: 'Creative Commons Zero v1.0 Universal', value: 'Creative Commons Zero v1.0 Universal' },
                { name: 'Eclipse Public 2.0', value: 'Eclipse Public 2.0' },
                { name: 'GNU Affero General Public v3.0', value: 'GNU Affero General Public v3.0' },
                { name: 'GNU General Public v2.0', value: 'GNU General Public v2.0' },
                { name: 'GNU Lesser General Public v2.1', value: 'GNU Lesser General Public v2.1' },
                { name: 'Mozilla Public 2.0', value: 'Mozilla Public 2.0' },
                { name: 'The Unlicense', value: 'The Unlicense' },
            ],
            name: 'license',
        },

    ])
    .then((response) => {
        return generateMarkdown(response);
    })
    .then((markdown) => {
        fs.writeFileSync('READMESAMPLE.md', markdown)
    })





