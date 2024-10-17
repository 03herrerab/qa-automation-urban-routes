# Sprint 8 Project: Test Automation

## Project Overview
This project is designed to create automated tests for the app Urban Routes, 
ensuring that key functionalities such as buttons, input fields, and the final 
ordering process work correctly. The test scripts are written to interact with 
the app, simulating user interactions and verifying that everything operates as 
expected.

## Purpose
The goal of this project is to verify that the app's core functionalities are functioning properly through automated tests. 
The tests focus on:
- Button functionality
- Input field interactions
- The final ordering process

## Prerequisites
Before running the tests, ensure you have the following installed:
- Chromedriver: Required to execute tests in a Chrome browser.
- A current and running server for the Urban Routes app.
  
## Technologies Used
- Visual Studio Code: For writing and editing test scripts.
- Terminal: To run the tests and manage dependencies.
- SelectorHub: A helpful tool used to find the correct XPath references for the test cases.

## How to Run the Tests
1. Make sure Chromedriver is downloaded and properly configured.
2. Ensure the Urban Routes app server is up and running.
3. Open the terminal and navigate to the project directory.
4. Run the following command to execute the tests:
   npm run wdio
