const { Console } = require("console-mpds");

const console = new Console();

class Base {
   #name; 

    constructor(name) {
       this.#name = name;
    }

    abstractBaseMethod() {
        console.writeln(`Init process in object: ${this.#name} `);
        //this.#abstractMethod(); // error de compilació
        this.abstractMethod(); 
        console.writeln('End process.');
    }
  }
  
  class Derived extends Base {
    
    constructor(name){
       super(name);       
    }

    abstractMethod() {
      console.writeln(`Process in Derived`);
    }
      
  }

  new Derived('test').abstractBaseMethod();
  console.writeln(`\nConclusió:
Abstract Method a definir en la derivada NO pot ser privat
   Ja que la Derivada l'ha de poder redefinir
   Ja que en la Base m'obligaria ha declarar la funció.`);

   // new Base('error').baseMethod(); // error, ja que el mètode no està declarat