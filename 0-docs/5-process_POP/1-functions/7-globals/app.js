const { Console } = require(`console-mpds`);

const consoleMPDS = new Console();

consoleMPDS.writeln('parseFloat():')
// Passa el valor a un format en coma flotant en base 10.
// Si el valor és un enter el deixa igual: NO FA x.0
console.log(parseFloat(3)); // 3
// Si el valor està expresat en notació científica -> expressat 'normal' en base 10
consoleMPDS.writeln(parseFloat(314e-2)); // 3.14
// Quan el valor no és un Number, només aplica coerció a Number SI EL STRING COMENÇA COM UN NUMBER,
// en cas contrari -> NaN
consoleMPDS.writeln(parseFloat(`3`)); // 3
consoleMPDS.writeln(parseFloat(`3.14`)); // 3.14
consoleMPDS.writeln(parseFloat(`314e-2`)); // 3.14
consoleMPDS.writeln(parseFloat(`0.0314E+2`)); // 3.14 
consoleMPDS.writeln(parseFloat(`error`)); // NaN
consoleMPDS.writeln(parseFloat(undefined)); // NaN
consoleMPDS.writeln(parseFloat(true)); // NaN // no s'aplica coerció a 1
consoleMPDS.writeln(parseFloat(false)); // NaN // no s'aplica coerció a 0
consoleMPDS.writeln(parseFloat("")); // NaN // no s'aplica coerció a 0
consoleMPDS.writeln(parseFloat(NaN)); // NaN
// Puc passar com a primer argument expresions que, al evaluar-se, retornen un valor de tipus Number
consoleMPDS.writeln(parseFloat(3/2)); // 1.5
// Si la expressió es en un String -> només agafa fins al primer 'caracter raro'
consoleMPDS.writeln(parseFloat("15*3")); // 15
consoleMPDS.writeln(parseFloat(`3.1 error 4`)); // 3.1
// Amb arrays: només mira el primer element
consoleMPDS.writeln(parseFloat([])); // NaN
consoleMPDS.writeln(parseFloat([1])); // 1
consoleMPDS.writeln(parseFloat(["1.1", "1.2"])); // 1.1

consoleMPDS.writeln('\nparseInt():');
// Ignora tot lo posterior a la 'coma flotante' (.)
consoleMPDS.writeln(parseInt(15.99, 10)); // 15
// Si no indico la base -> per defecte considera que es en base 10
consoleMPDS.writeln(parseInt(15.99)); // 15
// Quan el valor no és un Number, només aplica coerció a Number SI EL STRING COMENÇA COM UN NUMBER,
// en cas contrari -> NaN
consoleMPDS.writeln(parseInt("15", 10)); // 15
consoleMPDS.writeln(parseInt("15.99", 10)); // 15
consoleMPDS.writeln(parseInt("error", 10)); // NaN
consoleMPDS.writeln(parseInt(undefined)); // NaN
consoleMPDS.writeln(parseInt(true)); // NaN // no s'aplica coerció a 1
consoleMPDS.writeln(parseInt(false)); // NaN // no s'aplica coerció a 0
consoleMPDS.writeln(parseInt("")); // NaN // no s'aplica coerció a 0
consoleMPDS.writeln(parseInt(NaN, 10)); // NaN
// Si el valor no està correctament expressat en la seva base -> NaN
consoleMPDS.writeln(parseInt(546, 2)); // NaN
consoleMPDS.writeln(parseInt("546", 2)); // NaN
// Puc passar valors númerics expressats en altres bases
consoleMPDS.writeln(parseInt(1111, 2)); // 15 // obs: com que ja s'indica la base -> NO POSAR 0b...
consoleMPDS.writeln(parseInt("1111", 2)); // 15
consoleMPDS.writeln(parseInt("F", 16)); // 15
consoleMPDS.writeln(parseInt("12", 13)); // 15
consoleMPDS.writeln(parseInt("17", 8)); // 15
// Puc passar com a primer argument expresions que, al evaluar-se, retornen un valor de tipus Number
consoleMPDS.writeln(parseInt(3*5, 10)); // 15
// Si la expressió es en un String -> només agafa fins al primer 'caracter raro'
consoleMPDS.writeln(parseInt("15*3", 10)); // 15
consoleMPDS.writeln(parseInt("1111 + 11", 2)); // 15
// Amb arrays: només mira el primer element
consoleMPDS.writeln(parseInt([])); // NaN
consoleMPDS.writeln(parseInt([1])); // 1
consoleMPDS.writeln(parseInt(["1.1", "1.2"])); // 1

