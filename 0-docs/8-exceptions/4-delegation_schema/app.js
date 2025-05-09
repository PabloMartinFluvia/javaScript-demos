function outside() {
    console.log(`Sentencia previa app`);
    try {
        inside();
        console.log('Sin error o con error gestionado completamente (app no lo sabe).');
    } catch (exception) {
        console.log(`Con error: 
            hasta que no se mire la excepció no se sabrá si es DELEGADA o GESTIONADA PARCIALMENTE`);
        console.log("App captura excepción: " + exception);
    }
    console.log(`Sentencia posterior app`);
}

function inside() {
    console.log(`Sentencia previa a llamada a la biblioteca`);
    try {
        library();
        console.log("Llamada a la biblioteca con ÉXITO.");
    } catch (exception) {
        console.log("Acciones catch del cliente de la biblioteca: " + exception);
        // no gestiona nada
        if (Math.random() < 0.5) {
            console.log('Cliente de la biblioteca DELEGA la gestión del error');
            throw exception;
        }
        // gestiona parcialmente
        if (Math.random() < 0.5) {
            console.log('Cliente de la biblioteca GESTIONA PARCIALMENTE el error');
            throw `${exception} parcialmente gestionado`; 
        }
        // gestion completa
        console.log('Cliente de la biblioteca ha gestionado COMPLETAMENTE el error');
    }
    console.log(`Sentencia posterior al intentar llamar a la biblioteca.`);
}

function library() {
    if (Math.random() < 0.5) {
        throw "Error biblioteca";
    }
}

outside();
console.log("---");

