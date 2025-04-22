const { Console } = require("console-mpds");

const console = new Console();

class Person {

  #name;
  #surname;

    constructor(string){
      this.completeName = string;
    }

    get completeName() {
      return `${this.#name} ${this.#surname}`
    }

    set completeName(string) {
      const words = string.split(` `);
      this.#name = words[0] ?? ` `;
      this.#surname = words[1] ?? ` `;
    }

  }
  
  let person = new Person(`Eich Brendan`)
  console.writeln(person.completeName); 
  person.completeName = `James Gosling`;  
  console.writeln(person.completeName); 


