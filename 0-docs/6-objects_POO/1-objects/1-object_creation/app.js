const { Console } = require("console-mpds");

const consoleMpds = new Console();
let object = {};
consoleMpds.writeln(object); // [object Object]
console.log(object); // {}
consoleMpds.writeln(typeof object); // object
for(let property in object){
    consoleMpds.writeln(property); //
    consoleMpds.writeln(typeof property); //
}

consoleMpds.writeln("\nusar new Object està desaconsellat, pero funciona igualment:")
object = new Object();
consoleMpds.writeln(object); // [object Object]
console.log(object); // {}
consoleMpds.writeln(typeof object); // object
for(let property in object){
    consoleMpds.writeln(property); //
    consoleMpds.writeln(typeof property); //
}

consoleMpds.writeln("\nDemo de sentencia for-in amb un array");
const array = ['a', 'b', 'c'];
for (let index in array) {
    consoleMpds.writeln(`Index: ${index}`); // 0   1   2
    consoleMpds.writeln(`Value: ${array[index]}`);  //  a   b   c
}

