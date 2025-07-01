import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Sum extends Test {
    constructor() {
        super("sum")
    }

    test() {
        this.firstHipotesis();
        this.secondHipotesis();
    }

    firstHipotesis() {
        const values = [      
            null, 
            true, false,      
            0, 1, -1, Infinity, NaN,
            undefined
        ]
        const title = "Los 2 operandos tienen valor number / null / undefined / boolean -->\
        coerción a número y operar";
        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => 1 + value, '1 + value');
        hipotesis.eval(value => true + value, 'true + value', true);
        hipotesis.eval(value => null + value, 'null + value', true);
        hipotesis.eval(value => Infinity + value, 'Infinity + value', true);                        
        hipotesis.eval(value => NaN + value, 'NaN + value', true);
        hipotesis.eval(value => undefined + value, 'undefined + value', true);
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const values = [
           null, 
            true, false,      
            0, 1, -1, Infinity, NaN,
            undefined
        ]
        const title = '<b>*** Algún operando es String o valor NO primitivo</b><br>\
        --> Coerción a String y <b>CONCATENAR</b> ';
        const id = this.articleId + "2";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => 'a' + value, '"a" + value');
        hipotesis.eval(value => "1" + value, '"1" + value', true);
        hipotesis.eval(value => [] + value, '[] + value', true);
        hipotesis.eval(value => [0] + value, '[0] + value', true);  
        const object = {};                      
        hipotesis.eval(value => object + value, '{} + value', true);
        const f = function() {};
        hipotesis.eval(value => f + value, 'function() {} + value', true);
        this.hipotesis.push(hipotesis);
    }

   
}