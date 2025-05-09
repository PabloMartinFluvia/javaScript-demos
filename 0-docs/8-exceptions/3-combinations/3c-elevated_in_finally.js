try {
    try {
        console.log(`1) try-catch-(?)finally global: catch global + (?)finally global`)
        throw 'error del try ignora, incluso sin catch'; 
    } catch (ex) {
        throw 'error del catch ignorado';  
    } finally {
        console.log(`\tInicio ejecución bloque finally`);
        throw 'error';
        console.log('no se llega');
    }
    console.log('no se llega');
} catch (ex) {
    console.log(ex);
    console.log(`\tBloque catch global`);
} finally {
    console.log(`\t(?)Bloque finally global`);
}

try {
    try {
        console.log(`\n2) try-finally global: catch global + finally global + EXCEPTION`)
        throw 'error del try se ignora, incluso sin catch'; 
    } catch (ex) {
        throw 'error del catch ignorado'; 
    } finally {
        console.log(`\tInicio ejecución bloque finally`);
        throw 'error';
        console.log('no se llega');
    }
    console.log('no se llega');
} finally {
    console.log(`\tBloque finally global`);
}

console.log('no se llega');