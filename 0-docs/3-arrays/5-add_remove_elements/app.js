const { Console } = require("console-mpds");

const consoleMPDS = new Console();
let array = [];
for(let item of array){
    consoleMPDS.write(`${item}, `); // 
}
consoleMPDS.writeln(` with length: ${array.length}`); // with length: 0

array[0] = 10;
for(let item of array){
    consoleMPDS.write(`${item}, `); // 10,  ...
}
consoleMPDS.writeln(` with length: ${array.length}`); // ... with length: 1

array[1] = 11;
for(let item of array){
    consoleMPDS.write(`${item}, `); // 10, 11, ... 
}
consoleMPDS.writeln(` with length: ${array.length}`); // ... with length: 2

array[9] = 99;
for(let item of array){
    consoleMPDS.write(`${item}, `); // 10, 11, undefined, undefined, undefined, undefined, 
                                //undefined, undefined, undefined, 99, ...
}
consoleMPDS.writeln(` with length: ${array.length}`); // ... with length: 10

array[-1] = -10;
for(let item of array){
    consoleMPDS.write(`${item}, `); // 10, 11, undefined, undefined, undefined, undefined, 
                                //undefined, undefined, undefined, 99, ...
} // -> no mostra 'indexs especials'
consoleMPDS.writeln(` with length: ${array.length}`); // ... with length: 10 // no té en compte 'index especials'
consoleMPDS.writeln(array[-1]); // -10

consoleMPDS.writeln("BAJA --------------------------------");

for(let i=-1; i<array.length; i++){
    console.log(array[i]);
}
console.log(array);
consoleMPDS.writeln(`${array} con ${array.length} items`);
delete array[1];
for(let i=-1; i<array.length; i++){
    console.log(array[i]);
}
console.log(array);
consoleMPDS.writeln(`${array} con ${array.length} items`);
delete array[9];
for(let i=-1; i<array.length; i++){
    console.log(array[i]);
}
console.log(array);
consoleMPDS.writeln(`${array} con ${array.length} items`);

consoleMPDS.writeln(`
Eliminación del elemento en índice -1. Bucle for empieza con indice -5`);
delete array[-1];
for(let i=-5; i<array.length; i++){
    console.log(array[i]);
}
console.log(array); // [ 10, <9 empty items> ]
consoleMPDS.writeln(`${array} con ${array.length} items`); // 10,,,,,,,,, con 10 items

array[true] = 'a';
console.log(array); // [ 10, <9 empty items>, true: 'a' ]
delete array[true];
console.log(array); // [ 10, <9 empty items> ]
delete array [100];
console.log(array); // [ 10, <9 empty items> ]

consoleMPDS.writeln(`
Test para ver que length no canvia aunque se elimine el último`);
array = ['a', 'b' , 'c'];
console.log(array); // [ 'a', 'b', 'c' ]
consoleMPDS.writeln(array.length); // 3
delete array[2];
console.log(array); // [ 'a', 'b', <1 empty item> ]
consoleMPDS.writeln(array.length); // 3
array[9] = 99;
console.log(array); // [ 'a', 'b', <7 empty items>, 99 ]
consoleMPDS.writeln(array.length); // 10
delete array[9]; 
console.log(array); // [ 'a', 'b', <8 empty items> ]
consoleMPDS.writeln(array.length); // 10
array = ['a', 'b' , 'c'];
consoleMPDS.writeln(array.length); // 3


