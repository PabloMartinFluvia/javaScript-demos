const { Console } = require("console-mpds");

const console = new Console();
function global(){
    return local();

    function local(){
        return -1;
    }
}
console.writeln(global()); // -1

function ambitoAnonima(){
    let a = function(){
        return 0;
    }
    return a();
    // 'a' no se reasigna, ya que no se llega a la sentencia de asignación debido a 'return'
    a = function(){
        return 1;
    }
}
console.writeln(ambitoAnonima()); // 0

function ambitoNominal(){
    function nominal(){
        return 0;
    }
    return nominal();
    // identificador 'nominal' se redefine, por hoisting.
    function nominal(){
        return 1;
    }
}
console.writeln(ambitoNominal()); // 1


