//const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const htmlRenderer = require('../src/htmlRenderer')

const teamMembers = [];

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
            name: "Name",
            messasge: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("please enter manager's name");
                    return false;
                    }
            }

        },
        {
            type: "input",
            name: "id",
            message: "Please enter Manager's ID",
            validate: ID => {
                if (isNaN(ID)) {
                    console.log("Please enter Manager ID");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter manager's email");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?",
            validate: phoneInput => {
                if (phoneInput) {
                    return true;
                } else {
                    console.log("Please enter the manger's number");
                    return false;
                }
            }
        },
    ])
    .then(managerInfo => {
        const {name, email, id, officeNumber} = managerInfo;
        const manager = new Manager (name, email, id, officeNumber);

        teamMembers.push(manager);
        console.log(manager);
    })
}

// class Team {
//     constructor(manager, engineer, intern) {
//         this.manager = manager;
//         this.engineer = engineer;
//         this.intern = intern;
//     }
// }

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


// const managerquestions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Please enter Manager name',
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'Manager ID number',
//         validate: answer => {
//             const pass = answer.match(
//                 /^[1-9]\d*$/
//             );
//             if (pass) {
//                 return true;
//             }
//             return "Please enter a number greater than zero.";
//         },
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'Please enter Manager email',
//     },
//     {
//         type: 'input',
//         name: 'officeNumber',
//         message: 'Please enter Manager office number',        
//     },
//     {
//         type: 'confirm',
//         name: 'addNew',
//         message: 'Add new teammates?',
//         default: false,
//     },
// ]

// const employeeQuestions = [
//     {
//         type: 'list',
//         name: 'teammates',
//         message: 'Which type of employee would you like to add?',
//         choices: ['Engineer', 'Intern', 'I have completed my team'],
//         }, 
//         {
//             type: 'input',
//             name: 'Github',
//             message: 'Please enter their Github username',        
//         },
//         {
//             type: 'input',
//             name: 'School',
//             message: 'Where does your Intern go to school?',        
//         },  
    
//     ]

// //    const addTeammate = () => {
// //     inquirer.prompt(employeeQuestions).then((answers) => {
// //         if (answers.teammates === 'Engineer') {
// //             const engineer = new Engineer(answers.name, answers.id, answers.email, answers.Github);
// //             teamMembers.push(engineer);
// //         } else if (answers.teammates === 'Intern') {
// //             const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
// //             teamMembers.push(intern);
// //         }
// //         if(answers.add) {
// //             addTeammate();
// //         }
// //         else {
// //             createHtml();
// //         }
// //     })
// //    }

//    const createTeam = () => {
//     inquirer.prompt(managerquestions).then((answers) => {
//         console.log(answers);
//         // const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
//         // teamMembers.push(manager);

//         // if (answers.add) {
//         //     addTeammate();
//         // } else {
//         //     createHtml();
//         // }
//     })
//    }

//    createTeam();

promptQuestions();
