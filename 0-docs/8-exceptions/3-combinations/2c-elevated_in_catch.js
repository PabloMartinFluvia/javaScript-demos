console.log(`1) try-catch-finally(?) global: finally sentencia (?) + captura global + finally global(?) + etc`)
try {
    try {
        throw 'error lanzado para que se ejecute el catch';        
    } catch (e) {
        throw error;
        console.log(`nunca se llega`);
    } finally {
        console.log(`\tbloque finally de la sentencia`);
    }
    console.log(`\tfinal bloque try GLOBAL`)
} catch (ex) {
    console.log(`\tbloque catch GLOBAL`); 
} finally {
    console.log(`\tbloque finally GLOBAL`);
}

console.log(`1) try-finally global: finally sentencia (?) + finally global + EXCEPCION`)
try {
    try {
        throw 'error lanzado para que se ejecute el catch';        
    } catch (e) {
        throw error;
        console.log(`nunca se llega`);
    } finally {
        console.log(`\tbloque finally de la sentencia`);
    }
    console.log(`\tfinal bloque try GLOBAL`)
} finally {
    console.log(`\tbloque finally GLOBAL`);
}
console.log(`nunca se llega`);