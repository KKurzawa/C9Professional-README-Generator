// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// const { default: inquirer } = require("inquirer");
// let yourLicense = "";
function renderLicenseLink(data) {
    let licenseType = `${data.license}`
    let yourLincense = "";
    if (licenseType === 'None') {
        yourLincense = "";
    } else if (licenseType === 'MIT') {
        yourLincense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (licenseType === 'Apache 2.0') {
        yourLincense = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (licenseType === 'GNU General Public v3.0') {
        yourLincense = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    } else if (licenseType === 'BSD 2-Clause "Simplified"') {
        yourLincense = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    } else if (licenseType === 'BSD 3-Clause "New" or "Revised"') {
        yourLincense = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
    // } else if (licenseType === 'Boost Software 1.0') {
    //     yourLincense = 
    // } else if (licenseType === 'Creative Commons Zero v1.0 Universal') {
    //     yourLincense = 
    // } else if (licenseType === 'Eclipse Public 2.0') {
    //     yourLincense = 
    // } else if (licenseType === 'GNU Affero General Public v3.0') {
    //     yourLincense = 
    // } else if (licenseType === 'GNU General Public v2.0') {
    //     yourLincense = 
    // } else if (licenseType === 'GNU Lesser General Public v2.1') {
    //     yourLincense = 
    // } else if (licenseType === 'Mozilla Public 2.0') {
    //     yourLincense = 
    // } else if (licenseType === 'The Unlicense') {
    //     yourLincense = 
    // }
    return yourLincense
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }
// let yourLicense = inquirer.choices.value;
// let yourLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `${renderLicenseLink(data)}
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
