import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class And extends Test {
    constructor() {
        super("and")
    }

    test() {
        this.firstHipotesis();
    }

    firstHipotesis() {
        const values = [
            null, undefined,
            NaN, 0, 1, Infinity,
            "", "0", "1", "true", "undefined",
            [], [""], [undefined], [false], [NaN], [0], [1] , [1, undefined, "a", "bc"],
            {}, { a: 0, 0: "item", undefined: 'ok' },
            function () { },         
        ]
        const title = 'Operador Lazy <br> IF (A) then B else A'
        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id);        
        hipotesis.eval(value => true && value, 'true && value', true);
        hipotesis.eval(value => false && value, 'false && value', true);
        hipotesis.eval(value => !!value, 'coerción !!value', true);
        hipotesis.eval(value => value && "X", 'value && "X"', true);         
       
        this.hipotesis.push(hipotesis);
    }

    
}