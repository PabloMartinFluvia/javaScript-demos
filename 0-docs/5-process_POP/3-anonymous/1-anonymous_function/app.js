const { Console } = require("console-mpds");

const consoleMPDS = new Console();

//Patrón IIFE: Immediately Invoked Function Expression
(function () {
    consoleMPDS.writeln('Patrón IIFE: Immediately Invoked Function Expression');
})();

consoleMPDS.writeln(typeof function () {
    consoleMPDS.writeln("anonima"); 
}); // function
consoleMPDS.writeln(function () {
    consoleMPDS.writeln("anonima");
}); // function () ... tota la declaració ....

// declarar + immediatament cridar-la
console.log(function () {
    consoleMPDS.writeln("anonima");
}()); // anonima\nundefined // executar + mostrar lo retornat
console.log(typeof function () {
    consoleMPDS.writeln("anonima");
}()); // anonima\nundefined // executar + evaluar el tipus de lo retornat

consoleMPDS.writeln('\nWhith nominal:')
let f = nominal; // sense error -> ja que les funcions nominals sofreixen hoisting
function nominal() {
    consoleMPDS.writeln("nomimal");
    return true;
}
/*
Escriure una declaració d'una funció nominal és lo mateix que:
var nominal = function (){
    consoleMPDS.writeln("nomimal");
    return true;
}
*/
consoleMPDS.writeln(typeof f); // function
consoleMPDS.writeln(f); // function nominal() ... tota la declaració ...
consoleMPDS.writeln(f()); // nomimal\ntrue // executar + mostrar lo retornat
consoleMPDS.writeln(typeof f()); // nomimal\nboolean // executar + evaluar el tipus de lo retornat

consoleMPDS.writeln('\nWhith anonymous:')
// escriure-ho així és molt tipic, xo al no tenir hoisting només es poden fer les crides posteriorment
let g = function () {
    consoleMPDS.writeln("anonima g");
};
consoleMPDS.writeln(typeof g); // function
consoleMPDS.writeln(g); // function () ...
console.log(g()); // anonima g\nundefined
consoleMPDS.writeln(typeof g()); // anonima g\undefined

function gg() {
    consoleMPDS.writeln("nominal gg");
};
consoleMPDS.writeln(typeof gg); // function
consoleMPDS.writeln(gg); // function gg() ...
console.log(gg()); // nonimal gg\nundefined
consoleMPDS.writeln(typeof gg()); // nonimal gg\nundefined

g = gg;
consoleMPDS.writeln(typeof g); // function
consoleMPDS.writeln(g); // function gg() ...
console.log(g()); // nonimal gg\nundefined
consoleMPDS.writeln(typeof g()); // nonimal gg\nundefined
// operador de igualdad


nominal = function () {
    consoleMPDS.writeln("re-anomina");
};
consoleMPDS.writeln(typeof nominal); // function
consoleMPDS.writeln(nominal); // function () ...
console.log(nominal()); // re-anomina\nundefined
consoleMPDS.writeln(typeof nominal()); //re-anomina\nundefined
