const { Console } = require("console-mpds");

const console = new Console();

let map = new Map()
map.set('x', {a: 1111, b: 2222});
console.writeln(map.has('x')); // true
console.writeln(map.get('y')) // undefined, ja que no hi ha key 'y'
map.set('y', {a: 3333, b: 4444});
console.writeln(map.get('y')); // [object Object]
console.writeln(map.delete('z')); // false
console.writeln(map.delete('y')) // true
console.writeln(map.size) // 1, la key 'x'

console.writeln(`\nInicialitzar un Map a partir d'un iterable: array de arrays amb 2 valors`)
map = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.writeln(`\nFor each treballa amb lels K-V : (value, key, map) => {some function}`);
map.forEach((value, key, map) => 
    { console.writeln(`map.get('${key}') = ${value}`) }); 
// map.get('a') = 1 / map.get('b') = 2 / map.get('c') = 3
console.writeln(`Keys:`);
for (let item of map.keys()) {
  console.writeln(item); // a / b / c
}
console.writeln(`Values:`);
for (let item of map.values()) {
  console.writeln(item); // 1 / 2 / 3
}
console.writeln(`Entries:`);
for (let [key, value] of map.entries()) {
  console.writeln(`${key}, ${value}`); // a, 1 / b, 2 / c, 3
}

console.writeln(`\nNi idiea de inicialitzar maps amb objectes:`);
let object = {key1: 1};
//map = new Map(object); // error, degut a que object no es iterable
// aquest objecte, tot hi tenir només una propietat inicialitzada, no es pot transformar a K-V
map = new Map([object]); 
console.writeln(map.size); // 1
for (let [key, value] of map.entries()) {
    console.writeln(`${key}, ${value}`); // undefined, undefined
}

object = {key: "a", value: 1}; // tampoc funciona
map = new Map([object]); 
console.writeln(map.size); // 1
for (let [key, value] of map.entries()) {
    console.writeln(`${key}, ${value}`); // undefined, undefined
}
