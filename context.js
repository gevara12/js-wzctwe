// const person = {
//   surname: 'Stark',
//   knows: function (what, name) {
//     console.info(this);
//     console.info(`Ты ${what} знаешь, ${name} ${this.surname}`);
//   },
// };

// const john = { surname: 'Snow' };

// person.knows('все', 'Дэн');
// person.knows.call(john, 'ничего не', 'Макар');
// person.knows.apply(john, ['ничего не', 'Макар']);
// person.knows.bind(john, 'ничего не', 'Макар')();

const obj1 = {
  name: 'Michael',
  func__Func() {
    return function () {
      console.log(this);
    };
  },
  func__Arrow() {
    return () => {
      console.log(this);
    };
  },
  arrow__Func: () => {
    return function () {
      console.log(this);
    };
  },
  arrow__Arrow: () => {
    return () => {
      console.log(this);
    };
  },
};

const obj2 = {
  name: 'Jimmy',
  func__Func: obj1.func__Func(),
  func__Arrow: obj1.func__Arrow(),
  arrow__Func: obj1.arrow__Func(),
  arrow__Arrow: obj1.arrow__Arrow(),
};

// obj2.func__Func(); // ?
// obj2.func__Arrow(); // ?
// obj2.arrow__Func(); // ?
// obj2.arrow__Arrow(); // ? undefined

// function foo () {
//   console.info(this);
// }

// // foo();

// const obj3 = new foo();
