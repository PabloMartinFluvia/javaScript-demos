const { Console } = require("console-mpds");

const console = new Console();

class Clazz {

    constructor(string){
        this.attribute = string;
    }
    method() {
        console.writeln(this.attribute + " nominal");
    }
}

let object = new Clazz(`Classe Declarada`);
object.method();

console.writeln(`\nclazzRef apunta a una funció constructora anònima (no té nom):`)
let clazzRef = class {

    constructor(string){
        this.attribute = string;
    }
    method() {
        console.writeln(this.attribute + " anonnymous");
    }
}

console.writeln(typeof clazzRef); // function

console.writeln(`\nCrear un objecte de la classe anonima fent un new amb la referencia a la funció constructora anonima:`)
object = new clazzRef(`Expresion`);
object.method(); // Expresion annonumous

console.writeln(`\nInvocar un mètode (sense crear l'objecte) de la classe anonima fent un new amb la referencia a la funció constructora anonima:`)
new clazzRef(`Expresion`).method(); // Expresion annonumous

console.writeln(`\nAra la referencia clazzRef apunta a la funció constructora nominal`)
clazzRef = Clazz;
object = new clazzRef(`Flipping on the beach`);
object.method();
new clazzRef(`Flipping on fly`).method();

console.writeln(`\nFull anonima. Enviant missatge sense guardar un objecte de la classe:`)
new class {

    constructor(string){
        this.attribute = string;
    }
    method() {
        console.writeln(this.attribute);
    }
} ("I'm instance of annonymous class").method();