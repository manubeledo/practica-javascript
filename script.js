const array = [1, 2, 3, 4];
const reducer = (a, b) => a * b;
// 1 + 2 + 3 + 4
console.log(array.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array.reduce(reducer, 10));
// expected output: 15

function calcular(x){
    let y = x * x;
    debugger;
    console.log(y);
}

function saludar(x){
    alert(`hola ${x} bienvenido!`)
    let n = 10;
    calcular(n)
    debugger;
}

let nombre = 'manuel';

saludar(nombre)