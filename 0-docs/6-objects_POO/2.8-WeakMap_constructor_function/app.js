const { Console } = require("console-mpds");

const console = new Console();
let weakMap = new WeakMap();

// ERROR EN LA DOCUMENTACIÓ, SEGONS LO OFICIAL SON LES KEYS LES QUE HAN DE SER OBJECTES SI O SI
let array = [1, true, 'cadena de caracteres']; 
weakMap.set("a", array);
weakMap.set("b", array);
weakMap.set("c", [1, true, 'cadena de caracteres']);
let object = {a: 1, b: 2};
weakMap.add("d", object);
weakMap.add("e", {a: 1, b: 2});
console.writeln(weakMap.has(array)); // true
console.writeln(weakMap.has([1, true, 'cadena de caracteres'])); // false
console.writeln(weakMap.has(object)); // true
console.writeln(weakMap.has({a: 1, b: 2})); // false

array = null;
object = null;
console.writeln(weakMap.size); // 0
console.writeln(weakMap.has(array)); // false
console.writeln(weakMap.has([1, true, 'cadena de caracteres'])); // false
console.writeln(weakMap.has(object)); // false
console.writeln(weakMap.has({a: 1, b: 2})); // false
