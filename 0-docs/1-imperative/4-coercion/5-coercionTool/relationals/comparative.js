import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Comparative extends Test {
    constructor() {
        super("comp")
    }    

    test() {
        this.firstHipotesis();
        this.secondHipotesis();       
    }

    firstHipotesis() {
        const title = 'Al menos un operando es primitivo !String -> comparación según Number'

        const values = [
            null, false, 0, "", "0", [], [""], [undefined], [null], [0],
            true, 1, "1", [1],
            2,
            undefined, NaN,                                    
             "NaN", "undefined", "[object Object]", "function () { }",
             [true],  ["undefined"], [1, undefined, "a", "bc"],
            {}, { a: 0, 0: "item", undefined: "ok" },
            function () { },         
        ]
        
        const id = this.articleId + "1";
        const hipotesis = new Hipotesis(title, values, id, value => value === true); 
        hipotesis.eval(value => +value, 'Prueba: toNumber', true); 
        hipotesis.eval(value => "" + value, 'Prueba: toString', true);                
        hipotesis.eval(value => null < value, 'null < value', true); 
        hipotesis.eval(value => null <= value, 'null <= value', true); 
        hipotesis.eval(value => null >= value, 'null >= value', true); 
        hipotesis.eval(value => null > value, 'null > value', true); 
        hipotesis.eval(value => false < value, 'false < value', true); 
        hipotesis.eval(value => false <= value, 'false <= value', true); 
        hipotesis.eval(value => false >= value, 'false >= value', true); 
        hipotesis.eval(value => false > value, 'false > value', true);
        hipotesis.eval(value => 1 < value, '1 < value', true); 
        hipotesis.eval(value => 1 <= value, '1 <= value', true); 
        hipotesis.eval(value => 1 >= value, '1 >= value', true); 
        hipotesis.eval(value => 1 > value, '1 > value', true);
        hipotesis.eval(value => true < value, 'true < value', true); 
        hipotesis.eval(value => true <= value, 'true <= value', true); 
        hipotesis.eval(value => true >= value, 'true >= value', true); 
        hipotesis.eval(value => true > value, 'true > value', true);
        hipotesis.eval(value => NaN < value, 'NaN < value', true); 
        hipotesis.eval(value => NaN <= value, 'NaN <= value', true); 
        hipotesis.eval(value => NaN >= value, 'NaN >= value', true); 
        hipotesis.eval(value => NaN > value, 'NaN > value', true);
        hipotesis.eval(value => undefined < value, 'undefined < value', true); 
        hipotesis.eval(value => undefined <= value, 'undefined <= value', true); 
        hipotesis.eval(value => undefined >= value, 'undefined >= value', true); 
        hipotesis.eval(value => undefined > value, 'undefined > value', true);
             
       
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const title = 'String vs String or String vs NO primitivo -> \
        coerción a String y comparación según código ASCII'

        const values = [
            "", [""], [],  [undefined], [null],
            "0", [0],
            "1", [1], [1, undefined, "a", "bc"],
            "2",                                             
             "NaN",
             {}, { a: 0, 0: "item", undefined: "ok" },
             "function () { }",  function () { }, [true], "undefined",
             "z"
        ]
        
        const id = this.articleId + "1";
        const hipotesis = new Hipotesis(title, values, id, value => value === true); 
        hipotesis.eval(value => +value, 'Prueba: toNumber', true); 
        hipotesis.eval(value => "" + value, 'Prueba: toString', true);                
        hipotesis.eval(value => "" < value, '"" < value', true); 
        hipotesis.eval(value => "" <= value, '"" <= value', true); 
        hipotesis.eval(value => "" >= value, '"" >= value', true); 
        hipotesis.eval(value => "" > value, '"" > value', true);                
        hipotesis.eval(value => [] < value, 'other ref [] < value', true); 
        hipotesis.eval(value => [] <= value, 'other ref [] <= value', true); 
        hipotesis.eval(value => [] >= value, 'other ref [] >= value', true); 
        hipotesis.eval(value => [] > value, 'other ref [] > value', true); 
        hipotesis.eval(value => [0] < value, 'other ref [0] < value', true); 
        hipotesis.eval(value => [0] <= value, 'other ref [0] <= value', true); 
        hipotesis.eval(value => [0] >= value, 'other ref [0] >= value', true); 
        hipotesis.eval(value => [0] > value, 'other ref [0] > value', true); 
        hipotesis.eval(value => '1,,a,bc' < value, '"1,,a,bc" < value', true); 
        hipotesis.eval(value => '1,,a,bc' <= value, '"1,,a,bc" <= value', true); 
        hipotesis.eval(value => '1,,a,bc' >= value, '"1,,a,bc" >= value', true); 
        hipotesis.eval(value => '1,,a,bc' > value, '"1,,a,bc" > value', true); 
        hipotesis.eval(value => [NaN] < value, '[NaN] < value', true); 
        hipotesis.eval(value => [NaN] <= value, '[NaN] <= value', true); 
        hipotesis.eval(value => [NaN] >= value, '[NaN] >= value', true); 
        hipotesis.eval(value => [NaN] > value, '[NaN] > value', true); 
        hipotesis.eval(value => "[object Object]" < value, '"[object Object]" < value', true); 
        hipotesis.eval(value => "[object Object]" <= value, '"[object Object]" <= value', true); 
        hipotesis.eval(value => "[object Object]" >= value, '"[object Object]" >= value', true); 
        hipotesis.eval(value => "[object Object]" > value, '"[object Object]" > value', true); 
        const fun = function () { };
         hipotesis.eval(value => fun < value, 'other ref function () { } < value', true); 
        hipotesis.eval(value => fun <= value, 'other ref function () { } <= value', true); 
        hipotesis.eval(value => fun >= value, 'other ref function () { } >= value', true); 
        hipotesis.eval(value => fun > value, 'other ref function () { } > value', true);                        
        hipotesis.eval(value => "true" < value, '"true" < value', true); 
        hipotesis.eval(value => "true" <= value, '"true" <= value', true); 
        hipotesis.eval(value => "true" >= value, '"true" >= value', true); 
        hipotesis.eval(value => "true" > value, '"true" > value', true);  
        hipotesis.eval(value => ["undefined"] < value, '["undefined"] < value', true); 
        hipotesis.eval(value => ["undefined"] <= value, '["undefined"] <= value', true); 
        hipotesis.eval(value => ["undefined"] >= value, '["undefined"] >= value', true); 
        hipotesis.eval(value => ["undefined"] > value, '["undefined"] > value', true);  

        
        
        this.hipotesis.push(hipotesis);
    }

    
}