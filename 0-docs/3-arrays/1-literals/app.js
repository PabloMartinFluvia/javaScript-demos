const { Console } = require("console-mpds");

const consoleMPDS = new Console();
/*
La classe Console feta per Luís NO treu els [] al mostrar un array per consola,
ja que internament, per a que funcioni, ho ha de evaluar a String
*/

consoleMPDS.writeln([]); // 
//Idem a:
process.stdout.write(`${[]}`); //
//process.stdout.write([]); // Error: argument must be a String
console.log(`${[]}`); //


//Codis interessants els he duplicat amb console.log(), per a veure la estructura.

consoleMPDS.writeln([]); //
console.log([]); // []

consoleMPDS.writeln([1, 2, 3, 4, 5]); // 1,2,3,4,5
console.log([1, 2, 3, 4, 5]); // [ 1, 2, 3, 4, 5 ]

//els literals-array són del tipus object
consoleMPDS.writeln(typeof [1, 2]); // object

consoleMPDS.writeln(["Javascript", "Java", "Scala"]); // Javascript,Java,Scala
consoleMPDS.writeln([false, true]); // false,true

consoleMPDS.writeln([undefined, undefined, undefined]); // ,,
console.log([undefined, undefined, undefined]); // [ undefined, undefined, undefined ]

//Valors dels elements com a resultat d'evaluar una expressió:
let x = "un valor";
consoleMPDS.writeln([7, undefined, x, 5 + 6 > 5 - 6]); // 7,,un valor,true
console.log([7, undefined, x, 5 + 6 > 5 - 6]); // [ 7, undefined, 'un valor', true]

//arrays bidimensionals
consoleMPDS.writeln([
    ["a", "e", "i", "o", "u"],
    ["A", "E", "I", "O", "U"]]); // a,e,i,o,u,A,E,I,O,U
console.log([
    ["a", "e", "i", "o", "u"],
    ["A", "E", "I", "O", "U"]]); // [ [ 'a', 'e', 'i', 'o', 'u' ], [ 'A', 'E', 'I', 'O', 'U' ] ]

consoleMPDS.writeln([
    ["x", " ", "o"],
    ["x", "o", "o"],
    [" ", " ", "x"]
]); // x, ,o,x,o,o, , ,x
console.log([
    ["x", " ", "o"],
    ["x", "o", "o"],
    [" ", " ", "x"]
]); //[ [ 'x', ' ', 'o' ], [ 'x', 'o', 'o' ], [ ' ', ' ', 'x' ] ]

//arrays tridimensionals (i amb diferents tamanys i diferents tipus d'elements)
consoleMPDS.writeln([
    [
        [0, 0, 0],
        [0, 0],
        [0]
    ],
    [
        1, 
        [2],
        [3, 4],
        ['hola', undefined, false]
    ]
]); // 0,0,0,0,0,0,1,2,3,4,'hola,,false
console.log([
    [
        [0, 0, 0],
        [0, 0],
        [0]
    ],
    [
        1,
        [2],
        [3, 4],       
        ['hola', undefined, false]
    ]
]); /* [
          [ [ 0, 0, 0 ], [ 0, 0 ], [ 0 ] ], 
          [ 1, [ 2 ], [ 3, 4 ], ['hola', undefined, false] 
       ]
*/
