const { Console } = require("console-mpds");

const console = new Console();
console.writeln(4 + 5); // 9
console.writeln(4 - 5); // -1  
console.writeln(4 * 5); // 20 
console.writeln(4 / 5); // 0.8 
console.writeln(4 % 5); // 4  
console.writeln(4 ** 5); // 1024  

console.writeln(4 / 0); // Infinity
console.writeln(Infinity / 0); // Infinity

console.writeln(0 / 0); // NaN  <---------- WTF
console.writeln(4 % 0); // NaN  <---------- WTF
console.writeln(Infinity % 0); // NaN

console.writeln(0 / Infinity); // 0
console.writeln(5 % Infinity); // 5 (ya que 5 / Infinity = 0)
console.writeln(0 % Infinity); // 0  

console.writeln(Infinity + 5); // Infinity
console.writeln(Infinity - 5); // Infinity
console.writeln(Infinity * 5); // Infinity
console.writeln(Infinity / 5); // Infinity
console.writeln(Infinity ** 5); // Infinity

console.writeln(Infinity - Infinity); //NaN <---- WTF
console.writeln(Infinity * 0); // NaN <---- WTF
console.writeln(Infinity % 5); // NaN <---------- WTF

console.writeln(4 + NaN); // NaN
console.writeln(4 - NaN); // NaN
console.writeln(4 * NaN); // NaN
console.writeln(4 / NaN); // NaN
console.writeln(NaN / 4); // NaN
console.writeln(4 % NaN); // NaN
console.writeln(NaN % 4); // NaN
console.writeln(4 ** NaN); // NaN
console.writeln(NaN ** 4); // NaN
console.writeln(NaN / 0); // NaN
console.writeln(NaN % 0); // NaN
console.writeln(NaN / Infinity); // NaN
console.writeln(NaN % Infinity); // NaN
console.writeln(Infinity / NaN); // NaN
console.writeln(Infinity % NaN); // NaN

console.writeln(0.1e-7 + 1e7); // 10000000.00000001
console.writeln(0.1e-8 + 1e8); // 100000000 <---- WTF
console.writeln(0.1 + 0.2); // 0.30000000000000004 <---- WTF
