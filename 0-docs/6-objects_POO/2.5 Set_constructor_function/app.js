const { Console } = require("console-mpds");

const console = new Console();

let set = new Set();

console.writeln('Afegir valors al Set');
set.add(1);
set.add(1); // sense efecte!
set.add(true);
set.add('cadena de caracteres');
set.add([1, true, 'cadena de caracteres']); // afegir un array declarant eñs valors
const array = [1, true, 'cadena de caracteres']; 
set.add(array); // afegir un array passant la referencia
set.add(array); // sense efecte!
set.add({a: 1, b: 2}); // afegir un object declarant eñs valors
const object = {a: 1, b: 2};
set.add(object); // afegir un object passant la referencia
set.add(object); // sense efecte!
console.writeln(set.size); // 7
for (let item of set) {
  console.writeln(item); // 1 / true / cadena de caracteres / 1,true,cadena de caracteres / 1,true,cadena de caracteres / [object Object] / [object Object]
} 
set.add({a: 1, b: 2}); // amb efecte! S'afegeix una referencia a un nou objecte
console.writeln(set.size); // 8 (7 previs + 1 nous)

console.writeln('\nConsultar si el set té uns valors:');
console.writeln(set.has(0)); // false
console.writeln(set.has(2/2)); // true
console.writeln(set.has(true)); // true
console.writeln(set.has('cadena de caracteres')); // true
console.writeln(set.has([1, true, 'cadena de caracteres'])); // false, ja que li estic proporcionant nova direcció
console.writeln(set.has(array)); // true, ja que es proporciona la referencia usada al afegirlo
console.writeln(set.has({a: 1, b: 2})); // false, ja que li estic proporcionant nova direcció
console.writeln(set.has(object)); // true, ja que es proporciona la referencia usada al afegirlo

console.writeln('\nEliminar valors del Set');
set = new Set([1, 1, true, 'cadena de caracteres', array, {a: 1, b: 2}, object]); // constructor amb un iterable
console.writeln(set.size); // 6
set.delete(1);
set.delete(true);
set.delete('cadena de caracteres');
set.delete(array);
set.delete(object);
console.writeln(set.size); // 1
for (let item of set) {
  console.writeln(item); // [object Object]
} 
console.writeln(`S'ha quedat l'objecte que s'ha afegit proporcionant els valors literals.
    Com que no he guardat abans la referencia ara no es pot demanar que s'elimini.`);
set.delete({a: 1, b: 2});
console.writeln(set.size); // 1, ja que no s'ha pogut eliminar

console.writeln('\nConsultar si el set té uns valors:');
console.writeln(set.has(0)); // false
console.writeln(set.has(2/2)); // false
console.writeln(set.has(true)); // false
console.writeln(set.has('cadena de caracteres')); // false
console.writeln(set.has(array)); // false
console.writeln(set.has([1, true, 'cadena de caracteres'])); // false
console.writeln(set.has(object)); // false
console.writeln(set.has({a: 1, b: 2})); // false, ja que li estic proporcionant nova direcció

console.writeln(`\nEliminar tot:`);
set.clear();
console.writeln(set.size); // 0
for (let item of set) {
  console.writeln(item); //
} 

console.writeln(`\nMètodes per fer-lo semplant a un Map`);
set = new Set(['a','b','c']);
set.forEach(item => console.writeln(item)); // a / b / c
const keysIterator = set.keys();
console.writeln(Array.isArray(keysIterator)); // false 
for (let item of keysIterator) {
  console.writeln(item); // a / b / c
} 
const valuesIterator = set.values();
console.writeln(Array.isArray(valuesIterator)); // false
for (let item of valuesIterator) {
  console.writeln(item); // a / b / c
} 
for (let [key, value] of set.entries()) {
  console.writeln(`${key}, ${value}`); // a, a / b, b / c, c
} 

console.writeln(`\nSet to Array`)
const arrayTest = [...set]; // desestructurar el set + els diferents elements dins del valor del array
for (let item of arrayTest) {
    console.writeln(item); // a / b / c
};
for(let item of Array.from(set)) {
    console.writeln(item); // a / b / c
}