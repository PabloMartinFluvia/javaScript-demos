const { Console } = require("console-mpds");

const console = new Console();
function incrementGenerator(initial) {
  let counter = initial;
  return next;

  function next() {
    counter++;
    return counter
  }
}

const increnentFrom0 = incrementGenerator(0);
console.writeln(`${increnentFrom0()}`); // 1
console.writeln(`${increnentFrom0()}`); // 2
console.writeln(`${increnentFrom0()}`); // 3
console.writeln();
const increnentFrom1 = incrementGenerator(1);
console.writeln(`${increnentFrom1()}`); // 2
console.writeln(`${increnentFrom1()}`); // 3
console.writeln(`${increnentFrom1()}`); // 4

console.writeln('\nComprovar que la informació ha perdurat:');
console.writeln(`${increnentFrom0()}`); // 4
console.writeln(`${increnentFrom1()}`); // 5

console.writeln('\nComprovar que puc accedir a la funció retornada quan vulgui:');
let increnentFrom10 = incrementGenerator(10);
let increnentFrom100 = incrementGenerator(100);
let crazyIncrement = increnentFrom10;
console.writeln(`${crazyIncrement()}`); // 11
crazyIncrement = increnentFrom100;
console.writeln(`${crazyIncrement()}`); // 101
crazyIncrement = increnentFrom10;
console.writeln(`${crazyIncrement()}`); // 12
crazyIncrement = increnentFrom100;
console.writeln(`${crazyIncrement()}`); // 102

console.writeln(`\nDemo meva:
Funció d'ordre superior que rep un array de numeros.
La funció clousure retornada incrementa en 1 el valor de la posició indicada i retorna un text amb la informació:`);

function persistArray(array) {
  return increse1;

  function increse1(index) {
    let text = undefined;
    if (-1 < index && index < array.length) {
      const oldValue = array[index];
      array[index] = oldValue + 1;
      text = `Index: ${index}, New value: ${array[index]}`;
    }
    return text;
  }
}

const increase1Units = persistArray([1, 2 ,3]);
const increase1Decimal = persistArray([10, 20, 30]);
console.writeln(increase1Units(0)); // Index: 0, New value: 2
console.writeln(increase1Units(1));  // Index: 1, New value: 3
console.writeln(increase1Units(2)); // Index: 2, New value: 4
console.writeln(increase1Decimal(0)); // Index: 0, New value: 11
console.writeln(increase1Decimal(1)); // Index: 1, New value: 21
console.writeln(increase1Decimal(2)); // Index: 2, New value: 31
console.writeln(increase1Units(0)); // Index: 0, New value: 3
console.writeln(increase1Units(1));  // Index: 1, New value: 4
console.writeln(increase1Units(2));  // Index: 2, New value: 5
console.writeln(increase1Decimal(0)); // Index: 0, New value: 12
console.writeln(increase1Decimal(1)); // Index: 1, New value: 22
console.writeln(increase1Decimal(2)); // Index: 2, New value: 32