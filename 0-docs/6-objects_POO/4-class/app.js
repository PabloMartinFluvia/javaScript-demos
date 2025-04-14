const { Console } = require("console-mpds");

const console = new Console();

//const hoistingTest = new Clazz(25); // error, ja que class Clazz NO té hoisting

/*
class HoistintTester {
    constructor() {
        this.property = new Clazz(25);
    }
}
const hoistingTest = new HoistintTester(); // error en linia 9, ja que class Clazz NO té hoisting
*/

class Clazz {

    // opcional: només per a deixar clar quins són els atributs
    publicAttributeX
    publicAttributeY
    #privateAttribute
    complexProperty

    constructor(parameter) {
        this.publicAttributeX = parameter;
        this.publicAttributeY = 0;
        this.#privateAttribute = "privado";
        this.complexProperty = this.#configComplex();
    }

    #configComplex() {
        return "inicialización compleja";
    }

    publicInstanceMethod() {
        this.#privateInstanceMethod();
        console.writeln(`publicAttributeX: ${this.publicAttributeX} - #publicAttributeY: ${this.publicAttributeY}`);
        console.writeln(`publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
    }

    testPrivateProperties(other) {
        other.#privateInstanceMethod();
        console.writeln(`${this.#privateAttribute} y ${other.#privateAttribute}`);        
    }

    #privateInstanceMethod() {
        this.publicAttributeX++;
        this.publicAttributeY++;
    }

    static publicClazzAttribute = "global";
    static publicClazzMethod = function (value) {
        Clazz.publicClazzAttribute = value;
        Clazz.#privateClazzMethod(0);
    }
    static #privateClazzAttribute = "particular";
    static #privateClazzMethod = function (value) {
        Clazz.#privateClazzAttribute = value;
    }
}

const object = new Clazz(1);
object.publicInstanceMethod(); // 2 1 // global
object.publicAttributeX = 666;
console.writeln(`object.publicAttributeX: ${object.publicAttributeX}`); // 666
console.writeln(`Clazz.publicClazzAttribute: ${Clazz.publicClazzAttribute}`); // global
object.publicInstanceMethod(); // 667 2 // global
Clazz.publicClazzMethod("todos");
object.publicInstanceMethod(); // 668 3 // todos

const other = new Clazz(50);
object.testPrivateProperties(other); // privado y privado 
console.writeln(object.complexProperty); // inicialización compleja

//console.writeln(object.#privateAttribute); // Error de compilació