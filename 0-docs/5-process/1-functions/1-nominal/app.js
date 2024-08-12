const { Console } = require("console-mpds");

const consoleMPDS = new Console();
function example() {
    const constant = `acción intermedia`;
    consoleMPDS.writeln(`primera acción`);
    consoleMPDS.writeln(constant);
    consoleMPDS.writeln(`segunda acción`);
}

example(); // primera acción\nacción intermedia\nsegunda acción
//se ejecuta la llamada a la función, y luego se aplica el operador typeof sobre una llamada
consoleMPDS.writeln(typeof example()); // primera acción\nacción intermedia\nsegunda acción\nundefined

//consoleMPDS.writeln(example()); // primera acción\nacción intermedia\nsegunda acción\n
console.log(example()); // primera acción\nacción intermedia\nsegunda acción\nundefined

// se aplica el operador typeof al IDENTIFICADOR (sin llamar a la función)
consoleMPDS.writeln(typeof example); // function

//pasar una función a String equivale a un String que sale literalmente como está escrito en la declaración
consoleMPDS.writeln(example); // function ...


