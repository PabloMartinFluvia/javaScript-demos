const { Console } = require("console-mpds");

const consoleMPDS = new Console();

consoleMPDS.writeln("Tenim una classe, que el que fa es donar d'alta un mètode al objecte que arrivi per paràmetre\n")

function Setter() {
  this.attribute = `lo que sea`;

  this.setWithArrow = function(object){
    object.methodArrow = () => {
      consoleMPDS.writeln(`Al ser dins d'una funcio fletxa, this és la direcció que tindria 
    en el context que engloba la declaració del mètode ->
    context: mètode d'un objecte -> enllaç impliciit -> this es el setter`)  
      consoleMPDS.writeln(`this.attribute: ${this.attribute}`); 
    }

    ////////////// Equivalent a, per clousure, fer:
    /*
    let that = this;
    object.method = function(){
      console.writeln(`this.attribute: ${that.attribute}`);
    }
      */
  }

  this.test = value => {
    this.attribute = value;
    consoleMPDS.writeln(`\nThis está en una funció flexta
    context: dins del context de la funció constructora -> enllaç d'instancia -> this es el setter`)
  }
  ////////////// Equivalent a, per clousure, fer:
  /*
  let that = this;
  this.test = value => {
    that.attribute = value;
  }
  */
}

let setter = new Setter();
let object = {};

setter.setWithArrow(object);
object.methodArrow(); // this.attribute: lo que sea

setter.test('prova');
consoleMPDS.writeln(setter.attribute); // this.attribute: prova

consoleMPDS.writeln(`\nPro`)
function free() {
    let object = {
        attribute: 'algu',
        method: function() {
            consoleMPDS.writeln(this.attribute); // algu
        },
        arrow: () => {
            console.log(this.attribute); // undefined
            console.log(this); // ?? un objecte global amb propietats predefinides
        },
        //let that = this; // error de compilació, 
        // ja que al declarar el valor literal d'un objecte només puc escriure sentencies rollor propietat: valor.

        // Equivaldria a:
        /*
        arrow: () => {
            console.log(that.attribute); // undefined            
        },
        */
        // posant let that = this fora de la declaració del objecte, i accedint-hi per clousure:
    }
    

    object.method(); 
    object.arrow(); 
    console.log(this); // ídem a la línia 44. ?? un objecte global amb propietats predefinides
}

free();


