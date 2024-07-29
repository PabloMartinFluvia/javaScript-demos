const { Console } = require("console-mpds");

const console = new Console();

//1) Sin sentencia de declaración ni incremento -> debería escribirse como un while
let i = 0;
for(; i<10;){
    console.writeln(i);
    i++;
}

//2) Sin que la condición mencione al indice
const value = 20;
let condition = true;
let count = 0;
for(let x = 0; condition === true ; x++){     //este caso se ejecuta al menos 1 vez, y desconozco el valor de value -> do-while
    if(x !== value){  
        count++;      
        
    }else {
        condition = false;
    }
}
console.writeln(count); // 20