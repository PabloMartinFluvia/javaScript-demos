import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Rest extends Test {
    constructor() {
        super("rest")
    }

    test() {
        this.firstHipotesis();
        this.secondHipotesis();
    }

    firstHipotesis() {
        const values = [       
            0, 1, -1, Infinity, -Infinity, NaN
        ]
        const title = "Los 2 operandos con valor númerico<br>\
        Notar que <b>Infinity - Infinity: NaN</b>";
        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => 1 - value, '1 - value');                     
        hipotesis.eval(value => Infinity - value, 'Infinity - value', true);    
        hipotesis.eval(value => value - Infinity, 'value - Infinity', true);             
        hipotesis.eval(value => NaN - value, 'NaN - value', true);
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
        hipotesis.eval(value => 1 - value, '1 - value');
        hipotesis.eval(value => true - value, 'true - value', true);                
        hipotesis.eval(value => "1" - value, '"1" - value', true);                
        hipotesis.eval(value => [1] - value, '[1] - value', true);      
        hipotesis.eval(value => +value, '1) +value', true);
        hipotesis.eval(value => 1 - value, '2) 1- previous');
        this.hipotesis.push(hipotesis);
    }
}