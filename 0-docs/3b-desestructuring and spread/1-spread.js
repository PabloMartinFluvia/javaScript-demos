//en argumentos de funciones
let iterable = 'text';
myFunction1('_', ...iterable, "_"); // "_text_"

function myFunction1 (first, char1, char2, char3, char4, last) { 
    console.log(first + char1 + char2 + char3 + char4 + last);
}

// en literales de arrays
iterable = [2,3]
let array = [1, ...iterable, '4', 'five', 6] // [1, 2, 3, '4', 'five', 6]
console.log(array)

// en literales de cobjetos
let obj = {a:1, b:2}
obj ={ ...obj, key: 'value' } // {a:1, b:2, key: 'value'}
console.log(obj)

array = [1, 2, 3];
obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
console.log(obj)

