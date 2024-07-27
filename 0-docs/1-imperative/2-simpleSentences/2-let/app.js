const { Console } = require("console-mpds");

const console = new Console();
let identifier = 0;
console.writeln(`Valor actual .${identifier}.`); // Valor actual .0.
console.writeln(`Valor siguiente .${identifier + 1}.`); // Valor siguiente .1.
console.writeln(`Valor actual .${identifier}.`); // Valor actual .0.

let identifierWithoutInitialization;
console.writeln(`.${identifierWithoutInitialization}.`); // .undefined.

//console.writeln( `.${notDeclared}.`); // ERROR
