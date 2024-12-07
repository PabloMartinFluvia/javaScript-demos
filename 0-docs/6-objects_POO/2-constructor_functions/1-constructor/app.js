const { Console } = require("console-mpds");

const console = new Console();

function Clazz(parameter) {
    /*
     cada cop que l'operador new crida a la funció constructora ES DONEN D'ALTA ELS MEMEBRES DE NEW 
     (i tmb els membres privats als que es facin referencia mitjançant clousures), ja que cada cop que
     es crida a la funció constructora ES CREA UN NOU CONTEXT
    */

    this.publicAttributeX = parameter;
    this.publicAttributeY = 0;
    this.publicInstanceMethod = function () {
            privateFunction(this);
            console.writeln(`publicAttributeX: ${this.publicAttributeX} - publicAttributeY: ${this.publicAttributeY}`);
            console.writeln(`publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
        }

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
object.publicInstanceMethod(); //  ara publicAtributX es 667
Clazz.publicClazzMethod("nuevo");
object.publicInstanceMethod(); // ara atributDeClasse es 'nuevo'

