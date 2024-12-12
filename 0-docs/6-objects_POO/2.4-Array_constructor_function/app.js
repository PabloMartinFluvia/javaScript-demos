const { Console } = require("console-mpds");

const consoleMPDS = new Console();
let array = [];

consoleMPDS.writeln(`Añadir al final del array con push:`)
array.push("escondido");
array.push("otro");
array.push(false);
consoleMPDS.writeln(array); // escondido,otro,false

consoleMPDS.writeln(`\nBuscar el primer elemento que cumpla el criterio:`)
consoleMPDS.writeln(array.find(x => x === "escondido")); // escondido

consoleMPDS.writeln(`\nElimilar el último elemento:`)
consoleMPDS.writeln(array.pop()); // false
consoleMPDS.writeln(array.length); // 2
consoleMPDS.writeln(array.pop()); // otro
consoleMPDS.writeln(array.length); // 1
consoleMPDS.writeln(array.pop()); // escondido
consoleMPDS.writeln(array); // 
consoleMPDS.writeln(array.find(x => x === "escondido")); // 

let tt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
consoleMPDS.writeln(`\nSaber el índice que ocupa un determinado valor:`)
consoleMPDS.writeln(tt.indexOf(7)); // 6

consoleMPDS.writeln(`\nEliminar del array elementos (indicando el startIndex y la cantidad). Devuelve el 'subarray' eliminado:`)
consoleMPDS.writeln(tt.splice(7, 2)); // 8,9
consoleMPDS.writeln(tt); // 1,2,3,4,5,6,7,10
consoleMPDS.writeln(tt.find(x => x > 5)); // 6
consoleMPDS.writeln(tt.map(x => x > 5)); // false,false,false,false,false,true,true,true

consoleMPDS.writeln()
let t = [1, 2, 3, 4];
consoleMPDS.writeln(t); // 1,2,3,4
consoleMPDS.writeln(`Mapear:`)
consoleMPDS.writeln(t.map(value => value ** 2));  // 1,4,9,16

consoleMPDS.writeln(`\nFor each:`)
// en documentació el missatge es crida a la variable 'array', xo no té sentit, ja que el seu length és 0
let test = [1, 2, 3, 4];
test.forEach((value, index, array) => array[index] = value + 1);
consoleMPDS.writeln(test);  // 2,3,4,5
test.forEach(value => value = 1000000);
consoleMPDS.writeln(`Failed: ${test}`);  // 2,3,4,5 
// NO funciona, si vui modificar tots els valors aplicant la mateixa funció puc: 
// A) com en el forEach previ: assignant el nou valor a la posició del array
// B) fent un map, i assignant el array retornat al array previ

consoleMPDS.writeln(`\nIndexOf:`)
array = ['A', 'B', 'C'];
consoleMPDS.writeln(array.indexOf('B')); // 1
consoleMPDS.writeln(`\nIncludes with primitives:`)
array.push(3);
consoleMPDS.writeln(`${array.includes(3)}, ${array.includes('C')}, ${array.includes('c')}`); // true, true, false
consoleMPDS.writeln(`\nIncludes with objects:`)
function Coordinate (row, column) {
    this.row = row;
    this.column = column;
}
let coordinates = [new Coordinate(0,0), new Coordinate(1, 1), new Coordinate(-1, -1)];
coordinates.forEach((coordinate, index) => array[index] = coordinate);
consoleMPDS.writeln(array.includes(coordinates[1])); // true
//consoleMPDS.writeln(array.contains(coordinates[1])); // ERROR
const coordinateEqualsNOTIdentical = new Coordinate(1, 1)
consoleMPDS.writeln(`${array.includes(coordinateEqualsNOTIdentical)}, due array sotres references`); // false
Coordinate.prototype.equals = function(other) {
    return this.row === other.row && this.column === other.column;
}
consoleMPDS.writeln(`${array.includes(coordinateEqualsNOTIdentical)}, due includes don't check equals method`); // false

consoleMPDS.writeln(`\nSaber si incluye un objeto igual (pero no identico) usando 'some'`);
consoleMPDS.writeln(`${array.some(array => array === coordinateEqualsNOTIdentical)}`); // false
consoleMPDS.writeln(`${array.some(array => array.equals(coordinateEqualsNOTIdentical))}`); // true