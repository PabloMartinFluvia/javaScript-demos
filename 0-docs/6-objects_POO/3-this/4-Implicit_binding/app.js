const { Console } = require("console-mpds");

const console = new Console();

console.writeln(`Quien es this?
-> El objeto al que se le pase el mensaje (método que tiene)`)

console.writeln(`Con una función constructora`);
function Clazz1(parameter) {
    this.attribute = parameter;

    this.method = () => 
        console.writeln(`this.attribute: ${this.attribute}`);
    
}

Clazz1.prototype.method2 = function() {
    console.writeln(`this.attribute: ${this.attribute}`);
}

let object = new Clazz1("nada");
object.method(); // this.attribute: nada
object.method2(); // this.attribute: nada

new Clazz1(`lo que sea`).method(); // this.attribute: lo que sea
new Clazz1(`lo que sea`).method2(); // this.attribute arrow in prototipe: lo que sea


console.writeln(`\nCon una clase`);
class Clazz2 {

    constructor(parameter) {
        this.attribute = parameter;
    }

    method() {
        console.writeln(`this.attribute: ${this.attribute}`);
    }    
}

object = new Clazz2("nada");
object.method(); // this.attribute: nada

new Clazz2(`lo que sea`).method(); // this.attribute: lo que sea

console.writeln(`\nFunción inicializadora con this`)
function initObject(parameter) {
    return {
        attribute: parameter,
        method() {
            console.writeln(`this.attribute: ${this.attribute}`);
        }
    }
}

object = initObject("base");
object.method(); // this.attribute: base
initObject("tapa").method(); // this.attribute: tapa