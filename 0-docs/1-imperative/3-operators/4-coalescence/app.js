const { Console } = require("console-mpds");

const console = new Console();
//retorna el segon operando quan el primer operando es null o undefined, si no retorna el 1er operando
console.writeln(null ?? `inicial`); // inicial -> 2n operando 
console.writeln(undefined ?? `inicial`); // inicial -> 2n operando

console.writeln(false ?? `inicial`); // false -> 1er operando tot hi ser falsable
console.writeln(0 ?? `inicial`); // 0 -> 1er operando tot hi ser falsable
console.writeln("" ?? `inicial`); //  -> 1er operando tot hi ser falsable

console.writeln(true ?? `inicial`); // true
console.writeln(1 ?? `inicial`); // 1
console.writeln("cadena" ?? `inicial`); // cadena

//forma antiga: retornar el segon operando quan el primer era falsable, si no retornar el 1er operando

console.writeln(null || `inicial`); // inicial
console.writeln(undefined || `inicial`); // inicial
console.writeln(false || `inicial`); // inicial
console.writeln(0 || `inicial`); // inicial
console.writeln("" || `inicial`); // inicial

console.writeln(true || `inicial`); // true
console.writeln(1 || `inicial`); // 1
console.writeln("cadena" || `inicial`); // cadena

//equivalent a:
let x;
 // ...
console.writeln(x === null ? x : `inicial`); // inicial
console.writeln(x === undefined ? x : `inicial`); // res, xk node treballa amb modo estricte
console.writeln(x === false ? x : `inicial`); // inicial
//Diría que les 3 línies anteriors (from documentació) son erronees. No seria millor:
let b;
// ...
console.writeln(b !== null ? b : `inicial`); //  res, xk node treballa amb modo estricte
console.writeln(b !== undefined ? b : `inicial`); // inicial
console.writeln(b !== false ? b : `inicial`); //  res, xk node treballa amb modo estricte

console.writeln(b ?? `inicial`); //inicial
