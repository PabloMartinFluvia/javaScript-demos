const { Console } = require("console-mpds");

const console = new Console();

class Base {

    #attribute;
    publicSameName;

    #privateConstant;

    constructor(parameter) {
        this.#attribute = parameter;
        this.publicSameName = 'public attribute in Base';
        this.#privateConstant = 'CONSTANT EN BASE';
    }

    methodA() {
        console.writeln(`Base - A: attribute: ${this.#attribute}`);
    }

    methodB() {
        console.writeln(`Base - B: attribute: ${this.#attribute}`);
    }

    methodC() {
        console.writeln(`Base - C: attribute: ${this.#attribute}`);
    }

    getPublicAttributeSameName() {
        return this.publicSameName;
    }

    methodInBaseWithCallToPrivateMethodInBase() {
        console.writeln(`\nExecució d'un mètode públic definit en la Base, el cual crida a un mètode privat de la base:`)
        this.#privateMethodInBase();
    }

    #privateMethodInBase() {
        console.writeln('private method in base result');
    }

    getPrivateBaseConstant() {
        return this.#privateConstant;
    }

}

class Derived extends Base {

    #attribute;
    publicSameName; 

    constructor(superParameter, derivedParameter){
        super(superParameter);
        this.#attribute = derivedParameter;
        this.publicSameName = 'public attribute in Derived'
    }

    // El method A, al transmetre's integrament -> this.#attribute és el de la classe Derived

    methodB() {
        console.writeln(`Method B 'tunned':`)
        console.writeln(`Derived - B: attribute: ${this.#attribute}`);
        super.methodB();
        console.writeln(`Derived - B: attribute: ${this.#attribute}`);
    }
    
    methodC() {
        console.writeln(`Method C 'full overrided':`)
        console.writeln(`Derived - C: attribute: ${this.#attribute}`);
    }
    
    methodD() {
        console.writeln(`New method D 'added':`)
        console.writeln(`Derived - D: attribute: ${this.#attribute}`);
    }

    // El method getPublicSameName, al transmetre's integrament -> this.publicSameName és el de la classe Derived
    
    writePublicSameName() {
        console.writeln(`\nAl tenir en les 2 classes un atribut public amb el mateix nom: el de la derivada 'sobreescriu' el de la base`)
        console.writeln(`Method writePublic: public same name in Derived (property acces) = ${this.publicSameName}`); // 'public attribute in Derived'
        console.writeln(`Method writePublic: public same name in Base (property acces) = ${super.publicSameName}`); // undefined
        console.writeln(`Method writePublic: public same name in Base (super.get acces) = ${super.getPublicAttributeSameName()}`); // 'public attribute in Derived'        
    }

    methodInDerivedWithCallToPrivateMethodInBase() {
        console.writeln(`\nDes d'un mètode definit en la classe Derivada no es pot accedir a un mètode privat de la classe Base`)
         //this.#privateMethodInBase(); // error de compilació
         //super.#privateMethodInBase(); // error de compilació
    }

    methodInDerivedWithAccesToPrivatePropertyInBase() {
        console.writeln(`\nAccedir, des de la derivada, a una propietat privada definida en la base:`)
        //console.writeln(super.#privateConstant); // error de compilació        
        //console.writeln(this.privateConstant); // undefined
        //console.writeln(this.#privateConstant); // error de compilació
        console.writeln(this.getPrivateBaseConstant()); 

        // cridar super només tindria sentit si en la base hagés sobreescrit el getter.
        console.writeln(super.getPrivateBaseConstant()); 

        console.writeln(`Els membres privats NO es transmeten, però són accessibles des de mètodes públics transmesos per la base (clousures?).`)
    }
}

let object = new Base(`base`);
object.methodA();
object.methodB();
object.methodC();
console.writeln(object.publicSameName);
console.writeln(object.getPublicAttributeSameName());

object = new Derived(`super`, `specialization`);
object.methodA();
object.methodB();
object.methodC();
object.methodD();
console.writeln(object.publicSameName);
console.writeln(object.getPublicAttributeSameName());
object.writePublicSameName();

object.methodInBaseWithCallToPrivateMethodInBase();
object.methodInDerivedWithCallToPrivateMethodInBase();

object.methodInDerivedWithAccesToPrivatePropertyInBase();
