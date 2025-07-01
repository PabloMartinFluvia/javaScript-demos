import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class BooleanCoercion extends Test {
    constructor() {
        super("booleanCoercion")
    }

    test() {
        this.firstHipotesis();
        this.secondHipotesis();
    }

    firstHipotesis() {
        const values = [
            null, undefined,
            NaN, 0, 1, 5, Infinity,
            "", "0", "1", "5", "Infinity", "NaN", "'0'", "[0]", "true", "undefined"            
        ]
        const title = 'Valores null i primitivos --> coerción directa<br>\
        Valors falsables: <b>false, null, undefined, NaN, 0, ""</b><br>\
        Notar que <b>!!"0": true</b>'
        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id, value => value === false);
        hipotesis.eval(value => !!value, '!!value');
       
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const values = [            
            [], [[]], [""], [undefined], [null], [false], [NaN], [0], [1] , [1, undefined, "a", "bc"], [function () { }],
            {}, { a: 0, 0: "item", undefined: 'ok' },
            function () { },
        ]
        const title = 'Operando NO primitivo --> siempre <b>true</b><br>\
        Prueva de que <b>NO hay coerción intermedia a String</b> --> !![]: true, pero !!"" : false';
        const id = this.articleId + "2";

        const hipotesis = new Hipotesis(title, values, id, value => value === true);
        hipotesis.eval(value => !!value, '!!value');
        hipotesis.eval(value => "" + value, 'Bad hipotesis 1) "" + value', true);
        hipotesis.eval(value => !!value, 'Bad hipotesis 2) !!prev');

        this.hipotesis.push(hipotesis);
    }
}