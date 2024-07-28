const { Console } = require("console-mpds");

//See also javascript's table (in mpds-docs)

//Motivación para establecer reglas de precedencia y asociatividad:

const console = new Console();
console.writeln(100/2-1); // ¿100 o 49?
console.writeln(4>=7 && 2==4 || 5<6); // ¿false o true?
    
console.writeln(100/2/2); // ¿100 o 25?
console.writeln(1-1-1); // ¿1 o -1?

console.writeln(5 * 4+4 * 2); // ¿80 o 28?
console.writeln(5+4 / 4+2); // ¿1.5 u 8?


