const { Console } = require("console-mpds");

const consoleMPDS = new Console();  

// els identificadors de funcions guarden una referencia a la zona de memoria on es guarda la funció
// puc assignar a noves variables la direcció de memoria d'una funció !!!
let dynamic = first; 
dynamic(`cualquiera`); // mensaje: cualquiera
dynamic = second;
dynamic(`cualquiera`); // MENSAJE: cualquiera

function first(msg) {
    consoleMPDS.writeln(`mensaje: ${msg}`);
}

function second(msg) {
    consoleMPDS.writeln(`MENSAJE: ${msg}`);
}

consoleMPDS.writeln(first === second); // false
second = first;
consoleMPDS.writeln(first === second); // true

// puc tractar els identificadors com a vairables normals
first = 1;
consoleMPDS.writeln(first); // 1
// consoleMPDS.writeln(first("mensaje")); // error

// al guardar la referencia, quan vui mostrar el valor el que es mostra, es el valor que está guardat en memoria 
// tot hi que l'identificador 'first' ja no fa referencia a la 'function first()', aquesta funció
// segueix guardada en la memoria TAL I COM ES VA DECLARAR ja que l'identificador 'second' continua
// referenciant-la
console.log(second); // [Function: first]
consoleMPDS.writeln(second); 
    /*  function first(msg) {
            consoleMPDS.writeln(`mensaje: ${msg}`);
        } 
    */  // -----> LO QUE ESTÁ GUARDAT EN MEMORIA ÉS LA DECLARACIÓ
consoleMPDS.writeln(typeof second); // funcion   


