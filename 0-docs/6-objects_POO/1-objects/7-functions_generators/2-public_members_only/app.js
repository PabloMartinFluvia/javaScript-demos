const { Console } = require("console-mpds");

const consoleMPDS = new Console();

function createObject(parameter) {
    let object = {
        publicAttributeX: parameter,
        publicAttributeY: 0,

        // Obs: Dins de la declaració de l’objecte es pot mencionar l’identificador -> clousure?
        publicInstanceMethod: function () {
            privateFunction(object);
            consoleMPDS.writeln(`publicAttributeX: ${object.publicAttributeX} - publicAttributeY: ${object.publicAttributeY}`);
        },

        // adició meva
        setObject: function(newObject) {
            object = newObject;            
        },

        setPrivateFunction: function(arrowFuncion) {
            privateFunction = arrowFuncion;
        }
    };
    return object;

    function privateFunction(object) {
        object.publicAttributeX++;
        object.publicAttributeY++;
    }
}

const object = createObject(1);
object.publicInstanceMethod();
object.publicAttributeX = 666;
consoleMPDS.writeln(`object.publicAttributeX: ${object.publicAttributeX}`);
object.publicInstanceMethod();

consoleMPDS.writeln("\n Test meu");
object.setObject(
    {
        publicAttributeX: 100,
        publicAttributeY: 200,
        newAtribute: "cadena",

        newMethod: function (num) {
            const result = num + 1;
        }
    }
);

/*
Error: a fer sets s'han reemplaçat les variables locals (el que accedeix la funció publicMethod)
Però en l'àmbit actual la variable object fa referencia a l'objecte retornat inicialment.
És el métode 'publicInstanceMethod' el que canviará, ja que després del set les variables a les que 
accedeix són diferents
*/
//console.log(object.newAtribute); // undefined
// object.newMethod(1); // error
consoleMPDS.writeln(`${object.publicAttributeX}`); // 666
// l'objecte d'aquest ámbit té 666, peró el seu métode public manipula els atributs de l'objecte setejat
object.publicInstanceMethod(); // 101 - 201
object.setPrivateFunction(object => {object.publicAttributeX--; object.publicAttributeY--});
object.publicInstanceMethod(); // 100 - 200