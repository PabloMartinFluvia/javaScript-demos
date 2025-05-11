import { Console } from "console-mpds";

const console = new Console();

function sleep(millis){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), millis);
  });
}

async function main(millis){
  const undefinedValue = await sleep(millis);
  console.writeln('Sentencia ejecutada cuando la Promesa dormir se resuelve');  
  console.writeln(`Estuve haciendo "nada" ${millis/1000} segundos. ${undefinedValue}`);
  await sleep(millis)
  console.writeln(`Estuve haciendo "nada" ${millis/1000} segundos.`);
  console.writeln(`Proceso en la función asíncrona dura ${2*millis/1000} segundos`)
}
  
main(3000);
main(1000);
console.writeln(`Acción posterior?!?`);
