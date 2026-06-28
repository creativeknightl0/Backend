// 1st method - export modules
// const add = (x, y) => x + y;

// const PI = 3.14;

// const square = (x) => x * x;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// 2nd method
// const add = (x, y) => x + y;

// const PI = 3.14;

// const square = (x) => x * x;

// const math = {
//     add: add,
//     PI: PI,
//     square: square
// };

// module.exports = math;

// 3rd method
// module.exports.add = (x, y) => x + y;

// module.exports.PI = 3.14;

// module.exports.square = (x) => x * x;

// 4th method - exports shortcut
const add = (x, y) => x + y;

const PI = 3.14;

const square = (x) => x * x;

exports.add = add;
exports.PI = PI;
exports.square = square;