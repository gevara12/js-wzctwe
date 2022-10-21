const obj = { a: 'a' };

const key = 'b';
const value = 'value';
const descriptor = {
  value: 'rewrites',
  enumerable: true,
};

Object.defineProperty(obj, key, descriptor);

console.info(
  `Object.getOwnPropertyDescriptor(obj, key) `,
  Object.getOwnPropertyDescriptor(obj, 'b')
);

console.log(`value: `, obj[key]);

console.info(obj);
