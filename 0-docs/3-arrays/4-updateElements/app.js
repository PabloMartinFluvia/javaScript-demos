const { Console } = require("console-mpds");


const consoleMPDS = new Console();
let array = [1,2,3,4,5];
//console.log(`${array}`); // 1,2,3,4,5 //evaluar un array en una plantilla String -> escriu com mpds

consoleMPDS.writeln(`${array} con ${array.length} items`); // 1,2,3,4,5 con 5 items 
array[0] = 0;
consoleMPDS.writeln(`${array} con ${array.length} items`); // 0,2,3,4,5 con 5 items
array = [`a`, `b`, `c`];
consoleMPDS.writeln(`${array} con ${array.length} items`); // a,b,c con 3 items
array[0] = `_`;
consoleMPDS.writeln(`${array} con ${array.length} items`); // _,b,c con 3 items
array = [];
consoleMPDS.writeln(`${array} con ${array.length} items`); //  con 0 items

consoleMPDS.writeln();

let bidimensional = [
  [1,2,3],
  [],
  [true, false]
];
bidimensional[0] = bidimensional[1];
//consoleMPDS.writeln(bidimensional[0] === bidimensional[1]); // true
bidimensional[1] = bidimensional[2];
bidimensional[2] = [3,2,1];
consoleMPDS.writeln(`${bidimensional} con ${bidimensional.length} items`); // ,true,false,3,2,1 con 3 items

consoleMPDS.writeln();

/*
Tal hi com s'ha dit en 'access_forOf,js', puc emplear Strings com a valors d'indexació 
(i es fará coerció a Number si és vàlid).
Si index no és un número >=0 (o l'equivalent en String) -> Es crea un nou element, que tindrà aquell
valor i aquell 'index'. 
*/
array = [1,2,3,4,5];
console.log(array); // [ 1, 2, 3, 4, 5 ]
array['0'] = 'primer actualitzat';
console.log(array); //[ 'primer actualitzat', 2, 3, 4, 5 ] // coerció OK
array[-1] = -1;
console.log(array); // [ 'primer actualitzat', 2, 3, 4, 5, '-1': -1 ] // Nou element en un 'index especial'
array[true] = 'valor en index true';
console.log(array);
/*[
  'primer actualitzat',
  2,
  3,
  4,
  5,
  '-1': -1,
  true: 'valor en index true'
] // Nou element en un 'index especial'*/
array[NaN] = NaN;
console.log(array);
/*[
  'primer actualitzat',
  2,
  3,
  4,
  5,
  '-1': -1,
  true: 'valor en index true',
  NaN: NaN
] // Nou element en un 'index especial'*/
 array['a'] = 'a';
 console.log(array);
 /* [
  'primer actualitzat',
  2,
  3,
  4,
  5,
  '-1': -1,
  true: 'valor en index true',
  NaN: NaN,
  a: 'a'
] // Nou element en un 'index especial'*/
// Demo de que es pot accedir al element:
consoleMPDS.writeln(`${array['3']}, ${array[true]} y en ${array[NaN]}`); // 4, 'valor en index true' y en NaN
consoleMPDS.writeln(array.length); // 5

let arrayIndiceWTF = ['a', 'b'];
array[arrayIndiceWTF] = 'elemento cuyo indice es un array WTF';
console.log(array);
/*[
  'primer actualitzat',
  2,
  3,
  4,
  5,
  '-1': -1,
  true: 'valor en index true',
  NaN: NaN,
  a: 'a',
  'a,b': 'elemento cuyo indice es un array WTF'
]*/
consoleMPDS.writeln(`${array['3']} y ${array[arrayIndiceWTF]}`); // 4 y elemento cuyo indice es un array WTF
consoleMPDS.writeln(array.length); // 5

//TODO: permite indexar con objetos que no sean arrays (objetos 'normales', funciones...) ?????
//-> Más bien parece que en JavaScript los arrays pueden funcionar como un Map (clave, valor) ?