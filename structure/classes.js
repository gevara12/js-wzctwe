class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    console.info(`My name is ${this.firstName} ${this.lastName}`);
  }

  set fullName(newVal) {
    [this.firstName, this.lastName] = newVal.split(" ");
  }

  ["some".toUpperCase()]() {
    console.info("passed someMethod");
  }
}

// const person = new Person("Elena", "Perovskaya");
// person.fullName;
// person.fullName = 'Penis Dushilin';
// person.fullName;
// person.SOME();


class Worker {
  constructor(name) {
    this.name = name;
  }

  work() {
    console.info(`${this.name} can work`);
  }
}

class IT extends Worker {
  work () {
    super.work();
    console.info('at office')
  }
}

const itWorker = new IT('Ken').work();