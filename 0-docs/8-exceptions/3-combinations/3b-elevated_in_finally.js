try {
    console.log(`1) try-catch-(?)finally interno: catch interno + (?)finally interno + continua finally sentencia`)
     //throw 'error del try se eleva si NO hay catch'; // -> EXCEPTION SI NO CATCH
} catch (ex) {
    throw 'error del catch ignorado !!!';        
} finally {
    console.log(`\tInicio ejecución bloque finally`)
    try {
        throw 'error';
    }catch(ex) {
        console.log(`\tBloque catch interno`)
    } finally {
        console.log(`\t(?) Bloque finally interno`)
    }    
    console.log(`\tFinal ejecución bloque finally`)
}

try {
    console.log(`2) try-finally interno: finally interno + EXCEPTION`)
    throw 'error del try se ignora, incluso sin catch'; 
} catch (ex) {
    throw 'error del catch ignorado !!!';        
} finally {
    console.log(`\tInicio ejecución bloque finally`)
    try {
        throw 'error';
    } finally {
        console.log(`\tBloque finally interno`)
    }    
    console.log('no se llega');
}
console.log('no se llega');