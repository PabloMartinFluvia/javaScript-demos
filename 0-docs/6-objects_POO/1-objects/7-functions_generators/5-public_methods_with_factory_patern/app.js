const { Console } = require("console-mpds");

const console = new Console();

function createObject(parameter) {
    // un objecte amb tot lo privat
    let that = {
        privateAttributeX: parameter,
        privateAttributeY: 0,
        privateMethod: function () {
            this.privateAttributeX++;
            this.privateAttributeY++;
        }
    }
    return {
        publicInstanceMethod: function () {
            that.privateMethod();
            console.writeln(`privateAttributeX: ${that.privateAttributeX} - privateAttributeY: ${that.privateAttributeY}`);
        }
    }
};

const object = createObject(1);
object.publicInstanceMethod();
// Ara aquesta sentencia està donant d'alta l'atribut (ja que l'objecte no tenia aquesta propietat)
object.privateAttributeX = 666;
console.writeln(`object.privateAttributeX: ${object.privateAttributeX}`); // 666
// Però al llançar el missatge la funció segueix lligada als valors guardats en el context de la funció creadora
object.publicInstanceMethod(); // privateAttributeX: 3 - privateAttributeY: 2
