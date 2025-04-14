const { Console } = require("console-mpds");

const consoleMPDS = new Console();

consoleMPDS.writeln(`1) Tenim una funcio d'ordre superior que reb una funció:`);
function highOrderFunction(zunction){
  for(let num of [1,2,3]){
    zunction(num);
  }
}

consoleMPDS.writeln(`2) Tenim un objecte. I volem subministrar a la funció d'ordre superior un dels seus mètodes:`);

function Clazz(num) {
    this.attribute = num;

    this.methodToProvide = function (num){     
        console.log(num);
        console.log(this.attribute);   
    }

    this.badTest = function () {        
        highOrderFunction(this.methodToProvide) // ERROR: s'està subministrant una funció SENSE CONTEXT 
                                                // -> enllaç per defecte -> this.attribute és undefined
        //highOrderFunction(Clazz.methodToProvide) // ERROR: s'està subministrant undefined, enlloc d'una funció
    }

    this.goodTest = function () {
        const functionWithContext = this.methodToProvide.bind(this);
        highOrderFunction(functionWithContext)
    }

}

let object = new Clazz(100);
object.badTest();
consoleMPDS.writeln();
object.goodTest();





