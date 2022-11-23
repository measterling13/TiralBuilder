const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./library/employee');

const employees = [];

const roleQuestions = [
    
    {
        type: 'list',
        name: 'role',
        message: 'What role does this person have?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employees name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email for the employee?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number for the manager?',
        when: (roleChoice) => roleChoice.role === 'Manager',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is the engineers GitHub?',
        when: (roleChoice) => roleChoice.role === 'Engineer',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school is the intern from?',
        when: (roleChoice) => roleChoice.role === 'Intern',
    },
    {
        type: 'confirm',
        name: 'done',
        message: 'Are you done?',
    },
]

function init() {
    inquirer.prompt(roleQuestions).then((data) => {
        employees.push(data)
        if (data.done) {
            console.log(employees);
           employees.forEach( function(newEmployee) {
                newEmployee = new employee(newEmployee.role, newEmployee.name, newEmployee.id, newEmployee.email);
                newEmployee.getRole(newEmployee.role);
                newEmployee.createCard(newEmployee);
           });
            return
        }
        init();
    })
}

init();