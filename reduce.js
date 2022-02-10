const array = [1, 2, 3, 4];
const reducer = (a, b) => a * b;
debugger;
// 1 + 2 + 3 + 4
console.log(array.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array.reduce(reducer, 10));
// expected output: 15

