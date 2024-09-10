const { Console } = require("console-mpds");

const consoleMPDS = new Console();

consoleMPDS.writeln("Assignar un objecte com a valor");
let object = `lo que hubiere o hubiese`;
object = {
    a : 666*7,
    b : `valor`
};
consoleMPDS.writeln(object); // [object Object]
consoleMPDS.writeln(typeof object); // object
for(let property in object){
    consoleMPDS.writeln(object[property]); // 4662 / valor 
    consoleMPDS.writeln(typeof object[property]); // number / string
}

consoleMPDS.writeln("\nDonar d'alta noves propietats");
object = {};
object.a = 666;
object["aa"] = 777; 
object.b = "campo";
object["bb"] = "cadena";
object.y = {};
object["yy"] = {};

consoleMPDS.writeln(object.a); // 666
consoleMPDS.writeln(object["a"]); // 666
consoleMPDS.writeln(object.aa); // 777
consoleMPDS.writeln(object["aa"]); // 777
consoleMPDS.writeln(object.b); // "campo"
consoleMPDS.writeln(object["b"]); // "campo"
consoleMPDS.writeln(object.bb); // "cadena"
consoleMPDS.writeln(object["bb"]); // "cadena"
consoleMPDS.writeln(object.y); // [object Object]
consoleMPDS.writeln(object["y"]); // [object Object]
consoleMPDS.writeln(object.yy); // [object Object]
consoleMPDS.writeln(object["yy"]); // [object Object]

for(let property in object){
    consoleMPDS.writeln(object[property]); // 666 / 777 / campo / cadena / [object Object] / [object Object]
    consoleMPDS.writeln(typeof object[property]); // number / number / string / string / object / object
}

consoleMPDS.writeln("\nTest donar d'alta propietats sense inicialitzar-les");
const object2 = {};
object2.initialized = 1;
object2.atributeNotInitialized; // NO es dona d'alta
object2["notExistent"]; // NO es dona d'alta
object2.test = undefined; // SI es dona d'alta
let count = 0;
for (let property in object2){
    console.log(object2[property]); // 1 // undefined
    consoleMPDS.writeln(typeof object2[property]); // number // undefined
    count++;
}
consoleMPDS.writeln(`Num of properies: ${count}`); // Num of properies: 2
console.log(object2); // { initialized: 1, test: undefined }

consoleMPDS.writeln("\nModificar valors de propietats");
object.a = 8;
object["aa"] = 9;
for(let campo in object){
    consoleMPDS.writeln(object[campo]); // 8 / 9 / campo / cadena / [object Object] / [object Object]
    consoleMPDS.writeln(typeof object[campo]); // number / number / string / string / object / object 
} 

consoleMPDS.writeln("\nEliminar propietats");
delete object.b;
delete object["bb"];
consoleMPDS.writeln(object); // [object Object]
consoleMPDS.writeln(typeof object); // object
for(let campo in object){
    consoleMPDS.writeln(object[campo]); // 8 / 9  / [object Object] / [object Object]
    consoleMPDS.writeln(typeof object[campo]); // number / number / object / object 
}

consoleMPDS.writeln("\nTest de l'operador delete");
const test = {m: "value"};
const returnedM = delete test.m;
const returnedInexistent = delete test["kkkkk"];
count = 0;
for(let campo in test){
    count++;
}
consoleMPDS.writeln(`Numero de propiedades: ${count}`); // 0
consoleMPDS.writeln(`Valor retornado por el operador delete \
(propiedad existe): ${returnedM}`); // true
consoleMPDS.writeln(`Valor retornado por el operador delete \
(propiedad no existe): ${returnedInexistent}`); // true

