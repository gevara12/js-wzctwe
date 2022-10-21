const dataMap = new Map([
  ['title', 'Book Title'],
  ['description', 'Pretty desc'],
]);
const set = new Set(['hi', 'set']);
const arr = ['hi', 'array'];
const obj = { a: 'prop1', b: 'prop2' };

// const newObj = Object.entries(obj);

for (let elem of arr.entries()) {
  console.log(elem);
}

for (let elem of set.entries()) {
  console.log(elem);
}

for (let elem of dataMap.entries()) {
  console.log(elem);
}

// for (const [index, elem] of arr.entries()) {
//   console.log(index, elem);
// }

// for (const [key, val] of newObj) {
//   console.log(key, val);
// }

// for (const [key, value] in newObj) {
//   console.log(key, value);
// }
