const { Console } = require("console-mpds");

const console = new Console();

function Base(attribute) {

    let methodA = function () {
        console.writeln(`Base - A: attribute: ${attribute}`);
    };

    let methodB = function () {
        console.writeln(`Base - B: attribute: ${attribute}`);
    };

    let methodC = function () {
        console.writeln(`Base - C: attribute: ${attribute}`);
    };

    let getBaseAttribute = function () {
        return attribute;
    }

    let methodInBaseWithCallToPrivateMethodInBase = function() {
        console.writeln(`\nExecució d'un mètode públic definit en la Base, el cual crida a un mètode privat de la base:`)
        privateMethodInBase();
    }

    let privateMethodInBase = function () {
        console.writeln(`private method in base result: ${attribute}`);
    }

    return {
        methodA,
        methodB,
        methodC,
        getBaseAttribute,
        methodInBaseWithCallToPrivateMethodInBase
    }
}

function Derived(attribute, other) {
    let base = new Base(attribute)

    let methodB = function () {
        console.writeln(`Derived - B: other: ${other}`);                
        base.methodB.call(this); 
        //base.methodB(); // també es funcionaria, si el methodB NO menciona this. etc
    };

    let methodC = function () {
        console.writeln(`Derived - C: other: ${other}`);
    };

    let methodD = function () {
        console.writeln(`Derived - D: other: ${other}`);
    };

    let writeBaseAttribute = function () {
        console.writeln(`Al ser els atributs privats, per accedir als atributs de la base cal fer-ho a través de mètodes retornats en la Base`)
        console.writeln(base.getBaseAttribute());
    }    

    return {
        ...base,
        ... {
            methodB,
            methodC,
            methodD,
            writeBaseAttribute
        }
    }
}

let object = new Base(`base`);
object.methodA();
object.methodB();
object.methodC();
//console.writeln(object instanceof Base);
//console.writeln(object instanceof Derived);
object.methodInBaseWithCallToPrivateMethodInBase();

object = new Derived(`derived`, `specializations`);
object.methodA();
object.methodB();
object.methodC();
object.methodD();
//console.writeln(object instanceof Base);
//console.writeln(object instanceof Derived);
object.writeBaseAttribute();
console.writeln(object.getBaseAttribute()); // funciona pk el get, al ser públic, es transmet
object.methodInBaseWithCallToPrivateMethodInBase();