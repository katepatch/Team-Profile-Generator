//const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
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

// function createManager() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Please enter Manager name',
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'Manager ID number',
//             validate: answer => {
//                 const pass = answer.match(
//                     /^[1-9]\d*$/
//                 );
//                 if (pass) {
//                     return true;
//                 }
//                 return "Please enter a number greater than zero.";
//             },
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'Please enter Manager email',
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: 'Please enter Manager office number',        
//         },
    
//     ]).then(answers => {
//         const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
//         teamMembers.push(manager);
//         createTeam();

//     })
// }

// function createTeam() {
//     inquirer.prompt([
//         {
//         type: 'list',
//         name: 'teammates',
//         message: 'Which type of employee would you like to add?',
//         choices: ['Engineer', 'Intern', 'I have completed my team'],
//         },

//     ]).then(userChoice => {
//         switch(userChoice.teammates) {
//             case "Engineer":
//                 createEngineer();
//                 break;
//             case "Intern":
//                 createIntern();
//                 break;
//             default:
//                 makeTeam();
//         }
//     })

//     function createEngineer() {
//         inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: 'Please enter Engineer name',
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: 'What is their ID number?',
//                 validate: answer => {
//                     const pass = answer.match(
//                         /^[1-9]\d*$/
//                     );
//                     if (pass) {
//                         return true;
//                     }
//                     return "Please enter a number greater than zero.";
//                 },
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: 'Please enter their email',
//             },
//             {
//                 type: 'input',
//                 name: 'Github',
//                 message: 'Please enter their Github username',        
//             }, 
//         ]).then(answers => {
//             const engineer = new Engineer(answers.name, answers.id, answers.email, answers.Github);
//             teamMembers.push(engineer);
//             createTeam();
//         });

//         function createIntern() {
//             inquirer.prompt ([
//                 {
//                     type: 'input',
//                     name: 'name',
//                     message: 'Please enter Intern name',
//                 },
//                 {
//                     type: 'input',
//                     name: 'id',
//                     message: 'What is their ID number?',
//                     validate: answer => {
//                         const pass = answer.match(
//                             /^[1-9]\d*$/
//                         );
//                         if (pass) {
//                             return true;
//                         }
//                         return "Please enter a number greater than zero.";
//                     },
//                 },
//                 {
//                     type: 'input',
//                     name: 'email',
//                     message: 'Please enter their email',
//                 },
//                 {
//                     type: 'input',
//                     name: 'School',
//                     message: 'Where does your Intern go to school?',        
//                 },  
//             ]).then(answers => {
//                 const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
//                 teamMembers.push(intern);
//                 createTeam();
//             })
//         }
//     }
//     createManager();
// }

// function init() {
//     createManager()
// }

// init();


const managerquestions = [
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
    {
        type: 'confirm',
        name: 'addNew',
        message: 'Add new teammates?',
        default: false,
    },
]

const employeeQuestions = [
    {
        type: 'list',
        name: 'teammates',
        message: 'Which type of employee would you like to add?',
        choices: ['Engineer', 'Intern', 'I have completed my team'],
        }, 
        {
            type: 'input',
            name: 'Github',
            message: 'Please enter their Github username',        
        },
        {
            type: 'input',
            name: 'School',
            message: 'Where does your Intern go to school?',        
        },  
    
    ]

//    const addTeammate = () => {
//     inquirer.prompt(employeeQuestions).then((answers) => {
//         if (answers.teammates === 'Engineer') {
//             const engineer = new Engineer(answers.name, answers.id, answers.email, answers.Github);
//             teamMembers.push(engineer);
//         } else if (answers.teammates === 'Intern') {
//             const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
//             teamMembers.push(intern);
//         }
//         if(answers.add) {
//             addTeammate();
//         }
//         else {
//             createHtml();
//         }
//     })
//    }

   const createTeam = () => {
    inquirer.prompt(managerquestions).then((answers) => {
        console.log(answers);
        // const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        // teamMembers.push(manager);

        // if (answers.add) {
        //     addTeammate();
        // } else {
        //     createHtml();
        // }
    })
   }

   createTeam();
module.exports = Team;