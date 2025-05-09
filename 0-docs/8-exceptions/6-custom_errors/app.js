class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

console.log(`Sentencia previa`);
try {
    if (Math.random() < 0.5) {
        throw new RangeError("descripcion");
    } 
    if (Math.random() < 0.5) {
        throw new CustomError("descripcion");
    }
    if (Math.random() < 0.5) {
        throw "error no previsto";
    }
    console.log("Sentencia ejecutada?");
} catch (exception) {
    if (exception instanceof RangeError) {
        console.log("Acciones catch si RangeError: " + exception.name + ": " + exception.message);
    } else if (exception instanceof CustomError) {
        console.log("Acciones catch de CustomError: " + exception.name + ": " + exception.message);
    } else {
        console.log("Acciones catch: tipo de error no previsto");
        throw exception;
    }
}
console.log(`Sentencia posterior`);
