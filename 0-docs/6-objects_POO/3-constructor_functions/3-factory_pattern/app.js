const { Console } = require("console-mpds");

const console = new Console();

function Clazz(privateAttributeX) {
    /*
     cada cop que l'operador new crida a la funció constructora ES DONEN D'ALTA ELS MEMEBRES DE NEW 
     (i tmb els membres privats als que es facin referencia mitjançant clousures), ja que cada cop que
     es crida a la funció constructora ES CREA UN NOU CONTEXT
    */

    const that = {
        privateAttributeX: privateAttributeX,
        privateAttributeY: 0,

        privateFunction() {
            this.privateAttributeX++;
            this.privateAttributeY++;
        }
    };

    this.publicInstanceMethod = function () {
        that.privateFunction();
        console.writeln(`privateAttributeX: ${that.privateAttributeX} - privateAttributeY: ${that.privateAttributeY}`);
        console.writeln(`publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
    }
}

Clazz.publicClazzAttribute = "global";
Clazz.publicClazzMethod = function (value) {
    Clazz.publicClazzAttribute = value;
}

const object = new Clazz(1);
object.publicInstanceMethod(); // public atributX es 2
object.publicAttributeX = 666; // dona d'alta l'atribut en l'objecte this, pero el mètode de l'objecte segueix fent referencia a la clousure
console.writeln(`object.publicAttributeX: ${object.publicAttributeX}`);
console.writeln(`Clazz.publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
object.publicInstanceMethod(); // public atributX es 3
Clazz.publicClazzMethod("nuevo");
object.publicInstanceMethod(); // nou valor de la propietat de classe
