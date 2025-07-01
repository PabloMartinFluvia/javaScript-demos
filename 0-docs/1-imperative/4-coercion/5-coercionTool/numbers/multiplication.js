import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Multiplication extends Test {
    constructor() {
        super("mult")
    }

    test() {
        this.firstHipotesis();
        this.secondHipotesis();
    }

    firstHipotesis() {
        const values = [       
            0, 1, -1, Infinity, -Infinity, NaN
        ]
        const title = 'Los 2 operandos con valor númerico<br>\
        Notar que <b>Infinity * 0: NaN</b>';
        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => 0 * value, '0 * value');                     
        hipotesis.eval(value => Infinity * value, 'Infinity * value', true);                     
        hipotesis.eval(value => NaN * value, 'NaN * value', true);
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const values = [
           null, 
            true, false,                  
            undefined,
            "", "0", "1", "Infinity", "NaN", "'0'", "[0]", "true", "undefined",
             [], [[]], [undefined], [""], [0], [1], ["1"], [NaN], [true], [1,undefined, "a","bc"], [{}], [function () {}],
            {}, { a: 0, 0: "item", undefined: 'ok' },      
            function () { },  
        ]
        const title = 'Algún operando NO númerico:<br>\
        1) Coerción a Number<br>\
        2) Operar';
        const id = this.articleId + "2";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => 2  * value, '2 * value');                                    
        hipotesis.eval(value => ["2"] * value, '["2"] * value', true);      
        hipotesis.eval(value => +value, '1) +value', true);
        hipotesis.eval(value => 2 * value, '2) 2 * previous');
        this.hipotesis.push(hipotesis);
    }
}