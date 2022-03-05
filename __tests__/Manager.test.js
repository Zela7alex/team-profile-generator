//Requiring Manager constructor from Manager.js file 
const Manager = require('../lib/Manager')

//This test is pulling properties form employee constructor
test('creating new manager', () => {
const manager = new Manager('Kevin', 1189,'kevin.smith@gmail.com', '593-557-2141')

expect(manager.phoneNumber).toEqual(expect.any(String))
})