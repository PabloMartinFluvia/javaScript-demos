import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Negation extends Test {
    constructor() {
        super("neg")
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
        const title = 'Valores null i primitivos --> <br>\
        el contrario a su valor coercitado a boolean';
        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => !value, '!value');
       
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const values = [            
            [], [[]], [""], [undefined], [false], [NaN], [0], [1] , [1, undefined, "a", "bc"], [function () { }],
            {}, { a: 0, 0: "item", undefined: 'ok' },
            function () { },
        ]
        const title = 'Operando NO primitivo --> siempre <b>false</b><br>\
        el contrario a su valor coercitado a boolean';
        const id = this.articleId + "2";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => !value, '!value');

        this.hipotesis.push(hipotesis);
    }
}