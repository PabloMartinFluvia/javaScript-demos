const { Console } = require("console-mpds");

const consoleMPDS = new Console();

console.log(this); // {}
console.log(this.test); // undefined


function zunction(parameter){    
    consoleMPDS.writeln(this); // [object global]    
    console.log(this); // ????, sembla que mostra un objecte amb algunes propietats per defecte
    console.log(this.other); // undefined
}

zunction(`lo que sea`); 
