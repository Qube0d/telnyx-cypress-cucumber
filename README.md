# telnyx-cypress-cucumber

Tutorial project for learning the Cypress and Cucumber frameworks.

<h3 align="center">Test Telnix</h3>
The purpose of this project is to test the Telnyx website: https://telnyx.com/

This project is for e2e testing the functionality of the Telnyx website.

<h3 align="center">Requirement</h3>
Download and install [VS Code] (https://code.visualstudio.com/) or any other IDE of your choice.

Download and install at least Node.js 14

<h3 align="center">Installing</h3>
In terminal type:
npm install

// npm init -y

npm install cypress --save-dev

npm install --save-dev @cucumber/cucumber

To make Xpath be working is needed to be installed:
npm i cypress-xpath

<h3 align="center">How to open and run a project</h3>
Download or clone project from repository

Open the project folder in VSCode or another IDE

The test scripts are located at: cypress\e2e\telnyx\features\TC-_\ _.js

The page objects are in: cypress\e2e\telnyx\pages\ \*.page.js

<h3 align="center">Run</h3>
Launch Cypress with the following commands in the terminal:
<br>npx cypress run<br>
<br>or<br> 
<br>npx cypress open (to run in headed mode)<br>

After a while, the cypress will open.
In the window that opens, click on any of the tests: \*.js
