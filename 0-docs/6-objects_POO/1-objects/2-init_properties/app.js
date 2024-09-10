const { Console } = require("console-mpds");

const consoleMpds = new Console();
consoleMpds.writeln("Creació d'un objecte amb propietats inicialitzades");
let object = {
    a: 666 * 7,
    b: `cadena`
};
consoleMpds.writeln(object); // [object Object]
console.log(object); // { a: 4662, b: 'cadena' }
consoleMpds.writeln(typeof object); // object




