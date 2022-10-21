// Map
const example = new Map();
let obj = { name: 'Avrora' };

example.set(12, 'first').set(false, 'second').set(obj, 'third');

const resultObj = Object.fromEntries(example.entries());
// obj = null;
example.delete(false);
console.info(example.size, example.has(obj));
// console.info(example.size, example.values(), example.get(obj), resultObj);

// Set
const set = new Set();

let katya = { name: 'Katya' };
let avrora = { name: 'Avrora' };
let aurelia = { name: 'Aurelia' };

set.add(katya).add(avrora).add(aurelia).add(katya);

// for (let user of set) {
//   console.info(set.size, user);
// }

// WeakMap
let john = { name: 'John' };

let weakMap = new WeakMap();
weakMap.set(john, '...');

// john = null;
// console.info(weakMap.get(john));

// set search unique
let inputValues = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

// function unique(arr) {
//   console.info(Array.from(new Set(arr)));
// }

// unique(inputValues);
