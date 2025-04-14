const { Console } = require("console-mpds");

const consoleMPDS = new Console();

function zunction(value) {
    consoleMPDS.write(`value: ${value}. `);
    consoleMPDS.writeln(`this.attribute: ${this.attribute}`);    
}

consoleMPDS.writeln(`Llamada a la función libre a pelo -> enlace por defecto`);
zunction('por defecto'); // value: por defecto. this.attribute: undefined   


consoleMPDS.writeln(`\nEnllaçar explicitament la funció a un objecte:`)

let object1 = {
    attribute: `lo que sea`
};

//object1.bindedZunction(); ERROR: bindedZunction és undefined -> error al cridar-lo com a funcio
zunction.call(object1, `algo`); // value: algo. this.attribute: lo que sea
zunction.apply(object1, [`algo`]); // value: algo. this.attribute: lo que sea
let bindedZunction = zunction.bind(object1);
bindedZunction(`algo`); // value: algo. this.attribute: lo que sea


let object2 = {
    attribute: `nada`
};

zunction.call(object2, `otro`); // value: otro. this.attribute: nada
zunction.apply(object2, [`otro`]); // value: otro. this.attribute: nada
bindedZunction = zunction.bind(object2);
bindedZunction(`otro`); // value: otro. this.attribute: nada
// object2.bindedZunction(); ERROR: bindedZunction és undefined -> error al cridar-lo com a funcio