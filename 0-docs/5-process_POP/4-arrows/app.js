const { Console } = require("console-mpds");

const console = new Console();

console.writeln('params >= 2');
let anominaDosOMasParametros = 
  function(x, y) { 
    x++; 
    y++; 
    console.writeln(x+y); 
  };
console.writeln(typeof anominaDosOMasParametros); // function
console.writeln(anominaDosOMasParametros); // function(x,y) ...
console.writeln(anominaDosOMasParametros(1, 2)); // 5

let flechaDosOMasParametros = // estalvi: 'function'
  (x, y) => { 
              x++; 
              y++; 
              console.writeln(x+y); 
            }; 
console.writeln(typeof flechaDosOMasParametros); // function
console.writeln(flechaDosOMasParametros); // (x, y) => ....
console.writeln(flechaDosOMasParametros(1, 2)); // 5

console.writeln('\nparams = 1');
let anominaUnParametro = 
  function(x) { 
    x++; 
    console.writeln(x); 
  };
console.writeln(typeof anominaUnParametro); // function
console.writeln(anominaUnParametro); // function(x) ....
console.writeln(anominaUnParametro(1)); // 2

let flechaUnParametro = // estalvi: 'function' + paréntesis
  x => { 
        x++; 
        console.writeln(x); 
      };
console.writeln(typeof flechaUnParametro); // function
console.writeln(flechaUnParametro); // x => ....
console.writeln(flechaUnParametro(1)); // 2

console.writeln('\nparams = 0');
let anominaCeroParametros = 
  function() { 
    console.writeln(0); 
  };
console.writeln(typeof anominaCeroParametros); // function
console.writeln(anominaCeroParametros); // function() ....
console.writeln(anominaCeroParametros()); // 0

let flechaCeroParametros = // estalvi: 'function'
  () => { 
          console.writeln(0); 
        };
console.writeln(typeof flechaCeroParametros); // function
console.writeln(flechaCeroParametros); // () => ....
console.writeln(flechaCeroParametros()); // 0

console.writeln('\nonly return');
let anominaSoloRetorno = 
  function(x) { 
    return x+1; 
  };
console.writeln(typeof anominaSoloRetorno); // function
console.writeln(anominaSoloRetorno); // function(x) ....
console.writeln(anominaSoloRetorno(1)); // 2

let flechaSoloRetorno = // estalvi: 'function' y llaves/'return' (y parentesis per aquest cas amb un sol parametre)
  x => x+1;
console.writeln(typeof flechaSoloRetorno); // function
console.writeln(flechaSoloRetorno); // x => x+1
console.writeln(flechaSoloRetorno(1)); // 2

// 4 maneres análogues de passar una funció anónima o flecha com a argument
let double = function(x) { 
  return 2*x; 
} // 1 parametre + 1 sola sentencia return
console.writeln(sum(1, 10, double)); // 110
console.writeln(sum(1, 10, (x) => { return 2*x; })); // 110 // sense 'function'
console.writeln(sum(1, 10, x => { return 2*x; })); // 110 // ni parentesis
console.writeln(sum(1, 10, x => 2*x)); // 110 // ni llaves/'return'/';'

function sum(from, to, operation) {
  let result = 0;
  for(let i=from; i<=to; i++){
		result += operation(i);
  }
  return result;
}






