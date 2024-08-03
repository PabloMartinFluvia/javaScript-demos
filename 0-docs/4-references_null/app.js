const { Console } = require("console-mpds");

const console = new Console();
/*
La classe Console feta per Luís NO treu els [] al mostrar un array per consola,
ja que internament, per a que funcioni, ho ha de evaluar a String
*/

/*
Demo NULL
*/
let test = null;
console.writeln(test); // null
console.writeln(typeof null); // object
console.writeln(typeof test); // object

/*
Demo valors guardats en la memoria quan són valors primitius
*/
//si una variable té valors de tipus primitiu -> la zona de memoria guarda el valor (immutable)
let primitive1 = 1;
let primitive2 = primitive1;
console.writeln(primitive1); // 1
console.writeln(primitive2); // 1
primitive2 = 2;
console.writeln(primitive1); // 1
console.writeln(primitive2); // 2

primitive1 = 'a';
primitive2 = primitive1;
console.writeln(primitive1); // a
console.writeln(primitive2); // a
primitive2 = 'b';
console.writeln(primitive1); // a
console.writeln(primitive2); // b

/*
Demo de referencias con array
*/
let array1 = [1, 2, 3];
console.writeln(array1); // 1,2,3
//array2 se incializa con la misma dirección de memoria que guarda el array
let array2 = array1; 
// al consultarlo se obtiene la misma dirección de memoria
console.writeln(array2); // 1,2,3 
// modificación del valor que se guarda en la dirección de memoria referenciada
array1[1] = 666;
// como se consulta la misma dirección de memoria -> se obtiene el mismo valor
console.writeln(array1); // 1,666,3
console.writeln(array2); // 1,666,3
//los 2 arrays son iguales porque guardan la MISMA DIRECCIÓN DE MEMORIA
console.writeln(array1 === array2); // true

//al asignar un nuevo valor literal de array -> este valor se guarda en una NUEVA zona de memoria,
// y array1 guarda la NUEVA dirección de esa NUEVA zona de memoria (con el valor declarado literalmente)
array1 = [1, 666, 3];
// que las 2 zonas de memoria almacenen el mismo valor es una particularidad de este ejercicio
console.writeln(array1); // 1,666,3
console.writeln(array2); // 1,666,3
// los 2 arrays son DISTINTOS porque guardan  DISTINTAS DIRECCIONES DE MEMORIA
console.writeln(array1 == array2); // false
// al ser direcciones de memoria distintas, modificar una no afecta a la otra
array2[1] = 0;
console.writeln(array1); // 1,666,3
console.writeln(array2); // 1,0,3

/*
Copia de valors en diferents zones de memoria
*/
array1 = []; // ara array1 APUNTA A UNA NOVA ZONA DE MEMORIA
console.writeln(array1); //  // res degut a la consla de MPDS
console.writeln(array2); // 1,0,3
for(let i=0; i<array2.length; i++){
  array1[i] = array2[i];
}
console.writeln(array1); // 1,0,3
console.writeln(array2); // 1,0,3
console.writeln(array1 == array2); // false // ja que les direccions són diferents

//Al fer copies OJO amb els arrays dins d'arrays:
array1 = [];
array2 = [1, [2, 3], 4];
for(let i=0; i<array2.length; i++){
  array1[i] = array2[i];
}
console.writeln(array1); // [1, [2, 3], 4] // si fos console.log
console.writeln(array2); //  [1, [2, 3], 4] // si fos console.log
console.writeln(array1 == array2); // false // ja que les direccions són diferents
console.writeln(array1[1] == array2[1]); // true // ja que l'ELEMENT 1 GUARDA UNA ZONA DE MEMORIA



let array = ['a', true, [1, 2] ];
console.writeln(array[0]); // 'a' //consultar la direcció de memoria + 0 (el valor que es guarda en la direcció)
console.writeln(array[1]); // true // consultar la direcció de memoria + 1
array[2]; // consultar la direcció de memoria + 2, QUE ES UNA ALTRA DIRECCIÓ DE MEMORIA
console.writeln(array[2][0]); // 1 // consultar la direcció de memoria + 2, que es una direcció de memoria, i consultar aquesta direcció + 0
console.writeln(array[2][1]); // 2// consultar la direcció de memoria + 2, que es una direcció de memoria, i consultar aquesta direcció + 1