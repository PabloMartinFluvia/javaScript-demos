const { Console } = require("console-mpds");

const console = new Console();
console.writeln("Buenas" + 'Tardes'); // BuenasTardes
console.writeln("Buenas " + 'Tardes');  // Buenas Tardes
console.writeln("Buenas " + ' Tardes');  // Buenas  Tardes
console.writeln("1" + "2" + "3" + "...");  // 123...

//previ a les plantilles literals
console.writeln(535 + " * " + 723 + " = " + 535*723 + "."); // 535 * 723 = 386805.
//actualment amb les plantilles literals
console.writeln(`${535} * ${723} = ${535*723}.`); // 535 * 723 = 386805.

//Aquesta és la forma antiga en que s'escrivia per a poder fer salts de línia en el codi.
console.writeln("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
  "Donec rhoncus sollicitudin enim vitae tempor.\n" +
  "Nullam dui lorem, vulputate varius sapien ac, malesuada dictum metus.\n" +
  "...");
//Aquesta és la forma actual de fer-ho EN CAS DE NO USAR PLANTILLES LITERALS
console.writeln(
"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\
Donec rhoncus sollicitudin enim vitae tempor.\n\
Nullam dui lorem, vulputate varius sapien ac, malesuada dictum metus.\n\
...");
//Aquesta és la forma actual de fer-ho
console.writeln(
`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Donec rhoncus sollicitudin enim vitae tempor.
Nullam dui lorem, vulputate varius sapien ac, malesuada dictum metus.
...`);
