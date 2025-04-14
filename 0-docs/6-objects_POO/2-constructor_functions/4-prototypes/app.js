const { Console } = require("console-mpds");

const console = new Console();

function Clazz(parameter) {
    this.publicAttributeX = parameter;
    this.publicAttributeY = 0;
}

/*
Donant d'alta els mètodes públics en el prototip permet que tots els objectes inicialitzats per la funció
constructora emplein les mateixes funcions.
    Cal que els atributs siguin públics (per a poder mencionar-los en els mètodes declarats en el prototip).
    No es pot implementar mètodes privats.
*/

Clazz.prototype.publicInstanceMethod = function () {
    privateFunction(this);
    console.writeln(`publicAttributeX: ${this.publicAttributeX} - publicAttributeY: ${this.publicAttributeY}`);
    console.writeln(`publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
    
    function privateFunction(object) {
        object.publicAttributeX++;
        object.publicAttributeY++;
    }
}

Clazz.publicClazzAttribute = "global";
Clazz.publicClazzMethod = function(value){
    Clazz.publicClazzAttribute = value;
}

const object = new Clazz(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
console.writeln(`object.publicAttributeX: ${object.publicAttributeX}`);
console.writeln(`Clazz.publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
object.publicInstanceMethod();
Clazz.publicClazzMethod("nuevo");
object.publicInstanceMethod();

Clazz.prototype.atributeInPrototipe = "atributeInPrototipe";
console.writeln(`object.atributeInPrototipe: ${object.atributeInPrototipe}`);



console.writeln(`\nDins dels prototips els mètodes NO es poden declarar coma funcions fletxa:`)
Clazz.prototype.arrowMethod = () => {    
    console.writeln(`publicAttributeX: ${this.publicAttributeX} - publicAttributeY: ${this.publicAttributeY}`);       
}

let other = new Clazz(1);
other.arrowMethod();