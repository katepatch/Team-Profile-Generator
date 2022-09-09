//const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const htmlRenderer = require('./src/htmlRenderer')

const teamMembers = [];

const role = ""

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: "list", 
            name: "role",
            message: "What is this person's role?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            messasge: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("please enter employee's name");
                    return false;
                    }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter employee's ID",
            validate: ID => {
                if (isNaN(ID)) {
                    console.log("Please enter employee ID");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter employee's email");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?",
            when: (input) => input.role === "Manager",
            validate: phoneInput => {
                if (phoneInput) {
                    return true;
                } else {
                    console.log("Please enter the manger's number");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please provide the engineer's github username",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please provide the engineer's github username");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Where is your intern currently enrolled?",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter intern's school");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?",
            default: false
        }
    ])
    .then(employeeInfo => {
        const {role, name, id, email, officeNumber, github, school, addEmployee} = employeeInfo;
        

        if (role === "Manager") {
            const manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            console.log(manager);
        }
        else if (role === "Engineer") {
            const engineer = new Engineer(name, id, email, github)
            teamMembers.push(engineer);
            
        }
        else if (role === "Intern") {
            const intern = new Intern(name, id, email, school);
            teamMembers.push(intern);
        }


        if (addEmployee) {
            return promptQuestions();
        } else {
            console.log(teamMembers)
            writeToFile()
        }
    })
};

function writeToFile() {
    fs.writeFile("./dist/index.html", htmlRenderer (teamMembers), err => {
        if (err) {
            return console.log(err);
        }
        console.log("team created");
    });
}

promptQuestions()

