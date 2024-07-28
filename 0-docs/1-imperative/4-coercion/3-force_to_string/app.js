const { Console } = require("console-mpds");

const console = new Console();
console.writeln("" + -1.2345e4); // -12345 // No té en compte l'exponent WTF!!!
console.writeln("" + NaN); // NaN
console.writeln("1" + 2); // 12
console.writeln(1 + "2"); // 12
console.writeln("" + true); // true
console.writeln("" + false); // false
console.writeln("" + undefined); // undefined
