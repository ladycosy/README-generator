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
      message: "What's your e-mail address?",
      name: "email",
    },
    {
      type: "input",
      message: "What's your GitHub username?",
      name: "ghusername",
    },
  ];
  
  module.exports = {
    questions: questions,
  };