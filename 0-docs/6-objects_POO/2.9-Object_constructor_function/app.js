const { Console } = require("console-mpds");

const console = new Console();
let object = { a: 1, b: 2 };
for (let property in object) {
  console.writeln(object[property]); // 1 / 2
}
console.writeln("Obtenir els valors de totes les propietats del objecte")
console.writeln(Object.values(object)); // 1, 2
console.writeln("Obtenir els noms de totes les propietats")
console.writeln(Object.getOwnPropertyNames(object)); // a,b

console.writeln("\nAssignar noves propietats al object (o assignar nous valors si la propietat ja existeix");
Object.assign(object, { b: -2, c: -3 }); 
console.writeln(Object.values(object)); // 1, -2, 3
console.writeln(Object.getOwnPropertyNames(object)); // a,b,c
console.writeln("* Permet crear copies amb facilitat:");
let copy = {};
Object.assign(copy, object);
console.writeln(Object.values(copy)); // 1, -2, 3
console.writeln(Object.getOwnPropertyNames(copy)); // a,b,c

console.writeln(`\nDefinir una propietat i configurar-la (?)`)
Object.defineProperty(copy, 'd', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'valor'
});
console.writeln(Object.values(copy)); // 1, -2, 3, valor
console.writeln(Object.getOwnPropertyNames(copy)); // a,b,c,d

console.writeln(`\nUna manera de personalitzar el mètodde toString(), comú a tots els objectes`);
console.writeln(copy.toString()); // [object Object]
copy.toString = function () {
  let string = `{\n`;
  for (let property in this) {
    string += `${property} = ${this[property]}\n`;
  }
  return `${string}}\n`;
}
console.writeln(copy.toString()); // {
 // d = valor
 // toString = function() {
 //   let string = `{\n`;
 //   for(let property in this){
 //     string += `${property} = ${this[property]}\n`;
 //   }
 //   return `${string}}\n`;
 // }
 // a = 1
 // b = -2
 // c = -3
 // }

console.writeln(`* values(object) i getOwnPropertyNames(object) mostra els mètodes del objecte:`)
console.writeln(Object.values(copy)); // 1, -2, 3, valor, function () {etc...}
console.writeln(Object.getOwnPropertyNames(copy)); // a,b,c,d, toString

console.writeln(`\n* values(object) i getOwnPropertyNames(object) NO mostra els mètodes del PROTOTIP de l'objecte:`)
function createObject(value) {
  this.attribute = value;
}
createObject.prototype.write = function () {
  console.writeln(`this.attribute: ${this.attribute}.`);
}
object = new createObject(true);
object.write(); // this.attribute: true.
console.writeln(Object.values(object)); // true
console.writeln(Object.getOwnPropertyNames(object)); // attribute

console.writeln(`\n .create(object) copia el PROTOTIP`)
copy = Object.create(object);
console.writeln(Object.values(copy)); // []
console.writeln(Object.getOwnPropertyNames(copy)); // []
console.writeln(Array.isArray(Object.values(copy)) && Object.values(copy).length === 0); // true 
console.writeln(Array.isArray(Object.getOwnPropertyNames(copy)) 
                  && Object.getOwnPropertyNames(copy).length === 0); // true 
console.writeln(`Ara donem d'alta les propietats d'aquest objecte:`)
copy.attribute = false; 
copy.write(); // this.attribute: false.
console.writeln(Object.values(copy)); // false
console.writeln(Object.getOwnPropertyNames(copy)); // attribute
