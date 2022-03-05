//Requiring Intern constructor from Manager.js file 
const Intern = require('../lib/Intern')

//This test is pulling properties form employee constructor
test('creating new manager', () => {
    const intern = new Intern('Lisa', 1312,'lisa34@gmail.com', 'Univerity of Miami')
    
    expect(intern.school).toEqual(expect.any(String))
    })