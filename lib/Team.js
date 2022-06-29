const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const htmlRenderer = require('../src/htmlRenderer')





class Team {
    constructor(manager, engineer, intern) {
        this.manager = manager;
        this.engineer = engineer;
        this.intern = intern;
    }
}

createTeam() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter Manager name',
        },
        {
            type: 'input',
            name: 'id number',
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
            name: 'Manager Office Number',
            message: 'Please enter Manager office number',        
        },
    
    ])
}





module.exports = Team;