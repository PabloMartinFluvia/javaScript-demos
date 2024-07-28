const { Console } = require("console-mpds");

const console = new Console();
console.writeln(! -55.55); // false
console.writeln(! "cadena"); //false 

//valors falsables:
console.writeln(! 0); //true
console.writeln(! NaN); //true
console.writeln(! ""); //true
console.writeln(! undefined); //true  
