# README-generator

This is a command-line application that dynamically generates a professional README.md file from a user's input using the `Inquirer package`. <br>[Inquirer package](https://www.npmjs.com/package/inquirer).

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) as a reminder of everything that a high-quality, professional README should contain.

The application will be invoked by using the following command:

```bash
node index.js
```

## User Story

```text
AS A developer,
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

- Create a command-line application that accepts user input.
  - When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    - The title of my project
    - Sections entitled:
      - Description
      - Table of Contents
      - Installation
      - Usage
      - License
      - Contributing
      - Tests
      - Questions
    - When a user enters the project title then it is displayed as the title of the README
    - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    - When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    - When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    - When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    - When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## Mock-Up

![](https://github.com/ladycosy/anna-portfolio_page/blob/main/images/01-css-challenge-demo.gif)

## Link to Deployed Application

[Live URL](https://ladycosy.github.io/README-generator/)

## Link to Project GitHub Repo

[GitHub Repo](https://github.com/ladycosy/README-generator)

## Screenshot

<img src="https://github.com/ladycosy/anna-portfolio_page/blob/fc7d317ed90cd572c830b26ed04c3ee0de7c3958/images/page_screenshot.png" alt="page screenshot" width="400"/>

---
