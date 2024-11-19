const { Console } = require("console-mpds");

const console = new Console();

function Clazz(privateAttributeX) {
    let privateAttributeY = 0;
    this.publicInstanceMethod = function () {
            privateFunction();
            console.writeln(`privateAttributeX: ${privateAttributeX} - privateAttributeY: ${privateAttributeY}`);
            console.writeln(`publicClazzAttribute: ${Clazz.publicClazzAttribute}`);
        }

    function privateFunction() {
        privateAttributeX++;
        privateAttributeY++;
    }
}

Clazz.publicClazzAttribute = "global";
Clazz.publicClazzMethod = function(value){
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
