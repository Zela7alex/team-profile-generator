// Constructs new employee
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    // Returns user input name 
    getName() {
        return this.name
    }
    // Returns user input id
    getId () {
        return this.id
    }
    // Returns user input email
    getEmail() {
        return this.email 
    }
    //Returns user input role
    getRole() {
        return "Employee"
    }

};


// Exports employee constructor
module.exports = Employee;