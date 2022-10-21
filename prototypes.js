// __proto__ чтобы получить родительский прототип родительского класса или объекта

// const obj = {
//   a: 'a',
//   b: 'b'
// };

// // Object.getPrototypeOf(obj);

// function Cat (name, color) {
//   this.name = name;
//   this.color = color;
// }

// Cat.prototype.voice = function () {
//   console.info(`Cat says ${this.name} says meow`);
// }

// const lion = new Cat('Simba', 'Nice');
// lion.voice();

// console.info('prototype', Cat.prototype);
// console.info(lion);
// console.info(lion.__proto__ === Cat.prototype);
// console.info(lion.constructor);

// console.info('getPrototypeOf', Object.getPrototypeOf(Cat));

function Person() {}

Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
console.info('skin' in person);
console.info(person.legs);

// hasOwnProperty
