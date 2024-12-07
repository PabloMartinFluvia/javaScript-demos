const { Console } = require("console-mpds");

const console = new Console();

console.writeln(`Lo aconsellat es llançar missatges a valors primitius (o variables amb valors primitius)`)
const numObj = 12345.6789;
console.writeln(numObj.toFixed()); // 12346
console.writeln(numObj.toFixed(0)); // 12346
console.writeln(numObj.toFixed(1)); // 12345.7
console.writeln(numObj.toFixed(6)); // 12345.678900
console.writeln(1.23e+20.toFixed(2)); // 123000000000000000000.00
console.writeln(1.23e-10.toFixed(2)); // 0.00
console.writeln(2.34.toFixed(1)); // 2.3
console.writeln(typeof 2.34.toFixed(1)); // string
console.writeln(2.35.toFixed(1)); // 2.4
console.writeln(-2.34.toFixed(1)); // -2.3
console.writeln(-2.35.toFixed(1)); // -2.4
console.writeln((2).toFixed(1)); // 2.0

console.writeln(`\nUtilitzant la funció constructora: DESACONSELLAT`)
const expression = `123`;
console.writeln(Number(expression)); // 123
console.writeln(new Number(expression)); // 123
console.writeln(+(expression)); // 123
console.writeln(new Number(expression).toFixed(2)); // 123.00