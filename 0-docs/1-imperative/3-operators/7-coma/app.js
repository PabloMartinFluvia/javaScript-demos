const { Console } = require("console-mpds");

const console = new Console();

console.writeln(0o4 >>> 2); // 1

//let result = 0o4 >>> 1, 3; //NO compila -> cal parentesis
let result = (0o4 >>> 1, 3);
console.writeln(result); // 3

/*En aquesta sentencia la /,/ no es considera com a operador, sino que javascript l'interpreta
com a que se li estan passant 2 arguments al mètode 
-> com que el mètode només necessita un argument  javascript IGNORA EL SEGON ARGUMENT
*/
console.writeln(0o4 >>> 1, 3); // 2
//Per a que funcioni com a operador + passarli al mètode 1 únic argument -> parentesis!
console.writeln((0o4 >>> 1, 3)); // 3
console.writeln((0o4 >>> 1, 4 % 5)); // 4
console.writeln((0o4 >>> 1, 4 % 5, 5 >= 5)); // true
console.writeln((0o4 >>> 1, 4 % 5, 5 >= 5, false || true)); // true

let x = 0;
let y = 0;
console.writeln((x++, y++)); // 0
console.writeln((x++, y++, "gggg")); // gggg
console.writeln((x++, y++)); // 2
console.writeln((x)); // 3
