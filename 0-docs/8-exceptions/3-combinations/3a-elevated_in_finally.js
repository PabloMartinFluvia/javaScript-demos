try {
    console.log(`1) Sin capturar: EXCEPTION`)
    throw 'error del try';
} catch (ex) {
    throw 'error del catch';
} finally {
    console.log(`\tInicio ejecución bloque finally`)
    throw 'error';
    console.log('no se llega');
}
console.log('no se llega');