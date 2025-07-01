import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class NumberCoercion extends Test {
    constructor() {
        super("muberCoercion")
    }

    test() {
        this.firstHipotesis();
        this.secondHipotesis();
        this.thirdHipotesis();
    }

    firstHipotesis() {
        const values = [
            null, undefined,
            true, false,
        ]
        const title = "Valores null / undefined / boolean --> Conversión directa <br>\
        Notar que <b>null</b> --> <b>0</b>";
        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id, value => value === null);
        hipotesis.eval(value => +value, '+value');
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const values = [
            "", "0", "1", "Infinity", "NaN", "1a", "true", "undefined"
        ]
        const title = 'Valores string:<br>\
        Caso 1) Cadena vacía <b>""</b> --> <b>0</b> <br>\
        Caso 2) Cadena "equivalente" a un valor númerico --> el número <br>\
        Caso 3) Cualquier otro caso --> NaN' ;
        const id = this.articleId + "2";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => +value, '+value');
        this.hipotesis.push(hipotesis);
    }

    thirdHipotesis() {
        const values = [
            [], [[]], [undefined], [null], [""], [0], [1], ["1"], [NaN], [true], [1,undefined, "a","bc"], [{}], [function () {}],
            {}, { a: 0, 0: "item", undefined: 'ok' },      
            function () { },   
        ]
        const title = 'Valores no primitivos (not null):--> <br>\
        1)<b>Primero</b> se fuerza la <b>coerción a String</b> <br>\
        2)Luego ya se aplica la coerción a Number'
        
        const id = this.articleId + "3";

        const hipotesis = new Hipotesis(title, values, id, value => 
            value[0] === true
            ||  Hipotesis.toLiteralCodeString(value) === "[undefined]");
        hipotesis.eval(value => +value, '+value');
        hipotesis.eval(value => "" + value, '1) "" + value', true);
        hipotesis.eval(value => +value, '2) +previous');
        this.hipotesis.push(hipotesis);
    }

    
}