import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class StrictEquals extends Test {
    constructor() {
        super("stricteq")
    }

    test() {
        this.firstHipotesis();
        this.secondHipotesis();
    }

    firstHipotesis() {
        const title = 'Comparación según <b>valor y tipo</b> --> Un valor <b>solo es estrictamente \
        igual a si mismo.</b><br>\
        Observaciones:<br>Solamente lo incumple <b>NaN</b><br>Los valores <b>NO primitivos</b> se \
        comparan según la referencia (dirección a la zona de memoria). --> 2 valores literales NO son \
        estrictamente iguales.'

        const values = [
            undefined, null,
            false, true,
            0, 1, NaN,
            "", "0", "1", "NaN", "undefined",
            [], [""], [undefined], [null], [true], [0], [1] , ["undefined"], [1, undefined, "a", "bc"],
            {}, { a: 0, 0: "item", undefined: "ok" },
            function () { },         
        ]
        
        const id = this.articleId + "1";
        const hipotesis = new Hipotesis(title, values, id, value => 
            value === true
            || value === "NaN === value");        
        hipotesis.eval(value => undefined === value, 'undefined === value');  
        hipotesis.eval(value => null === value, 'null === value', true);  
        hipotesis.eval(value => false === value, 'false === value', true);  
        hipotesis.eval(value => true === value, 'true === value', true);   
        hipotesis.eval(value => 0 === value, '0 === value', true);  
        hipotesis.eval(value => 1 === value, '1 === value', true);  
        hipotesis.eval(value => NaN === value, 'NaN === value', true); 
        hipotesis.eval(value => "" === value, '"" === value', true);    
        hipotesis.eval(value => "0" === value, '"0" === value', true);  
        hipotesis.eval(value => "1" === value, '"1" === value', true);  
        hipotesis.eval(value => "NaN" === value, '"NaN" === value', true);   
        hipotesis.eval(value => "undefined" === value, '"undefined" === value', true);           
        let other = values[12]
        hipotesis.eval(value => other === value, 'same ref [] === value', true); 
        other = [];
        hipotesis.eval(value => other === value, 'other [] === value', true);  
        other = values[13]
        hipotesis.eval(value => other === value, 'same ref [""] === value', true); 
        other = values[14]
        hipotesis.eval(value => other === value, 'same ref [undefined] === value', true); 
        other = values[15]
        hipotesis.eval(value => other === value, 'same ref [null] === value', true); 
        other = values[16]
        hipotesis.eval(value => other === value, 'same ref [true] === value', true); 
        other = values[17]
        hipotesis.eval(value => other === value, 'same ref [0] === value', true); 
        other = values[18]
        hipotesis.eval(value => other === value, 'same ref [1] === value', true); 
        other = values[19]
        hipotesis.eval(value => other === value, 'same ref ["undefined"] === value', true); 
        other = values[20]
        hipotesis.eval(value => other === value, 'same ref [1, undefined, "a", "bc"] === value', true); 
        other = values[21]
        hipotesis.eval(value => other === value, 'same ref {} === value', true); 
        other = {};
        hipotesis.eval(value => other === value, 'other {} === value', true); 
        other = values[22]
        hipotesis.eval(value => other === value, 'same ref {a: 0, 0: "item", undefined: "ok" } === value', true); 
        other = values[23]
        hipotesis.eval(value => other === value, 'same ref function () { } === value', true);  
        other = function () { };
        hipotesis.eval(value => other === value, 'other function () { } === value', true); 
       
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const title = 'La desigualdad estricta es justamente el valor contrario a la igualdad estricta.<br>\
         Observaciones: NaN !== NaN : true</b>'

        const values = [
            undefined, null,
            false, true,
            0, 1, NaN,
            "", "0", "1", "NaN", "undefined",
            [], [""], [undefined], [null], [true], [0], [1] , ["undefined"], [1, undefined, "a", "bc"],
            {}, { a: 0, 0: "item", undefined: "ok" },
            function () { },         
        ]
        
        const id = this.articleId + "1";
        const hipotesis = new Hipotesis(title, values, id, value => 
            value === false
            || value === "NaN === value");        
        hipotesis.eval(value => undefined !== value, 'undefined !== value');  
        hipotesis.eval(value => null !== value, 'null !== value', true);  
        hipotesis.eval(value => false !== value, 'false !== value', true);  
        hipotesis.eval(value => true !== value, 'true !== value', true);   
        hipotesis.eval(value => 0 !== value, '0 !== value', true);  
        hipotesis.eval(value => 1 !== value, '1 !== value', true);  
        hipotesis.eval(value => NaN !== value, 'NaN !== value', true); 
        hipotesis.eval(value => "" !== value, '"" !== value', true);    
        hipotesis.eval(value => "0" !== value, '"0" !== value', true);  
        hipotesis.eval(value => "1" !== value, '"1" !== value', true);  
        hipotesis.eval(value => "NaN" !== value, '"NaN" !== value', true);   
        hipotesis.eval(value => "undefined" !== value, '"undefined" !== value', true);           
        let other = values[12]
        hipotesis.eval(value => other !== value, 'same ref [] !== value', true); 
        other = [];
        hipotesis.eval(value => other !== value, 'other [] !== value', true);  
        other = values[13]
        hipotesis.eval(value => other !== value, 'same ref [""] !== value', true); 
        other = values[14]
        hipotesis.eval(value => other !== value, 'same ref [undefined] !== value', true); 
        other = values[15]
        hipotesis.eval(value => other !== value, 'same ref [null] !== value', true); 
        other = values[16]
        hipotesis.eval(value => other !== value, 'same ref [true] !== value', true); 
        other = values[17]
        hipotesis.eval(value => other !== value, 'same ref [0] !== value', true); 
        other = values[18]
        hipotesis.eval(value => other !== value, 'same ref [1] !== value', true); 
        other = values[19]
        hipotesis.eval(value => other !== value, 'same ref ["undefined"] !== value', true); 
        other = values[20]
        hipotesis.eval(value => other !== value, 'same ref [1, undefined, "a", "bc"] !== value', true); 
        other = values[21]
        hipotesis.eval(value => other !== value, 'same ref {} !== value', true); 
        other = {};
        hipotesis.eval(value => other !== value, 'other {} !== value', true); 
        other = values[22]
        hipotesis.eval(value => other !== value, 'same ref {a: 0, 0: "item", undefined: "ok" } !== value', true); 
        other = values[23]
        hipotesis.eval(value => other !== value, 'same ref function () { } !== value', true);  
        other = function () { };
        hipotesis.eval(value => other !== value, 'other function () { } !== value', true); 
       
        this.hipotesis.push(hipotesis);
    }
}