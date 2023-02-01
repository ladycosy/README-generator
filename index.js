const fs = require("fs");
const path = require("path");

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const licenseBadge = require("./utils/licenseBadge").licenseBadge;
const questions = require("./utils/questions").questions;

//async use allowed
const writeFileAsync = util.promisify(fs.writeFile);

// function to write README file
// function writeToFile("created-README.md", readMeData) {}

// function to initialize program
// function init() {}
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    answers.licenseBadge = licenseBadge(answers.license);
    let readMeData = generateMarkdown(answers);
    await writeFileAsync("created-README.md", readMeData);
  } catch (err) {
    throw err;
  }
}

// function call to initialize program
init();

// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What is the title of your project?",
//       name: "title",
//     },])

//     //created html file instead of as initially text file
//     const filename = `${data.name.toLowerCase().split(" ").join("")}.md`;

//     fs.writeFile(filename, md, (err) =>
//       err ? console.log(err) : console.log("Success!")
//     );
//   });
