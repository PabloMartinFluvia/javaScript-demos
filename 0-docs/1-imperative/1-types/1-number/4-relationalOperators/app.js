const { Console } = require("console-mpds");

const console = new Console();
console.writeln(5 === 5);  // true
console.writeln(5 == 5);  // true

console.writeln(5 !== 6); // true
console.writeln(5 != 6); // true

console.writeln(5 < 6); // true
console.writeln(5 <= 5); // true
console.writeln(5 > 4); // true
console.writeln(5 >= 5); // true
