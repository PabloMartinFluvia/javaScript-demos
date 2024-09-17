const { Console } = require("console-mpds");

const console = new Console();

console.writeln("Objetos sin comportamiento (solo datos).\nLos mètodos se \
han implementado como funciones libres que reciben objetos (y a su vez pueden tener funciones locales)");

const o = createObject(7); // property inicializada con 7
method(o); 
/*
llama a la función privada que incrementa en 1 las propiedades // property 8 / other 1
se ejecuta sentencia mostrar por pantalla las porpiedades // property: 8 - other: 1
*/

function createObject(valueProperty) {
  return {
    property: valueProperty,
    other: 0
  };
}

function method(object) {
  privateFunction(object); // llamada a una función local
  console.writeln(`property: ${object.property} - other: ${object.other}`);
  
  function privateFunction(object){
    object.other++; 
    object.property++;
  }

}



