const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [];

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
      message: "Project Title",
      name: "title",
    },
    {
      type: "input",
      message: "Project Description",
      name: "description",
    },
    {
      type: "input",
      message: "Table of Contents",
      name: "content",
    },
    {
      type: "input",
      message: "Installation",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
    },
    {
      type: "input",
      message: "License",
      name: "license",
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
    <h1> Name:
    ${data.name}
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
    const filename = `${data.name.toLowerCase().split(" ").join("")}.html`;

    fs.writeFile(filename, html, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
