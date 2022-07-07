// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Project Title
  ${data.projectTitle}
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  
  ## Description
    ${data.description}
  
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
   ${data.installation}
  
  
  ## Usage
   ${data.usage}
  
  
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  This application is covered by the ${data.license} license. 
  
  ## Contributing
   ${data.contributing}
  
  ## Tests
   ${data.tests}
  
  ## Questions
   ${data.questions}
  
  Find me on GitHub: [${data.username}](https://github.com/${data.username})
  
  Email me with any questions: ${data.email}
      `;
    }


module.exports = generateMarkdown;
