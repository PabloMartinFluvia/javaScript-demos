const { Console } = require("console-mpds");

const console = new Console();
//operador complement -> substitueix bit a bit
console.writeln(~ 4); // -5
console.writeln(~ 0b100); // -5
console.writeln(~ 0o4); // -5

//AND lògic bit a bit
console.writeln(4 & 8); // 0
console.writeln(5 & 12); // 4
console.writeln(0b101 & 0b1100); //4  {0100}

//OR lògic bit a bit
console.writeln(4 | 8); // 12
console.writeln(5 | 12); // 13
console.writeln(0b101 | 0b1100); //13  {1101}

//X-OR bit a bit (bits diferents -> 1   bits iguals -> 0)
console.writeln(4 ^ 8); // 12 OR-EXCLUSIVO
console.writeln(5 ^ 9); // 12 OR-EXCLUSIVO
console.writeln(5 ^ 12); // 9
console.writeln(0b101 ^ 0b1100); //9  {1001} // 1 quan són diferents, 0 quan són iguals -> és un OR, xo 1 1 -> 0

//afegir a operando1 n bits 0 a la dreta (n= operando2)
console.writeln(4 << 1); // 8
console.writeln(0b1001 << 1); //18 {10010}
console.writeln(0b11 << 2); //12 {1100}

//eliminar a operando1 els n bits de més a la esquerra (n= operando2)
console.writeln(4 >> 1); // 2
console.writeln(0b110 >> 1); //3 {11}
console.writeln(0b1001 >> 2); //2 {10}

//similar a >>, xo té algu a veure amb un tema del signe
console.writeln(4 >>> 1); // 2
console.writeln(0b1111 >>> 1); //7 {111}
console.writeln(0b1100 >>> 2); //3 {11}
