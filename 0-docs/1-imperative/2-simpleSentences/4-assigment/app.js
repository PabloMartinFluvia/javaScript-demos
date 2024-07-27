const { Console } = require("console-mpds");

const console = new Console();

//diferenciar entre el que es retorna al inicialitzar i assignar
let test = 3; // <- undefined
test = 6; // <- 6

let crazyVariable;
console.writeln(crazyVariable); // res, pk node treballa en mode estrice 
console.writeln(""+crazyVariable); // undefined
crazyVariable = "Esto es de locos!";
console.writeln(crazyVariable); // Esto es de locos!
crazyVariable = 666;
console.writeln(crazyVariable); // 666
crazyVariable = Infinity;
console.writeln(crazyVariable); // Infinity
crazyVariable = NaN;
console.writeln(crazyVariable); // NaN
crazyVariable = false;
console.writeln(crazyVariable); // false

let x;
let y;
let z = 0;
// ...
x = y = z; //<- No recomanat: expresió amb efectes laterals dintre d'una altra sentencia
console.writeln(x); // 0
let a;
console.writeln(a=x); //0 <- No recomanat: expresió amb efectes laterals dintre d'una altra sentencia 
console.writeln(a); //0
