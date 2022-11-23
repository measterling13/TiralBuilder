const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    printInfo() {
        console.log(`The Manager office number is: ${this.officeNumber}`);
    }
}

const manager = new Manager(officeNumber);

console.log(manager)