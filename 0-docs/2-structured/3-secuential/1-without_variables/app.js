const { Console } = require("console-mpds");

const console = new Console();
{//esto es UNA sentencia. Al ser secuencial está compuesta de 3 sentencias (2 simples y 1 secuencial)
  console.writeln("- Inicio secuencial");
  { //esto es UNA sentencia. Al ser secuencial está compuesta de 3 sentencias (2 simples y 1 secuencial)
    console.writeln("  - Inicio secuencial interno");
    { //esto es UNA sentencia. Al ser secuencial está compuesta de 2 sentencias (2 simples)
      console.writeln("    - Hasta el infinito");
      console.writeln("    - y más allá ... no!");
    }
    console.writeln("  - Fin secuencial interno");
  }
  console.writeln("- Fin secuencial");
}

/*
//ejemplo análogo a:

console.writeln("- Inicio secuencial");
console.writeln("  - Inicio secuencial interno");
console.writeln("    - Hasta el infinito");
console.writeln("    - y más allá ... no!");
console.writeln("  - Fin secuencial interno");
console.writeln("- Fin secuencial");
*/
