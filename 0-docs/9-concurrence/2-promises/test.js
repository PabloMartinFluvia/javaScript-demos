const WAIT = 5000;
const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), WAIT);
});
const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), WAIT);
});

promiseA.then(value => {
    console.log(`Show result promise A`);
    promiseB.then(value => {
        console.log(`Show result promise B`);
    });
    console.log(`El tiempo transcurrido entre las 2 ejecuciones de los 'then' es IMPERCEPTIBLE,
        Pero estan en 2 FLUJOS DISTINTOS`);
});

console.log(`La pausa total dura ${WAIT/1000} secs, debido a que los 2 procesos asíncronos se han lanzado en paralelo al hacer los 'new Promise'`);