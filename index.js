const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Employee Name',
    },
    {
        type: 'input',
        name: 'id number',
        message: 'Employee ID number',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter Employee email',
    },
    {
        type: 'list',
        name: 'Employee Role',
        message: 'What is the role of this employee?',
        choices: ['Manager', 'Engineer', 'Intern'],
        filter(val) {
            return val.toLowerCase();
        },
    },
]

