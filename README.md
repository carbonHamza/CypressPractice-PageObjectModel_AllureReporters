# CypressPractice-PageObjectModel_AllureReporters
Implementing Automation Testing using cypress with Page Object Model and Allure Reporter to generate HTML reports

## Pre-requisites

* Node version 16 or above.
* Java version@latest for Allure Test Reporter
* Run command 'npm install', to install all the npm packages listed in dependencies and dev dependencies. This will also install cypress.

## How to run the code

There are two ways as defined below:

* Running through Cypress GUI
* Running the scripts through terminal (Allure reporter will genrate reports through this method)

### Running through Cypress GUI

Open terminal in the project root directory and execute the following command: "npx cypress open".
Once the GUI is displayed, Select E2E testing and run the spec files (with the extension scriptName.cy.js).

### Running the scripts through terminal (Allure reporter will genrate reports through this method)

I have defined multiple test runner scripts in the package.json file. Namely:


* cy:allSpecs - will run all the specs only.
* cy:spec - will run the specified script. "cypress run --spec cypress/e2e/login.cy.js --reporter mocha-allure-reporter", will run login spec file. By default I have defined 'login.cy.js' in it. Change the name of the spec file here to run a different spec file.
Spec files are listed in the E2E folder. For example, "cypress run --spec cypress/e2e/addNewPayee.cy.js --reporter mocha-allure-reporter" will run addNewPayee spec file.
* report:allure - will generate reports from the results contained in the allure-results folder and save the new HTML reports by overriding the previous ones.
* testAll:allure - will run all the scripts and, generate a report and auto open it
* testOne:allure - will run only the script specified in the test runner script "cy:spec" and, generate a report and auto open it.

Run the above scripts by executing the following commands:

* npm run testAll:allure
* npm run testOne:allure
