const { Console } = require("console-mpds");

const console = new Console();


initClazzPrototype();

const testObject = new Clazz("Robert", "Martin");
testObject.showName(); // Nombre: Robert. Contador: 1
testObject.showSurname(); // Apellido: Martin. Contador: 2
testObject.showName(); // Nombre: Robert. Contador: 3
testObject.showSurname(); // Apellido: Martin. Contador: 4

// función constructora inicializa atributos -> lo hace mediante 'this' -> implica que serán públicos
// podría ponerse al final, ya que al ser nominal se le aplicará hoisting
function Clazz(name, surname) {
    this.name = name;
    this.surname = surname;
    this.count = 0;
}

/*
En lugar de escribir sentencias para dar de alta los métodos públicos en el prototipo (que deberían 
escribir-se ANTES de las sentencias en las que se mencionan dichos métodos) se puede:
    crear una función donde se "configure" el propotipo <-> dar de alta los métodos públicos
    
    al estar todas las sentencias de dar de alta métodos DENTRO DEL CONTEXTO de 
    la función "configuradora/inicializadora", dentro de las declaraciones de los métodos
    se puede mencionar a funciones locales de este contexto (que no se dan de alta en el
    prototipo) y así los métodos públicos del prototipo puden estar ligados, por clousure, a 
    dichas funciones locales (que equivalen a métodos privados de la clase).
*/
function initClazzPrototype() {
    Clazz.prototype.showName = function () {
        privateFunction(this);
        console.writeln(`Nombre: ${this.name}. Contador: ${this.count}`);
    }
    
    Clazz.prototype.showSurname = function () {
        privateFunction(this);
        console.writeln(`Apellido: ${this.surname}. Contador: ${this.count}`);                
    }

    function privateFunction(object) {
        object.count++;
    }
}