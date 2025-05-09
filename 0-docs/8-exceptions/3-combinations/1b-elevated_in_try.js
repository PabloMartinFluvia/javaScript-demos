try {

    //////////////////////////////////////////////////////////////////////

    try {
        try {
            throw "peta en try-finally";
        } finally {
            console.log('\tEjecucón bloque finally sentencia');
        }
        console.log('nunca se llega');
    } finally {
        console.log('\tEjecucón bloque finally global');
    }
    console.log('nunca se llega');
    
    //////////////////////////////////////////////////////////////

} catch (ex) {
    console.log('muy por encima se gestiona');
}
