const { Console } = require("console-mpds");

const consoleMpds = new Console();
let object = {
    a: 666 * 7,
    b: `cadena`
};

consoleMpds.writeln("\nAplicació de sentencia for-in a aquest objecte:");
for (let property in object) {
    consoleMpds.writeln(property); // a / b
    consoleMpds.writeln(object[property]); // 4662 / cadena 
    consoleMpds.writeln(typeof object[property]); // number / string 
}

consoleMpds.writeln("\nAnidació de estructures de dades i joc amb sentencies for-in i for-of")
let array = [
    {
        x: -1,
        y: 1
    },
    {
        x: -2,
        y: 2
    }
];
for (let object of array) {
    consoleMpds.writeln(object); // [object Object] / [object Object]
    for (let property in object) {
        consoleMpds.writeln(`${property} : ${object[property]}`) // x : -1 / y : 1 // x : -2 / y : 2
    }
}