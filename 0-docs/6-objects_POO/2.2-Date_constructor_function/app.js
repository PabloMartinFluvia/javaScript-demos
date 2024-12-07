const { Console } = require("console-mpds");

const console = new Console();
console.writeln(`Test amb .now():`)
console.writeln(Date.now()); // ? // milisegons des del temps 0
let date = new Date(Date.now());
console.writeln(date.toString()); // ?

console.writeln(`\nTest amb valor 0 de Date:`)
date = new Date(0);
console.writeln(date.toString()); // Thu Jan 01 1970 01:00:00 GMT+0100 (hora estándar de Europa central)

console.writeln(`\nTest amb Date passant argument com a String:`)
date = new Date('August 19, 1975 23:15:30');
console.writeln(date.toString()); // Tue Aug 19 1975 23:15:30 GMT+0200 (hora de verano de Europa central)
console.writeln(date.getTime()); // 177714930000 // els milisegons des del temps 0
console.writeln(date.getDate()); // 19 // dia del mes
console.writeln(date.getDay()); // 2 // dia/count de la setman
console.writeln(date.getHours()); // 23
date.setHours(1);
console.writeln(date.toString()); // Tue Aug 19 1975 01:15:30 GMT+0200 (hora de verano de Europa central)

console.writeln(`\nTest amb valor mètode static parse:`)
date = new Date(Date.parse('August 19, 1975 23:15:30'));
console.writeln(date.toString()); // Tue Aug 19 1975 23:15:30 GMT+0200 (hora de verano de Europa central)
