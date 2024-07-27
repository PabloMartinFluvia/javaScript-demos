const { Console } = require("console-mpds");

const console = new Console();
//var crazyVariable; // <- el que fa internament javascript amb el hoisitng.
console.writeln(crazyVariable); // res, xk node treballa en modo estrite
console.writeln(""+crazyVariable); // undefined
crazyVariable = "Esto es de locos!";
console.writeln(crazyVariable); // Esto es de locos!
crazyVariable = 666;
console.writeln(crazyVariable); // 666
crazyVariable = Infinity;
console.writeln(crazyVariable); // Infinity
var crazyVariable = NaN; // <- ara es només com una asignació més
console.writeln(crazyVariable); // NaN
crazyVariable = false;
console.writeln(crazyVariable); // false
var crazyVariable = undefined; // <- permet la re-declaració de la variable. A javascript li dona igual.
console.writeln(crazyVariable); // res, xk node treballa en modo estrite
console.writeln(""+crazyVariable); // undefined
var crazyVariable = 5; // <- permet la re-declaració de la variable. A javascript li dona igual.
console.writeln(crazyVariable);//5
