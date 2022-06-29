const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const htmlRenderer = require('../src/htmlRenderer')

const teamMembers = [];



class Team {
    constructor(manager, engineer, intern) {
        this.manager = manager;
        this.engineer = engineer;
        this.intern = intern;
    }
}

function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter Manager name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Manager ID number',
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a number greater than zero.";
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter Manager email',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter Manager office number',        
        },
    
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        createTeam();

    })
}

function createTeam() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'teammates',
        message: 'Which type of employee would you like to add?',
        choices: ['Engineer', 'Intern', 'I have completed my team'],
        },

    ]).then(userChoice => {
        switch(userChoice.teammates) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                makeTeam();
        }
    })
}





module.exports = Team;