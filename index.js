const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please describe your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Table of Content",
    name: "content",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage",
    name: "usage",
  },
  {
    type: "input",
    message: "Please, select the license you used for this project",
    name: "license",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
    ],
  },
  {
    type: "input",
    message: "Contribution",
    name: "contribution",
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
  {
    type: "input",
    message: "Questions",
    name: "questions",
  },
  {
    type: "input",
    message: "What's your e-mail address?",
    name: "email",
  },
  {
    type: "input",
    message: "What's your GitHub username?",
    name: "ghusername",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();

/////

// const inquirer = require("inquirer");
// const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please describe your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Table of Content",
      name: "content",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
    },
    {
      type: "input",
      message: "Please, select the license you used for this project",
      name: "license",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla",
        "MIT",
        "Apache",
        "Boost",
      ],
    },
    {
      type: "input",
      message: "Contribution",
      name: "contribution",
    },
    {
      type: "input",
      message: "Tests",
      name: "tests",
    },
    {
      type: "input",
      message: "Questions",
      name: "questions",
    },
    {
      type: "input",
      message: "What's your GitHub username?",
      name: "GHUsername",
    },
  ])

  //inside arrow function create html variable
  .then((data) => {
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <h1> Title:
    ${data.title}
    </h1>
    <h3> Location:
    ${data.location}
    </h3>
    <h3> Bio:
    ${data.bio}
    </h3>
    <h3> Contaxct me at: </h3>
    <ul> 
    <li>LinkedIn URL:
    ${data.LinkedInURL}
    </li>
    <li> GitHub URL:
    ${data.GitHubURL}
    </li>
</ul>
        <script>
            
        </script>
    </body>
    </html>`;

    //created html file instead of as initially text file
    const filename = `${data.name.toLowerCase().split(" ").join("")}.md`;

    fs.writeFile(filename, md, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
