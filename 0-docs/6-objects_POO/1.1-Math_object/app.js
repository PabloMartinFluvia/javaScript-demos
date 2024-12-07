const { Console } = require("console-mpds");

const console = new Console();
console.writeln(Math.E);  // 2.718281828459045
console.writeln(Math.PI); // 3.141592653589793
console.writeln(Math.sqrt(2)); // 1.414213562373095
console.writeln(Math.sin(Math.PI / 2)); // 1

console.writeln("Objecte Math força la conversió si l'argument no es del tipus number");
console.writeln(Math.abs('no convertible a número')); // NaN
console.writeln(Math.abs('-1')); // 1
console.writeln(Math.sign('-999')); // -1
console.writeln(Math.sign(4)); // 1

console.writeln(Math.round(0.5)); // 1 // redondear al entero más cercano
console.writeln(Math.ceil(0.5)); // 1 // entero mayor o igual al parametro
console.writeln(Math.floor(0.5)); // 0 // entero menor o igual al parametro

console.writeln(Math.max(-1, 1)); // 1
console.writeln(Math.pow(2, 10)); // 1024
console.writeln(Math.random()); // ? [0, 1)
