const { Console } = require("console-mpds");

const console = new Console();
console.writeln(+ -5); // -5
console.writeln(- -5); // 5

//Proves meves

console.writeln(+ 0); // 0
console.writeln(- 0); // 0

console.writeln(+ Infinity); // Infinity
console.writeln(- Infinity); // -Inifinity

console.writeln(+ NaN); // NaN
console.writeln(- NaN); // NaN
