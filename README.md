# Application

This is a test automation framework built using Cypress, Cucumber and JavaScript. Cypress is a Node.js library for automating web browsers, Cucumber is a tool for running automated tests written in plain language, and JavaScript that compiles to plain script.

## Prerequisites

- Visual Studio Code installed on your machine
- Node.js and npm installed on your machine
- Chrome or Chromium browser installed on your machine

## Installation

1. Clone the repository
2. Install dependencies by running `npm install`
3. In Visual Studio Code add `Cucumber` via the Extensions tab
4. Go to `Extensions Settings` by clicking on the settings wheel in the `Cucumber` extension
5. Click on `Edit in settings.json` and paste the code block, to auto search for step-definitions within features

```('json')
"cucumber.features": [
  "src/cucumber/features/*.feature",
  "src/cucumber/features/**/*.feature"
],
"cucumber.glue": [
  "src/cucumber/step-definitions/*.js",
  "src/cucumber/step-definitions/**/*js"
],
```

## Usage

1. `npm run test` : Runs tests locally using based on the feature files in `features` folder
5. `npm run lint`: Checks for linting issues in the source code using eslint
6. `npm run format-check`: Checks for formatting issues in the source code using prettier configuration
7. `npm run format`: Formats the source code using prettier

## Source Code

The folder structure for this framework is as follows:

- `src`: Contains all the source files of the framework.
  - `features`: Contains all the `*.feature` files that define the behavior of the system under test.
  - `step-definitions`: Contains all the step definition classes that define the behavior of each step in the feature files.
- `.gitignore`: Specifies files and directories that should be ignored by Git.
- `cucumber.js`: Contains cucumber-js configuration like reporting, format and execution type.
- `package.json`: Contains metadata and dependencies for the project.
- `prettierrc.json` : Contains prettier configuration settings
- `README.md`: This file, which contains documentation and instructions for using the test framework.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a new Pull Request
