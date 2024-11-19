const { Console } = require("console-mpds");

const console = new Console();

function Clazz(parameter) {
    this.publicAttributeX = parameter;
    this.publicAttributeY = 0;
}

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
