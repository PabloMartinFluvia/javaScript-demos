console.log(`1) Test per a la variable del catch:`);
try {
    throw 2*5;
} catch (ex) {
    console.log(`Excepcio: ${ex}`);
}

console.log(`\n2) Try-Catch sin finally:`);
console.log(`Sentencia previa`);
try {
    if (Math.random() < 0.5) {
        throw "Error";
    }
    console.log("Sentencia ejecutada?");
} catch (exception) {
    console.log("Acciones catch: " + exception);
}
console.log(`Sentencia posterior`);

console.log(`\n3) Try-Finally sin catch:`);
try {
    if (Math.random() < 0.5) {        
        throw "Error";
    }
    console.log("Sentencia ejecutada?");
} finally {    
    console.log("Acciones finally");
    console.log(`Ell programa pot petar perque no s'hauria capturat la excepció. 
        Pero, encara que peti, s'executa la sentencia Finally.`)
}
console.log(`Sentencia posterior`);

console.log(`\n4) Try-Catch-Finally:`);
console.log(`Sentencia previa`);
try {
    if (Math.random() < 0.5) {
        throw "Error";
    }
    console.log("Sentencia ejecutada?");
} catch (exception) {
    console.log("Acciones catch: " + exception);
    if (Math.random() < 0.5) {
        console.log("Excepción elevada en el catch del ejemplo 1");
        throw "Error en el catch del ejemplo 1";
    }
} finally {
    console.log("Acciones finally");
}
console.log(`Sentencia posterior`);

