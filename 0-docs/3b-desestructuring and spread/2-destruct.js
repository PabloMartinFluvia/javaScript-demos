let array = [1, 2, 3];
let text = 'abc';
let object1 = {p1: 10, p2:20};
let  object2 = {p1: 100, p2:200};
let array2 = [];

console.log('Desestructuració básica (amb inicialització i assignació)')
let [a, b] = array;
console.log(a, b);

[a, b] = text; 
console.log(a, b);

[array2[0], array2[1]] = text; // 1r desestructura. 2n IF let/const THEN inicialitza ELSE assigna
console.log(array2);


let {p1, p2} = object1;
console.log(p1, p2);
({p1, p2} = object2);
console.log(p1, p2);


console.log("\n'Saltar' alguna asignació quan la desestructuració va segons l'ordre");
[a, , b] = array;
console.log(a, b);
[a, , b] = text;
console.log(a, b);

console.log("\nDesestructurar un objecte sense mantenir el nom de les propietats");
let { p1: a1, p2: b1 } = object1;
console.log(a1, b1);
console.log("\n Asignar els valors desestructurats a altres referencies");
({ p1: a1, p2: b1 } = object2);
console.log(a1, b1);
({ p1: array2[0], p2: array2[1] } = object2);
console.log(array2);

console.log("\nEs poden donar valors defaults, per als casos en que no existeixi la propietat al desestructurar.");
let [, , , d] = text;
console.log(d); // undefined
[, , , d="default"] = text;
console.log(d); // default
({ pxxx: array2[0] = 'x', pyyy: array2[1]  = 'z'} = object2);
console.log(array2)