const { Console } = require("console-mpds");

const console = new Console();
let x = 3;
while (x > 0) // no es necesari { } si es tracta d'una única sentencia, xo com a regla d'estil és recomanable
    x--;
console.writeln(x); // 0

do // no es necesari { } si es tracta d'una única sentencia, xo com a regla d'estil és recomanable
    x++;
while (x < 3);
console.writeln(x); // 3

for (let i = 0; i < 3; i++)
    console.writeln(i + 1); // 1, 2, 3

for (let i = 0, j = 9; i < j; i++, j--)
    console.writeln(`${i} - ${j}`); // 0 - 9 / 1 - 8 / 2 - 7 / 3 - 6 / 4 - 5

// demos per a provar la coerció

x = 5;
while (x) // coerció de x a boolean -> true. Quan x sigui 0 la coerció implicarà false
    x--;
console.writeln(x); // 0

x = 5;
do 
    x--;
while(x); // coerció de x a boolean -> true. Quan x sigui 0 la coerció implicarà false
console.writeln(x); // 0

//demo per a remarcar el caracter de 0-N del while
x = 0;
let msg = "";
while (x>0){
    msg +="Error: no quiero que se ejecute el bucle\n";     
    x--;
}
console.writeln(msg); //