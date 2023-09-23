// CommonJS, every file is moudle (by default)
// Modules - Encapsulated Code (only share minimum)\
// local
const secret = 'Super Secret'
// share
const john = 'john';
const peter = 'peter';

// export default
// ES6 feature - if key and value name is same then you can use like below same as (exports: { john: 'john', peter: 'peter' })
module.exports = {john, peter};

// console.log(module);