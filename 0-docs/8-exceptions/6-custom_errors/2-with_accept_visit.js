class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }

    accept(visitor) {
        visitor.visitCustomError(this);
    }
}

// manipular classe propia de javascript
RangeError.prototype.accept = function(visitor) {
    visitor.visitRangeError(this);
}

const object = {
    method() {
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
            if (exception.accept !== undefined) {
                exception.accept(this);
            } else {
                console.log("Acciones catch: tipo de error no previsto");
                throw exception;
            }
        }
        console.log(`Sentencia posterior`);
    },

    visitCustomError(customError) {
        console.log("Acciones catch de CustomError: " + customError.name + ": " + customError.message);
    },

    visitRangeError(customRangeError) {
        console.log("Acciones catch de RangeError: " + customRangeError.name + ": " + customRangeError.message);
    }
}

object.method();