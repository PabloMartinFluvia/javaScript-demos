const { Console } = require("console-mpds");

const console = new Console();
function funcion(x, y=0) {
    console.write(`x:${x}, y:${y} => `);
    x++;
    y++;
    console.writeln(`x:${x}, y:${y}`);
}
funcion(); // x:undefined, y:0 => x:NaN, y:1
funcion(-1); // x:-1, y:0 => x:0, y:1
funcion(undefined); // x:undefined, y:0 => x:NaN, y:1
funcion(1,2); // x:1, y:2 => x:2, y:3
let x=1; // 
let y=2; // 
funcion(y,x); // x:2, y:1 => x:3, y:2
funcion(x,y); // x:1, y:2 => x:2, y:3
funcion(y,x); // x:2, y:1 => x:3, y:2
funcion(x+y*2,x*y-1); // x:5, y:1 => x:6, y:2
funcion(x,y,666); // x:1, y:2 => x:2, y:3

// ús d'un patró de desestructuració en la declaració dels paràmetres
function writeln([head, ...tail]){
    console.writeln(`${head} y ${tail.length} más`);
}
writeln([1,2,3,4,5,6,7,8]); // 1 y 7 más

// arguments independent del número de parametres declarats
function writelnSum(){
    let sum = 0;
    for(let argument of arguments){
        sum += argument;
    }
    console.writeln(sum);
}
writelnSum(); // 0
writelnSum(1); // 1
writelnSum(1,2,3,4,5); // 15

// Experiment amb referencies

let array = [0, 1];
console.writeln(array); //0,1
incrementArray(array);
// array s'ha modificat, ja que l'evaluació de l'argument és una direcció de memoria, que s'asigna al paràmetre
console.writeln(array); //1,2

function incrementArray(arrayParam) {
    for (let i = 0; i < arrayParam.length; i++){
        arrayParam[i]++;
    }
}
