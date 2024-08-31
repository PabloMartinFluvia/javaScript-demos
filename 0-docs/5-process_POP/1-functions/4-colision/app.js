const { Console } = require("console-mpds");

const console = new Console();
let global = 3;
let collision = 2;
console.writeln(`global: ${global}`); // global: 3
console.writeln(`collision: ${collision}`);// collision: 2
outer();
console.writeln(`global: ${global}`); // global: 4
console.writeln(`collision: ${collision}`); // collision: 2 // outer() no ha modificat la variable global collision

function test() {
    console.writeln("función declarada en el ámbito global");
}

function outer() {
    let local = 1;
    let collision = 0;
    global++;
    local++;
    collision++;
    console.writeln(`global: ${global}`); // global: 4
    console.writeln(`local: ${local}`); // local: 2
    console.writeln(`collision: ${collision}`); // collision: 1
    test(); // s'executarà la de la linia 27 (y no la de la línia 12)

    function test() {
        console.writeln("función declarada en el ámbito local de outer");
    }
}
