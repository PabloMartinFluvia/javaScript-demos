const { Console } = require("console-mpds");

const console = new Console();
console.writeln("cadena" === "cadena"); // true
console.writeln("cadena" == "cadena"); // true

console.writeln("cadena" !== "cadena distinta"); // true
console.writeln("cadena" != "cadena distinta"); // true

console.writeln("ana" < "Ana"); // false
console.writeln("Ana" < "ana"); // true
console.writeln(" ana" < "ana"); // true
console.writeln("ana" < "ana "); // true

console.writeln("cadena" < "cadena mayor"); // true
console.writeln("cadena" <= "cadena mayor o igual"); // true
console.writeln("cadena" > "caden a menor "); // true
console.writeln("cadena" >= "caden a menor o igual"); // true

console.writeln("a" < "b"); // true
console.writeln("alfabetizar" < "buho"); // true
console.writeln("ana" < "bernardo"); // true
console.writeln("bernardo" < "carmen"); // true
console.writeln("carmen" < "carmencita"); // true
console.writeln("á" < "b"); // false, ya que á != a !!!
console.writeln("á" < "í"); // true
