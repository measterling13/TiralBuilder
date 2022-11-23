class Employee {
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
    };

    printInfo() {
        console.log(`This employees name is ${this.name}`)
        console.log(`Thier email is: ${this.email}`)
    };

    getName(newHire) {
        console.log(newHire)
    };

    getId(){};

    getEmail() {
        console.log(this.email)
    };

    getRole() {
        console.log(this.role)
    };

    createCard({newPerson}) {
        const main = document.getElementById("main");
        var card = document.createElement("article");
        main.appendChild(card);
        var header = document.createElement("h2");
        card.appendChild(header);
        header.textContent = newPerson.role;
    };
}


module.exports = Employee;