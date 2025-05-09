console.log(`1) try-catch-finally(?) interno: captura interna + finally interno(?) + finally sentencia (?) + etc`)
try {
    throw 'error lanzado para que se ejecute el catch';
} catch (ex) {
    try {
        throw "error";
        console.log('nunca se llega');
    } catch (e) {
        console.log(`\tBloque catch INTERNO`);
    } finally {
        console.log(`\tBloque finally INTERNO`)
    }
    console.log('\tfinal bloque catch de la sentencia');    
} finally {
    console.log(`\tbloque finally de la sentencia`);
}

console.log(`2) try-finally interno: finally interno + finally externo(?) + EXCEPTION`)
try {
    throw 'error lanzado para que se ejecute el catch';
} catch (ex) {
    try {
        throw "error";
        console.log('nunca se llega');    
    } finally {
        console.log(`\tBloque finally INTERNO`)
    }
    console.log(`nunca se llega`); 
} finally {
    console.log(`\tbloque finally de la sentencia`);
}
console.log(`nunca se llega`);