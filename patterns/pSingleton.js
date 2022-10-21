/* 
 single instance of class. when one object
 coordinate all actions across the system
*/

const Singleton = (function () {
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

console.info(instanceFirst);
console.info(instanceSecond);