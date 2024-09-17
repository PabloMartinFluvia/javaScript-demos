const { Console } = require("console-mpds");

const console = new Console();

function createObject(privateAttributeX) {
  let privateAttributeY = 0;

  //Clousure <-> al retornar un objecte que té una funció que fa referencia a declaracions del àmbit superior
  return {
    publicInstanceMethod: function () {
      privateFunction();
      console.writeln(`privateAttributeX: ${privateAttributeX} - privateAttributeY: ${privateAttributeY}`);
    }
  };

  // La funció privada ja no necessita rebre l'objecte.
  // Com que el context de la funció createObject persistirà -> pot mencionar els identificadors directament
  function privateFunction() {
    privateAttributeX++;
    privateAttributeY++;
  }
}

const object = createObject(1);
object.publicInstanceMethod(); // privateAttributeX: 2 - privateAttributeY: 1

// Ara aquesta sentencia està donant d'alta l'atribut (ja que l'objecte no tenia aquesta propietat)
object.privateAttributeX = 666;
console.writeln(`object.privateAttributeX: ${object.privateAttributeX}`); // 666
// Però al llançar el missatge la funció segueix lligada als valors guardats en el context de la funció creadora
object.publicInstanceMethod(); // privateAttributeX: 3 - privateAttributeY: 2
