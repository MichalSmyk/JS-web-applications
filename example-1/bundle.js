(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      var multiply2 = (a, b) => {
        return a * b;
      };
      module.exports = multiply2;
    }
  });

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      var add2 = (a, b) => {
        return a + b;
      };
      module.exports = add2;
    }
  });

  // index.js
  var multiply = require_multiply();
  var add = require_add();
  console.log("Hello from the developer console!");
  console.log(new Date());
  console.log(multiply(add(2, 2), 10));
})();
