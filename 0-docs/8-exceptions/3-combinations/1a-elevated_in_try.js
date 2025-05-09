console.log(`1) Try-catch: es captura + continua`);
try {
    throw "error";
} catch (ex) {
    console.log('\tEjecucón bloque catch');
}

console.log(`\n2) Try-catch-finally: es captura + finally + continua`);
try {
    throw "error";
} catch (ex) {
    console.log('\tEjecucón bloque catch');
} finally {
    console.log('\tEjecucón bloque finally');
}

console.log(`\n3) Try-finally: finally + EXCEPTION`);
try {
    throw "peta en try-finally";
} finally {
    console.log('\tEjecucón bloque finally');
}
console.log('nunca se llega');