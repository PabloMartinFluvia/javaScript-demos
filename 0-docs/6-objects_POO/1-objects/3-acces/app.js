const { Console } = require("console-mpds");

const consoleMpds = new Console();

let object = {
    a: 666 * 7,
    b: `cadena`
};

consoleMpds.writeln("Accés a propietats mitjançant indexació")
consoleMpds.writeln(object["a"]); // 4662
//consoleMpds.writeln(object[a]); // Error: a is not defined
console.log(object["k"]); // undefined

consoleMpds.writeln("\nAccés a propietats mitjançant operador coma")
consoleMpds.writeln(object.b); //cadena