// function sayHello(name) {
//   const message = `Hello ${name}`;
//   return function () {
//     console.info(message);
//   }
// }

// const helloElena = sayHello('Elena');
// const helloEgor = sayHello('Egor');

// helloElena();
// helloEgor();

// function createFrameworkManager() {
//   const frameworks = ['angular', 'react'];

//   return {
//     print: function() {
//       console.info(frameworks);
//     },
//     add: function(item) {
//       frameworks.push(item);
//     }
//   }
// }

// const Manager = createFrameworkManager();
// Manager.print();
// Manager.add('tratata');
// Manager.print();

// const fib = [1, 2, 3, 5, 8, 13];

// for (var i = 0; i < fib.length; i++) {
// (function(j) {
//   setTimeout(function () {
//     console.info(`fib[${j}] ${fib[j]}`);
//   }, 1500);
// })(i)
// }

// function createIncrementor (n) {
//   return function(num) {
//     return n + num
//   }
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// console.info(addOne(15));
// console.info(addOne(412));

// console.info(addTen(15));
// console.info(addTen(412));

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');

// console.info(comUrl('google'));
// console.info(ruUrl('yandex'));
// console.info(ruUrl('vk'));

// function bind(ctx, fn) {
//   return function (...args) {
//     fn.apply(ctx, args);
//   };
// }

// function logPerson() {
//   console.info(`Person ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = { name: 'Михаил', age: 22, job: 'front' };
// const person2 = { name: 'Елена', age: 32, job: 'back' };

// bind(person1, logPerson)();
// bind(person2, logPerson)();
