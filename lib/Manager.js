//Requiring Employee constructor
const Employee = require("../lib/Employee")

// Manager class extends Employee class (pulls "name, id, email" from Employee file)
class Manager extends Employee {
    constructor (name, id, email, phoneNumber) {
        super(name, id, email) // calling super constructor from employee class
        this.phoneNumber = phoneNumber // Adding phone number to manager
    }

    //*** FUNCTION - to get phoneNumber
    getPhoneNumber() {
        return this.phoneNumber
    }
    //*** FUNCTION - to get role
    getRole() {
        return "Manager"
    }

}



module.exports = Manager