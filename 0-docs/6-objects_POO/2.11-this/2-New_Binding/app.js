const { Console } = require("console-mpds");

const consoleMPDS = new Console();

let object = new function(value){
  this.attribute = value;
}(`lo que sea`); // invocació d'una funció (constructora) "al vuelo (just després de declarar-la"

consoleMPDS.writeln(`object.attribute: ${object.attribute}`); // object.attribute: lo que sea

function Clazz(value){
  this.attribute = value;
}
consoleMPDS.writeln(`object.attribute: ${new Clazz(`nada`).attribute}`); // object.attribute: nada

consoleMPDS.writeln(`\nCridar a una funció constructora SENSE el NEW la converteix en una funció sense context -> enllaç per defecte`)
function Test(value) {

    console.log(`${this}`);
  this.attribute = value;  
  console.log(`${this.attribute}`);
}
consoleMPDS.writeln(`object.attribute: ${new Test(`test`).attribute}`); // [object Object] // test // object.attribute: test 

consoleMPDS.writeln();
Test('no context'); // [object global] // no context
// el this apunta a un object global(?), el cual puc donar-li d'alta propietats
// al no obtenir cap objecte (no hi ha el new per a retornar-lo), aquest this es perdrà