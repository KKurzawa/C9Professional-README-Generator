// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

const contents = {
    installation: "- [Installation](#Installation)",
    usage: "- Usage",
    credits: "- Credits",
    tests: "- Tests",
    questions: "- Questions",
    license: "- License",
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description

${data.description}

## Table of Contents

-[usage](#usage)
${contents.installation}
${contents.usage}
${contents.credits}
${contents.tests}
${contents.questions}
${contents.license}

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
