const { Console } = require("console-mpds");

const console = new Console();
console.writeln(- "-666"); //666
console.writeln(- "sin formato numérico"); //NaN
console.writeln(- ""); //0
console.writeln(- false); //0 (en la documentació diu -0)
console.writeln(- true); //-1
console.writeln(- undefined); //NaN
