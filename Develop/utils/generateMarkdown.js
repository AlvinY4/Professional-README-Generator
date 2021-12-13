// Returns a license badge based on which license is passed in
let renderLicenseBadge = (license) => {
  if (license === 'Apache') {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)" 
  } else if (license === 'MIT') {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license === 'Mozilla') {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  } else {
    license = " "; 
  }
}

// // Returns the license link
let renderLicenseLink = (license) => {
  if (license !== "none") {
    return "![LicenseLink](#license)";
  } else {
    return ''; 
  }
}

// // Returns the license section of README
let renderLicenseSection = (license) => {
  if (license === 'Apache') {
    return 'License \n [Apache 2.0](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'MIT') {
    return 'License \n [MIT](https://opensource.org/licenses/MIT)'
  } else if (license === 'Mozilla') {
    return 'License \n [Mozilla 2.0](https://opensource.org/licenses/MPL-2.0)'
  } else {
    license = '';
  }
}

// Generate markdown for README
const generateMarkdown = (userInput) => {
  return `# ${userInput.title} 

  # ${renderLicenseBadge(userInput.license)} 

  #### Table of Contents:
  1. [Description](#description)
  2. [Insatllation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contribution](#contribution)
  6. [Tests](#testing)
  7. [Questions](#Questions)

  ### Description
  * ${userInput.description}
  
  ### Installation 
  * ${userInput.installation}

  ### Usage 
  * ${userInput.usage}

  ### License 
  * Licensed under ${userInput.license}

  ### Contribution 
  * ${userInput.contribution}

  ### Tests 
  ${userInput.testing}

  ## Questions 
  * If you have any questions email me at <a src="${userInput.email}""></a> 
  * You can also reach me on my GitHub [${userInput.github}](http://github.com/${userInput.github})';


`;
}

module.exports = { generateMarkdown, renderLicenseLink, renderLicenseBadge, renderLicenseSection }; 
