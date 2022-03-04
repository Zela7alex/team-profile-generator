const Employee = require("../lib/Employee")

// Engineer class extends Employee class (pulls "name, id, email" from Employee file)
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email) // calling super constructor from employee class 
        this.github = github

    }
    //*** FUNCTION - to get github
    getGithub() {
        return this.github
    }
    //*** FUNCTION - to get role
    getRole() {
        return "Engineer"
    }
};


module.exports = Engineer
