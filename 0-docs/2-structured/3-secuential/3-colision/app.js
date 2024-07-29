const { Console } = require("console-mpds");

const console = new Console();
let nivel = 100;
console.writeln(`---`);
nivel++;
console.writeln(nivel); // 101
{
  let nivel = 200;
  console.writeln(`---`);
  nivel++;
  console.writeln(nivel); // 201 // colisión-> acceso a la declarada en linia 9
  {
    let nivel = 300;
    console.writeln(`---`);
    nivel++;
    console.writeln(nivel); // 301 // colisión-> acceso a la declarada en linia 14
  }
  console.writeln(`---`);
  nivel++;
  console.writeln(nivel); // 202 
  // colisión-> acceso a la declarada en linia 9. 
  //*Recordar que la declarada en linia 14 ya no existe, pk se ha cerrado su ámbito
}
console.writeln(`---`);
nivel++;
console.writeln(nivel); // 102 
// sin colisión (los otros ámbitos ya cerrados) -> acceso a ámbito global (delcarada en linia 4)
