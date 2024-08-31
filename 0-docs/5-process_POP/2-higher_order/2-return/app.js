const { Console } = require("console-mpds");

const console = new Console();
function incrementSelector(direction) {
  if (direction){
    return increment;
  } 
  return decrement;
  // está retornant el identificador d'una funció -> direcció de memoria on está guardada la declaració de la funció

  function increment(value) {
    return value + 1;
  }

  function decrement(value) {
    return value - 1;
  }
};

let operation = incrementSelector(true); // la funció 'increment'
console.writeln(`${operation(1)}`); // 2
operation = incrementSelector(false); // la funció 'decrement'
console.writeln(`${operation(1)}`); // 0

/*
Com que s'asigna a operation una funció declarada durant el temps d'execució d'incrementSelector
-> aleshores el context d'incrementSelector NO s'allibera un cop finalitza la crida, ja que 
operation fa referencia a una funció declarada durant aquell context.
*/

console.writeln(operation = incrementSelector(true));
/* Como al asignar se devuelve el valor asignado -> operation hace referencia a la función 'increment'
  
  function increment(value) {
    return value + 1;
  }

*/
