const { Console } = require("console-mpds");

const console = new Console();
let weakSet = new WeakSet();

console.writeln('Un weak set només pot tenir objectes')
// weakSet.add(1); // error
// weakSet.add(true); // error
// weakSet.add("a"); // error
console.writeln(weakSet.has(1)); // false
console.writeln(weakSet.has(true)); // false
console.writeln(weakSet.has("a")); // false

console.writeln();
let array = [1, true, 'cadena de caracteres']; 
weakSet.add(array);
weakSet.add(array); // sense efecte
weakSet.add([1, true, 'cadena de caracteres']);
let object = {a: 1, b: 2};
weakSet.add(object);
weakSet.add(object); // sense efecte
weakSet.add({a: 1, b: 2});
console.writeln(weakSet.has(array)); // true
console.writeln(weakSet.has([1, true, 'cadena de caracteres'])); // false
console.writeln(weakSet.has(object)); // true
console.writeln(weakSet.has({a: 1, b: 2})); // false


console.writeln(`\nUn weakSet no se li pot preguntar el tamany`)
console.writeln(typeof weakSet.size); // undefined
console.writeln(typeof weakSet.length); // undefined
console.writeln(weakSet.size); // 

console.writeln(`\nQuan es deixa de guardar les referencies fora del weakSet -> els elements s'eliminen`)
let segonaVariable = array;
array = [null, undefined];
object = {a: 23, prova: false};
console.writeln(weakSet.has(array)); // false, ja que array ara fa referencia a un altre array
console.writeln(weakSet.has(segonaVariable)); // true, 
console.writeln(weakSet.has(object)); // false, ja que object ara fa referencia a un altre object
segonaVariable = null;
console.writeln(weakSet.has(array)); // false
console.writeln(weakSet.has(segonaVariable)); // false

