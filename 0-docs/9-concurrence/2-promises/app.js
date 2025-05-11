import { Console } from 'console-mpds';

const console = new Console();

function sleep(millis) {    
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => resolve(), millis);
        });
}

function main(millis) {
    sleep(millis * 2)
        .then(() => console.writeln(`Estuve haciendo "nada" ${millis * 2 / 1000} segundos`));
    sleep(millis)
        .then(() => console.writeln(`XXXXX durante ${millis / 1000} segundos`));
}

main(3000);
console.writeln(`Acción posterior?!?`);



// en el cas onfulfilled no és una funció -> seria equivallent a :
let onfulfilled = (anyValue) => anyValue;
// en el cas onRejected no és una funció -> seria equivallent a :
let onRejected = (anyReason) => { throw anyReason; }

const promise = sleep(1000);
promise
    .then(onfulfilled, onRejected)
    .then(value => {
        console.writeln('Redefiniendo onFulfilled callback');
        console.writeln(`El value no tiene valor ${value} ya que la función asíncrona, al llamar a resolve, no le da ningún valor`)
    })
    .catch(error => {console.writeln("Redefiniendo onRejected callback:" + error.message)})
    .finally(() => {console.writeln('end test');});

promise.then(() => console.writeln('1) un cop la promesa està setted (fulfilled o rejected) puc resoldrela de múltiples maneres'));
promise.then(() => console.writeln('2) un cop la promesa està setted (fulfilled o rejected) puc resoldrela de múltiples maneres'));
promise.finally(() => {console.writeln('V2 end test');}); 
