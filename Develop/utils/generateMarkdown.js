// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let renderLicenseBadge = (license) => {
  switch (license) {
    
    case 'Apache':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';

    case 'Boost':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';

    case 'MIT': 
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';

    case 'Mozilla':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'; 

    case 'IBM':
      return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';

    case 'GNU': 
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';

    case 'Eclipse':
      return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';

    default:
      return''; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let renderLicenseLink = (license) => {
  if (license !== "none") {
    return "![LicenseLink](#license)";
  } else {
    return ''; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let renderLicenseSection = (license) => {
  switch (license) {

    case 'Apache':
      return 'License \n [Apache 2.0](https://opensource.org/licenses/Apache-2.0)';

    case 'Boost':
      return 'License \n [Boost](https://www.boost.org/LICENSE_1_0.txt)';

    case 'MIT':
      return 'License \n [MIT](https://opensource.org/licenses/MIT)';

    case 'Mozilla':
      return 'License \n [Mozilla 2.0](https://opensource.org/licenses/MPL-2.0)';

    case 'IBM':
      return 'License \n [IBM](https://opensource.org/licenses/IPL-1.0)';

    case 'GNU':
      return 'License \n [GNU v3](https://www.gnu.org/licenses/gpl-3.0)';

    case 'Eclipse':
      return 'License \n [Eclipse](https://opensource.org/licenses/EPL-1.0)';

    default:
      return ''; 
  }
}

// TODO: Create a function to generate markdown for README
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
  * Licensed under ${renderLicenseSection(userInput.license)}

  ### Contribution 
  * ${userInput.contribution}

  ### Tests 
  ${userInput.testing}

  ## Questions 
  * If you have any questions email me at <a${userInput.email}></a>
  * You can also reach me on my GitHub [${userInput.github}](http://github.com/${userInput.github})';


`;
}

module.exports = { generateMarkdown, renderLicenseLink, renderLicenseBadge, renderLicenseSection }; 
