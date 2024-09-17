const { Console } = require("console-mpds");

const console = new Console();

function createObject(parameter) {    
    
    return {
        publicAttributeX: parameter,
        publicAttributeY: 0,

        //NO FUNCIONA -> this nomès té sentit dins dels mètodes
        //test: this.publicAttributeX + "_test",

        // amb 'this' ja no cal declarar una variable que guardi la referencia a l'objecte creat.
        publicInstanceMethod: function () {
            privateFunction(this);
            console.writeln(`publicAttributeX: ${this.publicAttributeX} - publicAttributeY: ${this.publicAttributeY}`);
            //console.writeln(`Test restult: ${this.test}`);
        }
    };

    function privateFunction(object) {
        object.publicAttributeX++;
        object.publicAttributeY++;
    }
    
}

const object = createObject(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
console.writeln(`object.publicAttributeX: ${object.publicAttributeX}`);
object.publicInstanceMethod();
