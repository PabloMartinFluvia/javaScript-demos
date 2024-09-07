const { Console } = require("console-mpds");

const console = new Console();

console.writeln("Test amb una funció nominal 'normal':");
const isDivisible = function (mod, num) {
    return num % mod === 0;
}
console.writeln(isDivisible(2, 111)); // false
console.writeln(isDivisible(2, 110)); // true
console.writeln(isDivisible(3, 111)); // true
console.writeln(isDivisible(3, 110)); // false

console.writeln("\nFunció currificada. Invocació directa: f(x)(y)");
const isDivisibleCurry = function (mod) {
    return function (num) {
        return num % mod == 0;
    }
}
console.writeln(isDivisibleCurry(2)(111)); // false
console.writeln(isDivisibleCurry(2)(110)); // true
console.writeln(isDivisibleCurry(3)(111)); // true
console.writeln(isDivisibleCurry(3)(110)); // false

console.writeln("\nFunció currificada. Invocació per etapes: f(x) -> gX; gX(y)");
const isDivisible2 = isDivisibleCurry(2);
console.writeln(isDivisible2(111)); // false
console.writeln(isDivisible2(110)); // true
const isDivisible3 = isDivisibleCurry(3);
console.writeln(isDivisible3(111)); // true
console.writeln(isDivisible3(110)); // false

console.writeln("\nFunció currificada. Declarada segons lèxic de funció flecha");
const isdivisibleCurryArrow = mod => num => num % mod === 0; // f: mod -> g_mod; g_mod: num -> result;
console.writeln("Invocació directa");
console.writeln(isdivisibleCurryArrow(2)(111)); // false
console.writeln(isdivisibleCurryArrow(2)(110)); // true
console.writeln(isdivisibleCurryArrow(3)(111)); // true
console.writeln(isdivisibleCurryArrow(3)(110)); // false
console.writeln("Invocació per etapes");
const isDivisible2Arrow = isdivisibleCurryArrow(2);
console.writeln(isDivisible2Arrow(111)); // false
console.writeln(isDivisible2Arrow(110)); // true
const isDivisible3Arrow = isdivisibleCurryArrow(3);
console.writeln(isDivisible3Arrow(111)); // true
console.writeln(isDivisible3Arrow(110)); // false
