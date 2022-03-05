//Requiring Employee constructor
const Employee = require("../lib/Employee")

// Manager class extends Employee class (pulls "name, id, email" from Employee file)
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email) // calling super constructor from employee class
        this.school = school // Adding school to intern
    }

    //*** FUNCTION - to get School
    getSchool() {
        return this.school
    }
    //*** FUNCTION - to get role
    getRole() {
        return "Intern"
    }

}

module.exports = Intern;