consoleMPDS.writeln('\nisFinite():');
// false si NaN o +- Infinite, resta true
consoleMPDS.writeln(isFinite(0)); // true
consoleMPDS.writeln(isFinite(2e64)); // true
consoleMPDS.writeln(isFinite(-Infinity)); // false
consoleMPDS.writeln(isFinite(Infinity)); // false
consoleMPDS.writeln(isFinite(NaN)); // false
// En isFinite() SI QUE S'APLICA COERCIÓ  tipus Number
consoleMPDS.writeln(isFinite("0")); // true
consoleMPDS.writeln(isFinite("15.99")); // true
consoleMPDS.writeln(isFinite("-Infinity")); // false // -Inifinity
consoleMPDS.writeln(isFinite("error")); // false // NaN
consoleMPDS.writeln(isFinite(undefined)); // false // NaN
consoleMPDS.writeln(isFinite(true)); // true // aplica coerció a 1 
consoleMPDS.writeln(isFinite(false)); // true // aplica coerció a 0
consoleMPDS.writeln(isFinite("")); //  true // aplica coerció a 0 
consoleMPDS.writeln(isFinite(NaN)); // false
// Puc passar com a primer argument expresions que, al evaluar-se, retornen un valor de tipus Number
consoleMPDS.writeln(isFinite(3*5)); // true
consoleMPDS.writeln(isFinite(3/0)); // false (Infinity)
// Si la expressió es en un String -> coerció
consoleMPDS.writeln(isFinite("15*3")); // false (NaN)
// Amb arrays: 
// cap element -> true
// un element 
//      -> si és un número o un String que es pot coercitar a numero -> s'evalua
//      -> si no ho és -> false
// >=2 -> false
console.log(isFinite([])); // true
console.log(isFinite([NaN])); // false
console.log(isFinite([1])); // true
console.log(isFinite(['15'])); // true
console.log(isFinite([3/0])); // false (Infinity)
console.log(isFinite(['cadena'])); // false 
console.log(isFinite([true])); // false
console.log(isFinite([false])); // false
console.log(isFinite([undefined])); // true // ho considera com []
console.log(isFinite(["1.1", "1.2"])); // false
console.log(isFinite([1,2,3])); // false
console.log(isFinite(['a', 'b', 'c', 'd'])); // false

consoleMPDS.writeln('\nisNaN():');
// true si NaN , resta false
consoleMPDS.writeln(isNaN(0)); //false
consoleMPDS.writeln(isNaN(NaN)); //true
consoleMPDS.writeln(isNaN(0 / 0)); //true
// En isNaN() SI QUE S'APLICA COERCIÓ  tipus Number
consoleMPDS.writeln(isNaN('NaN')); //true
consoleMPDS.writeln(isNaN('Hello')); //true
consoleMPDS.writeln(isNaN('2005/12/12')); //true
consoleMPDS.writeln(isNaN(undefined)); //true
consoleMPDS.writeln(isNaN('123')); //false
consoleMPDS.writeln(isNaN(true)); //false
consoleMPDS.writeln(isNaN(false)); //false
consoleMPDS.writeln(isNaN('')); //false
// Puc passar com a primer argument expresions que, al evaluar-se, retornen un valor de tipus Number
consoleMPDS.writeln(isNaN(3*5)); // false
consoleMPDS.writeln(isNaN(3/0)); // false (Infinity)
consoleMPDS.writeln(isNaN(Infinity/Infinity)); // true (NaN)
// Si la expressió es en un String -> coerció
consoleMPDS.writeln(isNaN("15*3")); // true (NaN)
// Amb arrays: 
// cap element -> false
// un element 
//      -> si és un número o un String que es pot coercitar a numero -> s'evalua
//      -> si no ho és -> true
// >=2 -> true
consoleMPDS.writeln(isNaN([])); // false
consoleMPDS.writeln(isNaN([NaN])); // true
consoleMPDS.writeln(isNaN([1])); // false
consoleMPDS.writeln(isNaN(['15'])); // false
consoleMPDS.writeln(isNaN(['cadena'])); // true
consoleMPDS.writeln(isNaN([true])); // true
consoleMPDS.writeln(isNaN([false])); // true
consoleMPDS.writeln(isNaN([undefined])); // false // ho considera com []
consoleMPDS.writeln(isNaN(["1.1", "1.2"])); // true
consoleMPDS.writeln(isNaN([1,2,3])); // true
consoleMPDS.writeln(isNaN(['a', 'b', 'c', 'd'])); // true

