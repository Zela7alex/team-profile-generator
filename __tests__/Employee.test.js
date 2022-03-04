const Employee = require('../lib/Employee.js')

// Tests new employee data 
test('checks to see employee data as object', () => {
   const employee = new Employee('Bob', 1152, 'bob123@yahoo.com')

   expect(employee.name).toBe('Bob')
   expect(employee.id).toEqual(expect.any(Number))
   expect(employee.email).toEqual(expect.any(String))
});