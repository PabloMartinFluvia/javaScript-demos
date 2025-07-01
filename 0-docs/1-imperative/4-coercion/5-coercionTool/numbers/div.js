import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Division extends Test {
    constructor() {
        super("div")
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
        A) Algun operando es NaN? : NaN<br>\
        B) 0/0: NaN --- 0/x: 0 ---  x/0: Inf<br>\
        C) Infinity / Infinity: NaN'
        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id); 
        hipotesis.eval(value => NaN / value, 'NaN / value', true);
        hipotesis.eval(value => value / NaN, 'value / NaN', true); 
        hipotesis.eval(value => value / 0, 'value / 0', true);                            
        hipotesis.eval(value => 0 / value, '0 / value', true);      
             
        hipotesis.eval(value => value / Infinity, 'value / Infinity', true);  
        hipotesis.eval(value => Infinity / value, 'Infinity / value', true);                             
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const values = [
           null, 
            true, false,                  
            undefined,
            "", "0", "1", "2", "Infinity", "NaN", "'0'", "[0]", "true", "undefined",
             [], [[]], [undefined], [""], [0], [1], [NaN], [true], [1,undefined, "a","bc"], [function () {}],
            {}, { a: 0, 0: "item", undefined: 'ok' },      
            function () { },  
        ]
        const title = 'Algún operando NO númerico:<br>\
        1) Coerción a Number<br>\
        2) Operar';
        const id = this.articleId + "2";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => +value, '1) +value', true);   
        const obj = {}
        hipotesis.eval(value => obj / value , 'A) {} / value', true); 
        hipotesis.eval(value => value / "a", 'A) value / "a"', true); 
        hipotesis.eval(value => [] / value , 'B) [] / value', true); 
        hipotesis.eval(value => value / "", 'B) value / ""', true);   
        hipotesis.eval(value => value / [Infinity], 'C) value / [Infinity]', true);   
                                  
        this.hipotesis.push(hipotesis);        
    }
}