const { Console } = require("console-mpds");

const console = new Console();
console.writeln(!false); // true
console.writeln(!true); // false