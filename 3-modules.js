// CommonJS, every file is moudle (by default)
// Modules - Encapsulated Code (only share minimum)
// import
const names = require('./4-first-module');
// destructure
// const {john, peter} = require('./4-first-module');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

console.log(names);

// if destructure
// sayHi(john);
// sayHi(peter);
// else 
sayHi(names.john);
sayHi(names.peter);

// console.log(data);

