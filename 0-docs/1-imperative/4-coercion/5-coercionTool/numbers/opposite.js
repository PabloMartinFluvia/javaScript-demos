import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Opposite extends Test {
    constructor() {
        super("opposite")
    }

    test() {
        this.firstHipotesis();
        this.secondHipotesis();
        this.thirdHipotesis();
    }

    firstHipotesis() {
        const values = [
            0, 1, -1, Infinity, NaN
        ]
        const title = "Valores numéricos";
        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => -value, '-value');
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const values = [
           null, undefined,
           true, false,
           "", "0", "1", "Infinity", "NaN", "'0'", "[0]", "true", "undefined"
        ]
        const title = "Valores null / undefined / boolean / string --> <br>\
        1) Coerción a número<br>\
        2) Operar";
        const id = this.articleId + "2";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => -value, '-value');
        hipotesis.eval(value => +value, '1) +value', true);
        hipotesis.eval(value => -value, '2) -prev');
        this.hipotesis.push(hipotesis);
    }

    thirdHipotesis() {
        const values = [
            [], [[]], [undefined], [""], [0], [1], ["1"], [NaN], [true], [1,undefined, "a","bc"], [{}], [function () {}],
            {}, { a: 0, 0: "item", undefined: 'ok' },      
            function () { },   
        ]
        const title = 'Valores no primitivos (not null):--> <br>\
        1) <b>Primero</b> se fuerza la <b>coerción a String</b> <br>\
        2) Luego se fuerza la coerción a Number<br>\
        3) Operar'
        
        const id = this.articleId + "3";

        const hipotesis = new Hipotesis(title, values, id, value => 
            value[0] === true
            ||  Hipotesis.toLiteralCodeString(value) === "[undefined]");
        hipotesis.eval(value => -value, '-value');
        hipotesis.eval(value => "" + value, '1) "" + value', true);
        hipotesis.eval(value => +value, '2) +previous');
        hipotesis.eval(value => -value, '3) -previous');
        this.hipotesis.push(hipotesis);
    }
}