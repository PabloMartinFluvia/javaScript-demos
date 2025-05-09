import {Console} from "console-mpds"

const console = new Console();
throw 1 + 5;
throw "Elevació d'un Error: 404" // no capturada
console.writeln("no ejecutada");
throw 404; // no ejecutada

