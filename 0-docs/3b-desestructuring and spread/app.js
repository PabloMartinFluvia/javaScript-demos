const { Console } = require("console-mpds");

/*
La desestructuració d'un array conjuntament amb ... :
cada variable dins del patró  agafa el valor corresponent del array 
la variable última amb el ... tindrá el valor d'un array amb els elements del array pendents de desestructurar
*/

const consoleMPDS = new Console();
let [head, ...rest] = [1,2,3,4,5];
consoleMPDS.writeln(head); // 1 
console.log(rest); // [2, 3, 4, 5]      // 2,3,4,5 //console mpds no escriu el []

/*
En la desestructuració només pot haver-hi UNA variable amb ...
*/
//let [a, ...b, ...c] = [1,2,3,4,5]; // SyntaxError: Rest element must be last element

/*
les variables ja declarades ja existeixen, i es poden usar com a variables normals
*/

head = null;
rest = null;
consoleMPDS.writeln(head); // null
consoleMPDS.writeln(rest); // null 
let elem1 = null;
let elem2 = null;
consoleMPDS.writeln(elem1); // null
consoleMPDS.writeln(elem2); // null

/*
Així que es pot desestructurar arrays amb variables ja declarades previement
*/

[head, ...rest] = ["a", "e", "i", "o", "u"];
consoleMPDS.writeln(head); // a 
console.log(rest); // [ 'e', 'i', 'o', 'u' ]        // e,i,o,u //console mpds no escriu el []

[elem1, ...elem2] = [1, 2, 3];
consoleMPDS.writeln(elem1); // 1
console.log(elem2); // [2, 3]       //2,3 //console mpds no escriu el []

/*
La expressió a desestructurar ha de ser un array
*/
// [head, ...rest] = null; // TypeError: object null is not iterable 

/*
Si el patró inclou més variables que elements dins del array:
    pren el valor undefined.
    Si la variable s'ha usat amb el ... pren el valor d'array buit []
*/

[head, ...rest] = [true];
consoleMPDS.writeln(head); // true
console.log(rest); // []       // //console mpds no escriu el []

[head, ...rest] = [];
console.log(head); // undefined     // //console mpds no escriu el undefined
console.log(rest); // []        // //console mpds no escriu el []

/*
Es pot fer desestructuracions d'arrays de N-dimensions:
*/

let [[first, second, ...internTail], ...tail] = [[1,2,'a','b'],[3],4];
consoleMPDS.writeln(first); // 1
consoleMPDS.writeln(second); // 2
console.log(internTail); // ['a', 'b']      // a,b //console mpds no escriu el []
console.log(tail); // [ [ 3 ], 4 ]      // 3,4 //console mpds no escriu el []

//[[first, second, ...internTail], ...tail] = [1, 2]; // TypeError: number 1 is not iterable

[[first, second, ...internTail], ...tail] = [[1], 2];
consoleMPDS.writeln(first); 
console.log(second); // undefined       // //console mpds no escriu el undefined
console.log(internTail); // []      //  //console mpds no escriu el []
console.log(tail); // [ 2 ]     // 2 //console mpds no escriu el []

