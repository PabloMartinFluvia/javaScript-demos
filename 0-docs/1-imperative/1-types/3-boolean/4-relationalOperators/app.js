const { Console } = require("console-mpds");

const console = new Console();
console.writeln(true === true); // true
console.writeln(true == true); // true

console.writeln(true !== false); // true
console.writeln(true != false); // true

console.writeln(true != true); // false

console.writeln(false < true); // true
console.writeln(false <= false); // true
console.writeln(true < false); // false
console.writeln(true <= false); // false
console.writeln(true > false); // true
console.writeln(true >= true); // true
