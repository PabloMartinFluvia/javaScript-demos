import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Pow extends Test {
    constructor() {
        super("pow")
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
        A) Exponenete es NaN? : NaN<br>\
        B) Exponenete es 0? : 1<br>\
        C) Base es NaN (y !B)?: NaN<br>\
        D) 1 ^ Infinity: NaN'
        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id);                
        hipotesis.eval(value => 0 ** value, '0 ** value', true);   
        hipotesis.eval(value => 1 ** value, '1 ** value', true);                                
        hipotesis.eval(value => Infinity ** value, 'Infinity ** value', true);                                  
        hipotesis.eval(value => NaN ** value, 'NaN ** value', true);         
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const values = [
           null, 
            true, false,                  
            undefined,
            "", "0", "1", "2", "Infinity", "NaN", "'0'", "[0]", "true", "undefined",
             [], [[]], [undefined], [""], [0], [1], [2], [NaN], [true], [1,undefined, "a","bc"], [{}], [function () {}],
            {}, { a: 0, 0: "item", undefined: 'ok' },      
            function () { },  
        ]
        const title = 'Algún operando NO númerico:<br>\
        1) Coerción a Number<br>\
        2) Operar';
        const id = this.articleId + "2";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => +value, '1) +value', true);   
        hipotesis.eval(value => value ** "a", 'A) value ** "a"', true); 
        hipotesis.eval(value => value ** [""], 'B) value ** [""]', true);   
        hipotesis.eval(value => value ** [2], 'C) value ** [2]', true);   
        hipotesis.eval(value => true ** value, 'D) true ** value', true);    
        hipotesis.eval(value => "3" ** value, 'D) "3" ** value', true);                          
        this.hipotesis.push(hipotesis);
    }
}