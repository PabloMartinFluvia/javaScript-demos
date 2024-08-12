const { Console } = require("console-mpds");

const console = new Console();
principal(); // última definición
auxiliar(); // última definición

function principal() {
    auxiliar();
}

// hoisting + redefinició amb el mateix identificador

function auxiliar() {
    console.writeln("primera definición");
}

function auxiliar() {
    console.writeln("última definición");
}
