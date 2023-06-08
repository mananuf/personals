function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = `${this.lastName} ${this.firstName}`;
    let address;

    this.setAddress = (addr) => {
        address = addr;
    }

    this.getAddress = () => {
        console.log(address);
    }
}

let mano = new Person('Mananaf','Bankat', 23);
console.log(mano.fullName);
// prototypal inheritavnce allows a class to directly add attributes to that class
Person.prototype.gender = 'Male';
console.log(mano.gender);
mano.setAddress('state lowcost');
mano.getAddress();
mano.setAddress('bukuru');
mano.getAddress();