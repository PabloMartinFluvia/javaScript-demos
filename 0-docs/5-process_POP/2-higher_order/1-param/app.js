const { Console } = require("console-mpds");

const console = new Console();
function normalXA(){
    console.writeln(`A`);
}

function normalXB(){
    console.writeln(`B`);
}

function superiorX(f){
    f();
}

superiorX(normalXA); // A 
superiorX(normalXB); // B
let anotherFunction = normalXA;
superiorX(anotherFunction); // A // com a argument s'está passant la direcció de memoria on está declarada la funció 'normalXA'
//superiorX(normalXA()); // Errror: se llama a XA , que saca 'A' por pantalla, como no tiene return devuelve 'undefined'
                       // se llama a X(undefinen), al ejecutarse X se intenta llamar 'undefined()' y da error

function normalYA(){
    return `A`;
}

function normalYB(){
    return `B`;
}

function superiorY(f){
    console.writeln(f());
}

superiorY(normalYA); // A
superiorY(normalYB); // B

function normalZA(value){
    console.writeln(value);
}

function normalZB(value){
    console.writeln(value + value);
}

function superiorZ(value, f){
    f(value);
}

superiorZ(`A`, normalZA); // A
superiorZ(`B`, normalZB); // BB
superiorZ(`B`, normalZA); // B
superiorZ(`A`, normalZB); // AA
