const { Console } = require("console-mpds");

const console = new Console();

// Test with internal vars

function test(){
    let demo = 0;

    //en cada llamada cambiará el estado de demo -> contexto de test persiste
    return function () {
        demo++;
        return demo;
    }
}

let clousure = test();
console.writeln(clousure()); // 1
console.writeln(clousure()); // 2
let otherClousure = test();
console.writeln(otherClousure()); //1
console.writeln(clousure()); // 3
console.writeln(clousure()); // 4
console.writeln(otherClousure()); // 2

console.writeln()

// test with internal functions

function test2(){    

    //en cada llamada cambiará el estado de localFunction -> contexto de test2 persiste
    return function (value, arrowFunction) {     
        localFunction = arrowFunction ?? localFunction;   
        return localFunction(value);
    }

    function localFunction() {
        return null;
    }
}

clousure = test2();
console.writeln(clousure(10)); // null
console.writeln(clousure(10, value => value + 5)); // 15
console.writeln(clousure(20, value => value * 5)); // 100
otherClousure = test2();
console.writeln(otherClousure(20)); // null
console.writeln(otherClousure(10, value => value + 10)); // 20
console.writeln(otherClousure(20, value => value * 10)); // 200

console.writeln(clousure(10)); // 50
console.writeln(otherClousure(10)); // 100

