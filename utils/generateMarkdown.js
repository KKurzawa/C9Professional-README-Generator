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
    } else if (licenseType === 'Boost Software 1.0') {
        yourLincense = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } else if (licenseType === 'Creative Commons Zero v1.0 Universal') {
        yourLincense = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
    } else if (licenseType === 'Eclipse Public 2.0') {
        yourLincense = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    } else if (licenseType === 'GNU Affero General Public v3.0') {
        yourLincense = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    } else if (licenseType === 'GNU General Public v2.0') {
        yourLincense = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    } else if (licenseType === 'GNU Lesser General Public v2.1') {
        yourLincense = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    } else if (licenseType === 'Mozilla Public 2.0') {
        yourLincense = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    } else if (licenseType === 'The Unlicense') {
        yourLincense = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
    return yourLincense
};

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

Email me at ${data.email} for questions on this project.

## License

${data.license}

   `;
}

module.exports = generateMarkdown;
