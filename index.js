//Modules that must be required in node
const fs = require('fs')
const inquirer = require('inquirer')
const Handlebars = require('handlebars')
const template = fs.readFileSync('src/template.hbs', 'utf8').toString()


function addManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the managers name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter the manager's ID number",
            name: "managerId"
        },
        {
            type: "input",
            message: "Enter the manager's email",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter the manager's office number",
            name: "managerPhone",
    
        },
    ])
};


const data = [
    {
        name: managerName.value,
        role: 'Manager',
        id: 1123,
        email: 'jared1234@gmail.com'
    },
    {
        name: 'Tom',
        role: 'Engineer',
        id: 1152,
        email: 'tom1212@gmail.com'

    },

]

//Links to Handlebars and HTML file to be rendered
const compiledTemplate = Handlebars.compile(template)
const renderedHtml = compiledTemplate(data)
fs.writeFileSync('dist/index.html', renderedHtml, 'utf8')

