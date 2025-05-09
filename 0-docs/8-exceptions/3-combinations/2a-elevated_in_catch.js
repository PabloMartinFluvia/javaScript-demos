console.log(`no se detecta: finally sentencia(?) + EXCEPTION`)
try {
    throw 'error lanzado para que se ejecute el catch';
} catch (ex) {
    throw "error";
    console.log(`nunca se llega`);     
} finally {
    console.log(`\tbloque finally de la sentencia`);
}
console.log(`nunca se llega`);