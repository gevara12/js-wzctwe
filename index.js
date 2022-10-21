// import './prototypes.js';
// import './context.js';
// import './objects.js';
// import './closures.js';
// import './education.js';
// import './iterable.js';
// import './this.js';
// import './for.js';
import './patterns/pSingleton.js';

// function hello() {
//   console.info('Hello, my name is ');
// }

// const person = {
//   name: 'Ekaterina',
//   age: 4,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(document),
//   logInfo: function (job, phone) {
//     console.info(`name is ${this.name}`);
//     console.info(`age is ${this.age}`);
//     console.info(`job is ${job}`);
//     console.info(`phone is ${phone}`);
//   },
// };

// const person2 = {
//   name: 'Elena',
//   age: 7,
// };

// person.logInfo.bind(person2, 'officer', '+1')();
// person.logInfo.call(person2, 'officer', '+1');
// person.logInfo.apply(person2, ['officer', '+1']);
// console.info(person.logInfo('assistant', 121));

// const dataArr = [1, 2, 3, 4, 5, 6];

// function multPer(arr, n) {
//   return arr.map(i => i * n);
// }
// multPer(dataArr, 4);
// console.info(multPer(dataArr, 4));

// Array.prototype.multPer = function (n) {
//   return this.map((i) => i * n);
// };

// console.info(dataArr.multPer(3));

// function hello() {
//   console.info('Hello, my name is ');
// }

// const person = {
//   name: 'Ekaterina',
//   age: 4,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(document),
//   logInfo: function (job, phone) {
//     console.info(`name is ${this.name}`);
//     console.info(`age is ${this.age}`);
//     console.info(`job is ${job}`);
//     console.info(`phone is ${phone}`);
//   },
// };

// const person2 = {
//   name: 'Elena',
//   age: 7,
// };

// person.logInfo.bind(person2, 'officer', '+1')();
// person.logInfo.call(person2, 'officer', '+1');
// person.logInfo.apply(person2, ['officer', '+1']);
// console.info(person.logInfo('assistant', 121));

// const dataArr = [1, 2, 3, 4, 5, 6];

// function multPer(arr, n) {
//   return arr.map(i => i * n);
// }
// multPer(dataArr, 4);
// console.info(multPer(dataArr, 4));

// Array.prototype.multPer = function (n) {
//   return this.map((i) => i * n);
// };

// console.info(dataArr.multPer(3));

// function getCount(objects) {
//   let count = 0;

//   for (const itemObj of objects) {
//     let itemValues = Object.values(itemObj);
//     itemValues[0] === itemValues[1] && count++;
//   }
// // console.info(objects.filter(function(o){return o.x==o.y}).length);
//   return count;
// }

// getCount([
//   { x: 1, y: 1 },
//   { x: 2, y: 3 },
//   { x: 3, y: 3 },
// ]);

// function solve(meal_cost, tip_percent, tax_percent) {
//   let tip = (meal_cost / 100) * tip_percent;
//   let tax = (tax_percent / 100) * tip_percent;
//   let total_cost = meal_cost + tip + tax;

//   // console.info(tip, tax, Math.round(total_cost));
//   return Math.round(total_cost);
// }

// solve(12.0, 20, 8);
// class Polygon {
//   constructor(sides) {
//     this.sides = sides;
//   }

//   perimeter() {
//     console.info(this.sides.reduce((prev, curr) => prev + curr, 0));
//     this.sides.reduce((prev, curr) => prev + curr, 0);
//   }
// }

// const pentagon = new Polygon([3, 4, 5]);

// console.info(pentagon.perimeter());

// class Rectangle {
//   constructor(w, h) {
//     this.w = w;
//     this.h = h;
//   }
// }

// Rectangle.prototype.area = function () {
//   return this.w * this.h;
// };

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//   }
// }

// const rec = new Rectangle(3, 4);
// const sqr = new Square(3);

// console.info(rec.area());
// console.info(sqr.area());

// function birthdayCakeCandles(candles) {
//   let res = candles.reduce(function (p, v) {
//     return p > v ? p : v;
//   });

//   console.info(candles.filter((x) => x === 3).length);
// }

// birthdayCakeCandles([3, 2, 1, 3]);

// function reverseString(s) {
//   try {
//     console.info(s.split('').reverse().join(''));
//   } catch (e) {
//     console.error(e.message);
//   } finally {
//     console.info(s);
//   }
// }

// reverseString(Number('1234'));

// function modifyArray(nums) {
//   let modifiedArr = nums.map((x) => (x % 2 === 0 ? x * 2 : x * 3));

//   console.info(modifiedArr);
// }

// modifyArray([1, 2, 3, 4, 5]);

// function staircase(n) {
//   for (let i = 1; i < n + 1; i++) {
//     let itemStr = `${' '.repeat(n - i)}${'#'.repeat(i)}`;

//     console.log(itemStr);
//   }
// }

// staircase(6);

// function miniMaxSum(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   const minVal = sortedArr
//     .slice(0, arr.length - 1)
//     .reduce((prev, curr) => prev + curr, 0);
//   const maxVal = sortedArr
//     .slice(1, arr.length)
//     .reduce((prev, curr) => prev + curr, 0);
//   console.info(minVal, maxVal);
// }

// miniMaxSum([7, 69, 2, 221, 8974]);

// function compareTriplets(a, b) {
//   let alice = 0;
//   let bob = 0;
//   for (let i = 0; i < a.length; i++) {
//     a[i] > b[i] && alice++;
//     b[i] > a[i] && bob++;
//   }

//   return [alice, bob];
// }

// let a = [17, 28, 30];
// let b = [99, 16, 8];

// compareTriplets(a, b);

// function aVeryBigSum(ar) {
//   // Write your code here
// }

// var person = { name: 'Maya', age: 29 };
// console.log(person);

// var newPerson = person;
// console.log(newPerson);

// person['name'] = 'Joe';
// console.log(person === newPerson);
