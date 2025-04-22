const { Console } = require("console-mpds");

const console = new Console();

function Base(parameter) {
    this.attribute = parameter;
}

Base.prototype.methodA = function () {
    console.writeln(`Base - A: attribute: ${this.attribute}`);
};

Base.prototype.methodB = function () {
    console.writeln(`Base - B: attribute: ${this.attribute}`);
};

Base.prototype.methodC = function () {
    console.writeln(`Base - C: attribute: ${this.attribute}`);
};


function Derived(parameter, other) {
    // equival a fer un new de Base, pero sent this la direcció de l'objecte creat al fer new Derived
    Base.call(this, parameter); 
    this.other = other;
}

// copiar el prototip de Base en el prototip de derived
Derived.prototype = Object.create(Base.prototype);
// 'tornar a recordar' que el constructor és el definit per la funció constructora Derived
// ja que al copiar el prototip en el pas anterior ha fet que el constructor sigui el de Base
Derived.prototype.constructor = Derived;

// tunejar un mètode -> 'machacar el mètode, i accedir al "super" a través del prototip de la base.
Derived.prototype.methodB = function () {
    console.writeln(`Derived - B: other: ${this.other}`);
    Base.prototype.methodB.call(this);
};

// sobreescriure completament -> "machacar el mètode que penja del prototip"
Derived.prototype.methodC = function () {
    console.writeln(`Derived - C: other: ${this.other}`);
};

// afegir un mètode -> lo estandard
Derived.prototype.methodD = function () {
    console.writeln(`Derived - D: other: ${this.other}`);
};

let object = new Base(`base`);
object.methodA();
object.methodB();
object.methodC();
console.writeln(object instanceof Base);
console.writeln(object instanceof Derived);

object = new Derived(`derived`, `specializations`);
object.methodA();
object.methodB();
object.methodC();
object.methodD();
console.writeln(object instanceof Base);
console.writeln(object instanceof Derived);
