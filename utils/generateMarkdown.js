// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Desription
  ${data.description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

---
## Installation
Installation instructions: ${data.installation}
---
## Usage
${data.usage}
---
## Contributing
If you would like to contribute to further dev: ${data.contributing}
   
---
## Tests
${data.tests} 
---
## Questions
${data.questions} 
If you have any questions about the repo, 
open an issue or contact me directly at 
You can find more of my work at 
---
`;
}

module.exports = generateMarkdown;
