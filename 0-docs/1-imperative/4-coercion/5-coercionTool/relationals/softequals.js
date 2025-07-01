import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class SoftEquals extends Test {
    constructor() {
        super("softeq")
    }

    pro() {
        if (A == null && B == undefined){
            return true;
        } else {
            while (type(A) !== type(B)) {
                if (!isPrimitive(A)) {
                    A = toStringCoercion(A)
                } else if (!isPrimitive(B)) {
                    B = toStringCoercion(B)
                } else {
                    A = toNumberCoercion(A);
                    B = toNumberCoercion(B)
                }
            }
            return comparacionEstricta(A, B);
        }        
    }

    test() {
        this.firstHipotesis();
        this.secondHipotesis();
        this.thirdHipotesis();
        this.fourthHipotesis();
        
    }

    firstHipotesis() {
        const title = '<b>Checkeo 1</b>:<br>Algún operando es <b>null o undefined</b>? -->\
        solamente <b>null == undefined : true</b><br>Tip: pensar en el operador de coalescencia.'

        const values = [
            undefined, null,
            false, true,
            0, 1, NaN,
            "", "0", "1", "NaN", "undefined", "[object Object]", "function () { }",
            [], [""], [undefined], [null], [true], [0], [1] , ["undefined"], [1, undefined, "a", "bc"],
            {}, { a: 0, 0: "item", undefined: "ok" },
            function () { },         
        ]
        
        const id = this.articleId + "1";
        const hipotesis = new Hipotesis(title, values, id, value => value === true);                
        hipotesis.eval(value => undefined == value, 'undefined == value', true); 
        hipotesis.eval(value => null == value, 'null == value', true);         
       
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const title = 'La <b>desigualdad</b> dèbil es exactamente lo contrario.'

        const values = [
            undefined, null,
            false, true,
            0, 1, NaN,
            "", "0", "1", "NaN", "undefined", "[object Object]", "function () { }",
            [], [""], [undefined], [null], [true], [0], [1] , ["undefined"], [1, undefined, "a", "bc"],
            {}, { a: 0, 0: "item", undefined: "ok" },
            function () { },         
        ]
        
        const id = this.articleId + "2";
        const hipotesis = new Hipotesis(title, values, id, value => value === false);                
        hipotesis.eval(value => undefined != value, 'undefined != value', true); 
        hipotesis.eval(value => null != value, 'null != value', true);         
       
        this.hipotesis.push(hipotesis);
    }

    thirdHipotesis() {
        const title = '<b>Checkeo 2</b>:<br>Aplicar <b>coerción hasta que los 2 operandos sean del mismo</b\
        tipo, y así poder hacer la <b>comparación estricta</b>.<br>\
        Caso 1) String vs NO primitivos -> coerción a String. <br>\
        Prueva: "" == aray tiene distintos resultados que "0" == array --> NO hay coerción a Number<br>\
        Caso 2) Cualquier otra pareja de tipos -> coerción a Number.'

        const values = [
            false, true,
            0, 1, NaN,
            "", "0", "1", "NaN", "false", "undefined", "[object Object]", "function () { }",
            [], [""], [undefined], [null], [true], [0], [1] , ["undefined"], [1, undefined, "a", "bc"],
            {}, { a: 0, 0: "item", undefined: "ok" },
            function () { },         
        ]

        
        const id = this.articleId + "3";
        const hipotesis = new Hipotesis(title, values, id, value => value === true);                         
        hipotesis.eval(value => 0 == value, '0 == value', true);   
        hipotesis.eval(value => false == value, 'false == value', true);      
        hipotesis.eval(value => 1 == value, '1 == value', true);  
        hipotesis.eval(value => true == value, 'true == value', true);
        hipotesis.eval(value => +value, 'Prueva) +value', true);  
        hipotesis.eval(value => "" + value, 'Prueva) "" + value', true);   
        hipotesis.eval(value => "" == value, '"" == value', true);    
        hipotesis.eval(value => "0" == value, '"0" == value', true);  
        hipotesis.eval(value => "1" == value, '"1" == value', true);  
        hipotesis.eval(value => "NaN" == value, '"NaN" == value', true);   
        hipotesis.eval(value => "false" == value, '"false" == value', true);   
        hipotesis.eval(value => "undefined" == value, '"undefined" == value', true); 
        hipotesis.eval(value => "[object Object]" == value, '"[object Object]" == value', true);   
        hipotesis.eval(value => "function () { }" == value, '"function () { }" == value', true);  
        let other = [];
        hipotesis.eval(value => other == value, 'other ref [] == value', true);            
        other = {};
        hipotesis.eval(value => other == value, 'other ref {} == value', true); 
        other = function () { };
        hipotesis.eval(value => other == value, 'other ref   function () { } == value', true);                  
       
        this.hipotesis.push(hipotesis);
    }

    

    fourthHipotesis() {
        const title = 'La <b>desigualdad</b> dèbil es exactamente lo contrario.'

        const values = [
            false, true,
            0, 1, NaN,
            "", "0", "1", "NaN", "false", "undefined", "[object Object]", "function () { }",
            [], [""], [undefined], [null], [true], [0], [1] , ["undefined"], [1, undefined, "a", "bc"],
            {}, { a: 0, 0: "item", undefined: "ok" },
            function () { },         
        ]

        
        const id = this.articleId + "4";
        const hipotesis = new Hipotesis(title, values, id, value => value === false);                         
        hipotesis.eval(value => 0 != value, '0 != value', true);   
        hipotesis.eval(value => false != value, 'false != value', true);      
        hipotesis.eval(value => 1 != value, '1 != value', true);  
        hipotesis.eval(value => true != value, 'true != value', true);
        hipotesis.eval(value => +value, 'Prueva) +value', true);  
        hipotesis.eval(value => "" + value, 'Prueva) "" + value', true);   
        hipotesis.eval(value => "" != value, '"" != value', true);    
        hipotesis.eval(value => "0" != value, '"0" != value', true);  
        hipotesis.eval(value => "1" != value, '"1" != value', true);  
        hipotesis.eval(value => "NaN" != value, '"NaN" != value', true);   
        hipotesis.eval(value => "false" != value, '"false" != value', true);   
        hipotesis.eval(value => "undefined" != value, '"undefined" != value', true); 
        hipotesis.eval(value => "[object Object]" != value, '"[object Object]" != value', true);   
        hipotesis.eval(value => "function () { }" != value, '"function () { }" != value', true);  
        let other = [];
        hipotesis.eval(value => other != value, 'other ref [] != value', true);            
        other = {};
        hipotesis.eval(value => other != value, 'other ref {} != value', true); 
        other = function () { };
        hipotesis.eval(value => other != value, 'other ref   function () { } != value', true);                  
       
        this.hipotesis.push(hipotesis);
    }

    
}