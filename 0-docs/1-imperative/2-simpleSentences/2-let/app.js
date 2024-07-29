const { Console } = require("console-mpds");

const console = new Console();
let identifier = 0;
console.writeln(`Valor actual .${identifier}.`); // Valor actual .0.
console.writeln(`Valor siguiente .${identifier + 1}.`); // Valor siguiente .1.
console.writeln(`Valor actual .${identifier}.`); // Valor actual .0.

let identifierWithoutInitialization;
console.writeln(`.${identifierWithoutInitialization}.`); // .undefined.

//console.writeln( `.${notDeclared}.`); // ERROR

//puc declarar N variables del tirón en una sentencia let -> NO recomanable, com a molt usar-ho en la 
//sentencia let d'un for.
let id1 = 1, id2 = 2;
console.writeln(`${id1} - ${id2}`); //1 - 2