const { Console } = require("console-mpds");

const console = new Console();
console.writeln("Qué curioso"[5]); // u

console.writeln("Qué curioso"[-1]); // res, ja que nodejs treballa en modo estricto i no mostra undefined
console.writeln(typeof "Qué curioso"[-1]); // undefined
console.writeln("Qué curioso"[20]); // res, ja que nodejs treballa en modo estricto i no mostra undefined
console.writeln(typeof "Qué curioso"[20]); // undefined

//Ignoro si l'operador força la coerció a tipus String, xo el valor resultant és undefined
console.writeln(123456[1]); // res, ja que nodejs treballa en modo estricto i no mostra undefined
console.writeln(typeof 123456[5]); // undefinded
console.writeln(true[1]); // res, ja que nodejs treballa en modo estricto i no mostra undefined
console.writeln(typeof true[1]); // undefinded
//console.writeln(undefined[1]); // ERROR
//console.writeln(typeof undefined[1]); //ERROR

let result = 123456[1];
console.writeln(result); // res, ja que nodejs treballa en modo estricto i no mostra undefined
console.writeln(typeof result); //undefined



