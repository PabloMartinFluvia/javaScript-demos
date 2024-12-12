const { Console } = require("console-mpds");

const console = new Console();

console.writeln(`Next es una función: cuando se llama incrementa su propiedad(miembro) counter.`)
let next = function () {
    next.counter++;
    return next.counter
}
console.writeln(`${next()}`); // NaN
console.writeln(`NaN: ya que nex.counter es NaN ->  nex.counter++ és NaN`)

console.writeln(`\nNext tambien tiene la propiedad(miembro) reset, que asigna 0 al miembor counter de nex`)
next.reset = function() {
    next.counter = 0;
}
next.reset();
console.writeln(`${next()}`); // 1

console.writeln(`\nModificando valor counter con asignación:`);
next.counter = 10;
console.writeln(`${next()}`); // 11
console.writeln(`${next()}`); // 12
console.writeln(`${next()}`); // 13

console.writeln(`\nReseteando valor counter llamando a reset:`);
next.reset();
console.writeln(`${next()}`); // 1
console.writeln(`${next()}`); // 2
console.writeln(`${next()}`); // 3
