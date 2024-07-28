const { Console } = require("console-mpds");

const console = new Console();
let x= 100;
console.writeln(x); // 100
console.writeln(x++); // 100
console.writeln(++x); // 102
console.writeln(x--); // 102
console.writeln(--x); // 100

//con espacio enmedio -> NO és un operador de incremento/decremento
console.writeln(- -x); // 100 
console.writeln(+ +x); // 100

console.writeln(++x*2); // 202 ; x == 101
console.writeln(++x*2); // 204 ; x == 102
console.writeln(x++*2); // 204 ; x == 103
console.writeln(x); // 103
