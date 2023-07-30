// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }
let yourLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `${yourLicense}
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)


## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contributers}
${data.attributions}
${data.tutorials}

## Tests
${data.tests}

## Questions
${data.profile}
${data.email}

## License
${data.license}
   `;
}

module.exports = generateMarkdown;
