const { Console } = require("console-mpds");

const consoleMPDS = new Console();

/*
Acces als elements indextant
*/
let array = [1,2,3,4,5];
consoleMPDS.writeln(typeof array); // object
consoleMPDS.writeln(array[0]); // 1
consoleMPDS.writeln(typeof array[0]); // number
consoleMPDS.writeln(array[4]); // 5
consoleMPDS.writeln(typeof array[4]); // number

consoleMPDS.writeln();

/*
Comprovació que es poden usar expressions en els indexs, i que s'aplica coerció válida si valor es String
    Nota: per a més detalls veure updateElements/app.js
*/
console.log(array[false]); // undefined
console.log(array[true]); // undefined
console.log(array['a']); // undefined
consoleMPDS.writeln(array['1']); // 2
consoleMPDS.writeln(array[1+1]); // 3


consoleMPDS.writeln();

/*
Acceddir a elements fora del array -> undefined
*/
console.log(array[array.length]); // undefined     // //console mpds no escriu el undefined
consoleMPDS.writeln(typeof array[array.length]); // undefined
console.log(array[array.length + 1000]); // undefined     // //console mpds no escriu el undefined
// Javascript permet indexar amb NEGATIUS WTF
console.log(array[-1]); // undefined     // //console mpds no escriu el undefined

consoleMPDS.writeln();

/*
Accedir a elements en arrays de N dimensions
*/
consoleMPDS.writeln([[`a`, `b`, `c`],[1,2],[true]][1][1]); // 2
consoleMPDS.writeln(typeof [[`a`, `b`, `c`],[1,2],[true]][1][1]); // number
console.log([[`a`, `b`, `c`],[1,2],[true]][1]); // [ 1, 2 ]         // 1,2 //console mpds no escriu el []
consoleMPDS.writeln(typeof [[`a`, `b`, `c`],[1,2],[true]][1]); // object

consoleMPDS.writeln();

/*
Arrays + for
*/
for(let i = 0; i < [1,2,3].length; i++){
    consoleMPDS.write(`${[1,2,3][i]}, `); // 1,2,3,
}
consoleMPDS.writeln();

consoleMPDS.writeln();

/*
Operador for_of
*/
for(let item of [1,2,3]){
    consoleMPDS.write(`${item}, `); // 1,2,3,
}
consoleMPDS.writeln();

consoleMPDS.writeln();

/*
Operador for_of va des del index 0 fins al lentgh - 1
    -> Si hi han elements en indexs negatius NO els agafa
*/
array = [1, 2, 3];
console.log(array);
array[-5] = -50;                                                 
console.log(array); // [ 1, 2, 3, '-5': -50 ]       
                    // 1,2,3 //console mpds no escriu el [] ni els indexats en negatiu
for (let item of array){
    consoleMPDS.write(`${item}, `); // 1,2,3,
}
consoleMPDS.writeln();

consoleMPDS.writeln();

/*
propietat .length = index del ultim element amb valor assignat + 1
    elements finals amb valor undefined es tenen en compte
    elements en indexs negatius s'ignoren !!!
    
*/

array = [1, undefined , 2 , undefined, undefined];
consoleMPDS.writeln(array.length); // 5
array[-5] = 'valor en index negatiu';
console.log(array); // [ 1, undefined, 2, undefined, undefined, '-5': 'valor en index negatiu' ]
consoleMPDS.writeln(array.length); // 5
