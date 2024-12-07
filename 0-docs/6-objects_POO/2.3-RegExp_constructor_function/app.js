const { Console } = require("console-mpds");

const console = new Console();

console.writeln(`Creant l'objecte:`)
const patternObject = new RegExp(`abc`, `g`);
console.writeln(patternObject.exec(`ABCabcdef`)); // abc
console.writeln(patternObject.exec(`A B C a b c d e f`)); // null
console.writeln(patternObject.test(`ABCabcdef`)); // true
console.writeln(patternObject.test(`A B C a b c d e f`)); // false

console.writeln(`\nLlançant missatges directament al literal:`)
console.writeln(`Exactament el patró:`)
let patternString = /abc/g;
console.writeln(patternString.exec(`ABCabcdef`)); // abc
console.writeln(patternString.exec(`A B C a b c d e f`)); // null
console.writeln(patternString.test(`ABCabcdef`)); // true
console.writeln(patternString.test(`A B C a b c d e f`)); // false

console.writeln(`Búsqueda ignorant majuscules i minuscules:`)
patternString = /abc/gi;
console.writeln(patternString.exec(`ABCabcdef`)); // ABC
console.writeln(patternString.exec(`A B C a b c d e f`)); // null
console.writeln(patternString.test(`ABCabcdef`)); // true
console.writeln(patternString.test(`A B C a b c d e f`)); // false

console.writeln(`Búsqueda del grup:`)
patternString = /(abc)/g;
console.writeln(patternString.exec(`ABCabcdef`)); // abc, abc
console.writeln(patternString.exec(`A B C a b c d e f`)); // null
console.writeln(patternString.test(`ABCabcdef`)); // true
console.writeln(patternString.test(`A B C a b c d e f`)); // false

console.writeln(`Búsqueda del grup amb bandera d'ingnorar majuscules i minuscules:`)
patternString = /(abc)/gi;
console.writeln(patternString.exec(`ABCabcdef`)); // ABC, ABC
console.writeln(patternString.exec(`A B C a b c d e f`)); // null
console.writeln(patternString.test(`ABCabcdef`)); // true
console.writeln(patternString.test(`A B C a b c d e f`)); // false

