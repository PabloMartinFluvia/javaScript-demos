const { Console } = require("console-mpds");

const console = new Console();

let Base = function (parameter) {
    let that = {
        attribute: parameter,
    };

    return {
        methodA() {
            console.writeln(`Base - A: attribute: ${that.attribute}`);
        },
        methodB() {
            console.writeln(`Base - B: attribute: ${that.attribute}`);
        },
        methodC() {
            console.writeln(`Base - C: attribute: ${that.attribute}`);
        },

        callMethodWithThisWithoutOverride() {
            this.methodWithoutOverride();
        },

        methodWithoutOverride() {
            console.writeln(`Base Method without Override`);
        },

        callMethodWithThisWithOverride() {
            this.methodToOverride();
        },

        methodToOverride() {
            console.writeln(`Base Method, will be overrided`);
        }

    };

}

let Derived = function (parameter, other) {
    let base = Base(parameter);
    let that = {        
            other: other
        };
        
    return Object.assign({},
        base, 
        {
        methodB() {
            console.writeln(`Derived - B: attribute: ${that.other}`);
            base.methodB.call(this); //   el that de methodB en base està lligat al that de Base per clousure         
            //base.methodB(); // també es funcionaria, si el methodB NO menciona this etc
        },
        methodC() {
            console.writeln(`Derived - C: attribute: ${that.other}`);
        },
        methodD() {
            console.writeln(`Derived - D: attribute: ${that.other}`);
        },

        methodToOverride() {
            console.writeln(`Derived Method, Overrides Base's`);
        }
    });
}

let object = new Base(`base`);
object.methodA();
object.methodB();
object.methodC();
object.callMethodWithThisWithoutOverride();
object.callMethodWithThisWithOverride();

object = new Derived(`derived`, `specializations`);
object.methodA();
object.methodB();
object.methodC();
object.methodD();
object.callMethodWithThisWithoutOverride();
object.callMethodWithThisWithOverride();
