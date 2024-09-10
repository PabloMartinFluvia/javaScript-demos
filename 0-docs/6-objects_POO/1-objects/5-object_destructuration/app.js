const { Console } = require("console-mpds");

const consoleMpds = new Console();

let object = {
    a: 666 * 7,
    b: `cadena`,
    c: [1, 2, 3],
    d: "other",
    e: "another"
};

consoleMpds.writeln(`\nMitjançant patrons: declaració de múltiples variables inicialitzant-les segons \
propietats análogues d'un objecte`);
let { a, b, z } = object;
consoleMpds.writeln(`${a} - ${b} - ${z}`); // 4662 - cadena - undefined
let {d, ...rest} = object;
consoleMpds.writeln(`${d} - ${rest}`); // other - [object Object]
console.log(rest); // { a: 4662, b: 'cadena', c: [ 1, 2, 3 ], e: 'another' }
// rest es un nou objecte amb NOMÉS les propietats RESTANTS

consoleMpds.writeln(`\nMitjançant patrons: assignació a variables previament declarades`);
let k = 'valor previo';
// some code
({a, b, k} = { b : 666, a : "oh", d : "ignorado"});
// {a, b, k} = { b : 666, a : "oh", d : "ignorado"}; // sense paèntesis -> error de compilació 
consoleMpds.writeln(`${a} - ${b} - ${k}`); // oh - 666 - undefined 
// Si una variable NO té correspondencia amb alguna propietat de l'objecte -> s'assigna valor undefined

consoleMpds.writeln(`
Mitjançant patrons: Declarar paràmetres d'una funció que pendran el valor de \
les propietat análoges al objecte passat com a argument`);
function f({ b, a }) {
    consoleMpds.writeln(`${a} - ${b}`);
}
f(object); // 4662 - cadena
f({ a: -1, b: true }); // -1 - true
f({ a: "aceptado", c: "ignorado" }); // aceptado - undefined

function g({a, d, ...rest}) {
    consoleMpds.writeln(`${a} - ${d}`); // 4662 - other
    console.log(rest); // { b: 'cadena', c: [ 1, 2, 3 ], e: 'another' }
}
g(object);
