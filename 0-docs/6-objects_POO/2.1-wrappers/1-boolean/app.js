const { Console } = require("console-mpds");

// utilitzar el constructor està totalment desaconsellat

const console = new Console();

console.writeln(`Lo aconsellat es llançar missatges a valors primitius (o variables amb valors primitius)`)
let ok = true;
let error = false;
console.writeln(`\ntoString examples`)
console.writeln(true.toString()); // true
console.writeln(ok.toString()); // true
console.writeln(false.toString()); // false
console.writeln(error.toString()); // false
console.writeln(`\nvalueOf examples`)
console.writeln(true.valueOf()); // true
console.writeln(ok.valueOf()); // true
console.writeln(false.valueOf()); // false
console.writeln(error.valueOf()); // false

console.writeln(`\nUtilitzant la funció constructora: DESACONSELLAT`)
const expression = 0;
console.writeln(Boolean(expression)); // false
console.writeln(new Boolean(expression)); // false
console.writeln(!!(expression)); // false
console.writeln(!!(new Boolean(expression))); // true // conversió d'un objecte a tipus boolean -> true

console.writeln(`\nTest amb valors coercitats a true`)
console.writeln(new Boolean(true).valueOf()); // true
console.writeln(new Boolean(-1).valueOf()); // true
console.writeln(new Boolean('false').valueOf()); // true

console.writeln(`\nTest amb valors coercitats a false`)
console.writeln(new Boolean().valueOf()); // false
console.writeln(new Boolean(false).valueOf()); // false
console.writeln(new Boolean(0).valueOf()); // false
console.writeln(new Boolean('').valueOf()); // false
console.writeln(new Boolean(null).valueOf()); // false

console.writeln(`\nLA DIRECCIÖ d'un objecte, independentment del seu valor, al aplicarli coerció a boolean -> TRUE`)
console.writeln(new Boolean([]).valueOf()); // true
console.writeln(new Boolean({}).valueOf()); // true
console.writeln(new Boolean(new Boolean(false)).valueOf()); // true
if (new Boolean(false)){
  console.writeln(`Increible!!!`); // Increible!!!
}

