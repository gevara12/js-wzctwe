// const obj = {
//   a: 42,
//   myFunc: function () {
//     setTimeout(function () {
//       console.info(this.a);
//     });
//   },
// };

// obj.myFunc();

// console.info(1);

// setTimeout(() => console.info(2), 1000);

// const promise1 = new Promise((resolve, reject) => {
//   console.info(3.1);
// }).then(console.info(3));

// setTimeout(() => console.info(4), 3000);

// const promise2 = new Promise((resolve, reject) => {
//   resolve(setTimeout(() => {
//     console.info(5);
//   }, 100));
// }).then((data) => console.info(data, 6));

// console.info(7);

// 1
// 3.1
// 3
// 7
// 5
// 6
// 2
// 4

// const fruits = [
//   'banana',
//   'apple',
//   'mango',
//   'apple',
//   'banana',
//   'apple',
//   'mango',
//   'mango',
//   'apple',
//   'banana',
// ];

// [4, 3, ];
// console.info([...fruits]);

// let count = 4;
// function countInc() {
//   console.info('in', count);
//   return count += 1;
// }

// countInc(1);
// countInc(1);
// countInc(1);
// console.info('out', count);
// var a = 10;
// var x = (function () {
//   (function () {
//     a = 12; // <<< look carefully at this line.
//   })();
//   return function () {
//     console.log(a);
//   };
// })();
// x();

// var a = 10;
// (function () {
//   var a = 15;
//   window.x = function () {
//     console.log(a);
//   };
// })();
// x();

// const dictionary = [
//   ['AUG', 'Methionine'],
//   [['UUU, UUC'], 'Phenylalanine'],
// ];

// const dest = Object.fromEntries(dictionary);

// console.info(dest['AUG']);

// const translate = (str) => {
//   const result = [...str];
//   let newArr = [];

//   for (let i = 0; i < str.length; i += 3) {
//     newArr = [...newArr, result.slice(i, i + 3).join('')];
//   }

//   console.info(str.length, newArr);
// };

// translate('UUCUUCUAAUGGU');

// function getLetter(s) {
//   let firstLetter = s[0];
//   let letter;
//   arrA = ['a', 'e', 'i', 'o', 'u'];
//   arrB = ['b', 'c', 'd', 'f', 'g'];
//   arrC = ['h', 'j', 'k', 'l', 'm'];
//   console.info(arrB.includes(firstLetter));
//   switch (firstLetter) {
//     case arrA.includes(firstLetter):
//       return (letter = 'A');
//     default:
//       return;
//   }

//   console.info(letter);
//   return letter;
// }

// getLetter('adfgt');

// var findMedianSortedArrays = function (nums1, nums2) {
//   const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
//   const median =
//     sorted.length % 2 === 0
//       ? (sorted[Math.floor(sorted.length / 2) - 1] +
//           sorted[Math.floor(sorted.length / 2)]) /
//         2
//       : sorted[Math.floor(sorted.length / 2)];
//   return median;
// };

// const nums1 = [1, 3],
//   nums2 = [2, 7];

// findMedianSortedArrays(nums1, nums2);

// const hourglass = (arr) => {
//   let count = 0;
//   let windowW = 3;
//   let windowH = 3;
//   let rowSize = arr.length;

//   for (let i = 0; i < rowSize; i++) {
//     // console.info(arr[i]);
//     for (let j = 0; j < arr[i].length; j++) {
//       // arr[i][j] = count;
//       console.info(arr[i][j]);
//     }
//   }
//   // console.info([...arr]);
// };

// let arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];

// hourglass(arr);

// export class Squares {
//   constructor(num) {
//     this.num = num;
//   }

//   get sumOfSquares() {
//     const sum = [...Array(this.num)]
//       .fill('')
//       .map((_, i) => (i + 1) ** 2)
//       .reduce((prev, curr) => prev + curr, 0);
//     return sum;
//   }

//   get squareOfSum() {
//     const sum = [...Array(this.num)]
//       .fill('')
//       .map((_, i) => i + 1)
//       .reduce((prev, curr) => prev + curr, 0) ** 2;
//       return sum;
//   }

//   get difference() {
//     const diff = this.squareOfSum - this.sumOfSquares;
//     console.info(diff);
//     return diff;
//   }
// }

// const squares5 = new Squares(5);
// squares5.difference;

// arr => arr.flatMap(v =>
//     Array.isArray(v) ? flatten(v) : v ?? []
//   )

// export const flatten = (arr) =>
//   arr.flatMap((v) => console.info(Array.isArray(v) ? flatten(v) : v ?? []));

// flatten([1, [2, 3, null, 4], [null], 5]);

// const str = '07:05:45PM';

// function timeConversion(s) {
//   const midnightPeriod = s.slice(-2);
//   let [hours, minutes, seconds] = s.split(':');

//   if (hours === '12') {
//     hours = '00';
//   }

//   if (midnightPeriod === 'PM') {
//     hours = parseInt(hours, 10) + 12;
//   }

//   const result = `${hours}:${minutes}:${seconds.slice(0, 2)}`;
//   return result;
// }

// timeConversion(str);

// console.log('script start');

// setTimeout(() => console.log('setTimeout'), 0);

// Promise.resolve()
//   .then(() => console.log('promise1'))
//   .then(() => console.log('promise2'));

// console.log('script end');

// (function () {
//   var i;

//   for (i = 0; i < 3; i++) {
//     var func = function () {
//       console.info(i);
//     };
//     setTimeout(func);
//   }

//   // console.info(i);
// })();

// function createCalcFunc(n) {
//   return function () {
//     console.info(100 * n++);
//   };
// }

// const calc = createCalcFunc(5);
// const calc1 = createCalcFunc(10);

// calc();
// calc1();
