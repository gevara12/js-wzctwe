/* 
 single instance of class. when one object
 coordinate all actions across the system
*/

// es5
var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = { data: `Instanced at ${new Date().toLocaleString()}` };
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

var instanceFirst = Singleton.getInstance();
var instanceSecond = Singleton.getInstance();

console.table([instanceFirst, instanceSecond]);

// es6
class DBConnection {
  constructor(conStr) {
    this.conStr = conStr;
  }

  static getInstance(conStr) {
    if (!this.instance) {
      this.instance = new DBConnection(conStr);
    }

    return this.instance;
  }
}

let con1 = DBConnection.getInstance("mysqldb1");
let con2 = DBConnection.getInstance("mysqldb2");

console.table([con1.conStr, con2.conStr]);
