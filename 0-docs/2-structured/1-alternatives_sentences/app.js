const { Console } = require("console-mpds");

const console = new Console();
let x = 0;

if (x>=0) // no es necesari { } si es tracta d'una única sentencia, xo com a regla d'estil és recomanable
    x++;
console.writeln(x); // 1
            
if (x>1) // no es necesari { } si es tracta d'una única sentencia, xo com a regla d'estil és recomanable
    x++;
else // no es necesari { } si es tracta d'una única sentencia, xo com a regla d'estil és recomanable
    x--;
console.writeln(x); // 0

//x = -2;
switch(x){
    case 3:
        console.writeln("esperado"); // 
        break;
    case 2:
        console.writeln("vulgar"); // 
    case 0:
        console.writeln("entra"); // entra
    case -1:
        // salta a la siguiente sentencia
    case 1:
        console.writeln("sigue"); // sigue
        break;
    default:
        console.writeln("no llega"); //    
}

/*
Next code is horrible, just for experiment.
Demo para:
1) Provar coerción a boolean en sentencia if
2) Ver que la sentencia en la rama else accepta cualquier sentencia
3) Ver que en una misma sentencia switch acepta como valores de lass ramas case:
    pueden ser valores de distintos tipos
    pueden ser el resultado de la evaluación de cualquier expresion (no es obligatorio valores literales)
4) Ver que sentencia siwtch, para comparar la expresión a evaluar y los valores de las
    ramas case, se compara en igualdad en valor y tipo (===)
*/

x = "0";
let msg = "x evaluado a ";
const z = "";
if (z) {
    msg += "valor de z coercitado a true.";
} else switch (x) {
    //comparación de igualdad en valor y tipo
    case false: // no es el caso
        msg += false;
        break;
    case undefined:
        msg += undefined;
        break;
    case 0 : // no es el caso
        msg += 0;
        break;
    case z:    
        msg += `el mismo valor que z: ${z}`;
        break;
    case z+0:  // <- case -> se pueden poner expresiones!!!
        msg += `el mismo valor que la concatenación de z y numero 0: ${z+0}`;
        break;
    case "0": 
        msg += "0";
        break
    default:
        msg += "nada";
}
console.writeln(msg); // x evaluado a el mismo valor que la concatenación de z y numero 0: 0

// per assegurar que es compara en igualtat y valor
x = false;
msg = "";
switch (x){
    case 0:
        msg += "hi ha coerció, ja que el case implica false==0";
        break;
    case "":
        msg += "hi ha coerció, ja que el case implica false==''";
        break;
    case false:
        msg += "no s'ha aplicat coerció -> switch compara en igualtat en valor i tipus (===)";
}
console.writeln(msg);