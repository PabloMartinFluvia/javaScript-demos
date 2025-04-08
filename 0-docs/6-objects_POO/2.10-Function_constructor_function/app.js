const { Console } = require("console-mpds");

const console = new Console();


console.writeln(`Situación inicial:
    1) Tenemos un objeto "típico"
    2) Tenemos un algoritmo/función que hace:
        Parte Inicial
        Parte Intermedia -> esta parte se suministra (función como algoritmo).
            En un caso particular se quiere que la parte intermedia haga object.write()
        Parte Final`);


let object = {
    attribute: "SomeValue",
    write() {
        console.write(`attribute: ${this.attribute}`);
    }
};

let functionToProvide;

let superior = function (functionProvided){
    console.write(`Antes [ `);
    functionProvided();
    console.writeln(` ] Despues`);
}

console.writeln(`\nPassar la funció object.write no funciona, 
    ja que la funció d'ordre superior només reb la funció write,
    i al cridar-la, al ja no estar lligada a l'objecte,
    no sabrá a que es rebereix quan s'evalui el this de la funció write`);
functionToProvide = object.write;
superior(functionToProvide); // Antes [ attribute: undefined ] Despues

console.writeln(`\nUna solució és passar una funció anónima, que internament executa la sentencia
    object.write(), i així el this sabrá a quin objecte es refereix`);
functionToProvide = function () {
    object.write(); 
};
superior(functionToProvide); // Antes [ attribute: SomeValue ] Despues
functionToProvide = () => object.write();
superior(functionToProvide); // Antes [ attribute: SomeValue ] Despues

console.writeln(`\n someFunction.bind(object) proporciona una funció que, quan es cridi:
    el 'this' es refereix a l'objecte que s'ha proporcionat com argument`);
const functionWithoutContextForThis = object.write;
functionToProvide = functionWithoutContextForThis.bind(object);
superior(functionToProvide); // Antes [ attribute: SomeValue ] Despues
console.writeln(`Prova de canviar el context d'una funció`)
let other = {
    attribute: "OtherValue",
    // -> NO té write method
}
functionToProvide = functionWithoutContextForThis.bind(other);
superior(functionToProvide); // Antes [ attribute: OtherValue ] Despues
console.writeln(`El bind s'ha d'aplicar a una funció SENSE CONTEXT, 
    Obs: si ja té un context vinculat i s'intenta vincular a un altre -> el canvi NO es produeix`);
superior(functionToProvide.bind({attribute: "Final"})); // Antes [ attribute: OtherValue ] Despues
console.writeln(`La funció empleada no ha canviat el context, segueix vinculada a l'objecte other`)

console.writeln(`\nTenim una funció que accepta N arguments, i els tinc guardats en un array`);
let numbers = [5, 6, 2, 3, 7];
console.writeln(`Opció Moderna: utilitzar l'operador de esparcimiento ...array`);
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.writeln(`Max: ${max} - Min: ${min}`); // Max: 7 - Min: 2
console.writeln(`Opció Antiga: cridar al mètode apply de la funció
    Obs: en aquest cas el primer argument és null, ja que aquest mètodes no necessiten
    que se li dongui context, ja que el cos no emplea cap 'this'`);
max = Math.max.apply(null, numbers);
min = Math.min.apply(null, numbers);
console.writeln(`Max: ${max} - Min: ${min}`); // Max: 7 - Min: 2
console.writeln(`el mètode call difereix respecte apply en que els arguments s'han de proporcionar individualment`)
max = Math.max.call(null, ...numbers);
min = Math.min.call(null, ...numbers);
console.writeln(`Max: ${max} - Min: ${min}`); // Max: 7 - Min: 2

console.writeln(`\nEn cas de que tingui que aplicar diferents funcions a un mateix conjunt d'arguments:`);
[max, min] = [Math.max, Math.min].map(f => f(...numbers)); // versió moderna
console.writeln(`Max: ${max} - Min: ${min}`); // Max: 7 - Min: 2
[max, min] = [Math.max, Math.min].map(f => f.apply(null, numbers)); // amb apply
console.writeln(`Max: ${max} - Min: ${min}`); // Max: 7 - Min: 2
[max, min] = [Math.max, Math.min].map(f => f.call(null, ...numbers)); // amb call
console.writeln(`Max: ${max} - Min: ${min}`); // Max: 7 - Min: 2
