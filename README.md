# Team Profile Generator

Module 10 Challenge

This is a command line application that uses Node.js.  When running the aplication you can answer questions about who your employees are and what role they play in the company.  Once you have filled out your team an HTML page will render displaying all of your employees.  

## Table of Contents

-[User Story](#user-story)</br>
-[Acceptance Criteria](#acceptance-criteria)</br>
-[Installation](#installation)</br>
-[Tests](#tests)</br>
-[Links](#links)</br>
-[Info](#info)

## USER STORY

AS A manager</br>
I WANT to generate a webpage that displays my team's basic info</br>
SO THAT I have quick access to their emails and GitHub profiles</br>

## ACCEPTANCE CRITERIA

GIVEN a command-line application that accepts user input</br>
WHEN I am prompted for my team members and their information</br>
THEN an HTML file is generated that displays a nicely formatted team roster based on user input</br>
WHEN I click on an email address in the HTML</br>
THEN my default email program opens and populates the TO field of the email with the address</br>
WHEN I click on the GitHub username</br>
THEN that GitHub profile opens in a new tab</br>
WHEN I start the application</br>
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number</br>
WHEN I enter the team manager’s name, employee ID, email address, and office number</br>
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team</br>
WHEN I select the engineer option</br>
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu</br>
WHEN I select the intern option</br>
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu</br>
WHEN I decide to finish building my team</br>
THEN I exit the application, and the HTML is generated

## Installation

Clone my [repository](https://github.com/katepatch/Team-Profile-Generator)</br>
Install [Jest](https://www.npmjs.com/package/jest)</br>
and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4)

## Tests

Run `npm test` to run Jest

After the tests have passed you can run `node index.js` in the command line to start

## Links

You can find my code on my [Github](https://github.com/katepatch/Team-Profile-Generator)</br>
You can email me at kate.epatch@gmail.com

## Info

Link to [video](https://watch.screencastify.com/v/gL87erhN0lILCgIGXFtY)

![screenshot](/assests/screenshot.png)
