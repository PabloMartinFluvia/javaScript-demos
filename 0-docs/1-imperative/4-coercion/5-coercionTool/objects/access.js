import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Access extends Test {
    constructor() {
        super("access")
    }    

    test() {
        this.firstHipotesis();
        
    }

    firstHipotesis() {
        const title = 'Solo tiene sentido para objetos, arrays y strings (y funciones)<br>\
        <b>El valor de la propiedad se coercita a String!</b><br>\
        En Arrays: "imaginar coerción a objecto"  {0: item0, 1: item1 ...}<br>\
        En Strings: "imaginar coerción a objecto"  {0: char0, 1: char1 ...}<br>\
        Sin la propiedad declarada: undefined<br>\
        valores númericos, boolean: undefined<br>\
        valores null i undefined: error'

        const values = [
            {  0: "item", a: 0,Infinity: 12345, undefined: "ok",  "": 25 },
            "false",
            ["a", "b"], "cd",    
            "0", [1], [""], [null], [true],     
            {}, [], [undefined],
            1, false, function () { },
            null, undefined
        ]
        
        const id = this.articleId + "1";
        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => value["0"], 'value["0"]', true);        
        hipotesis.eval(value => value[0], 'value[0]', true);
        hipotesis.eval(value => value[[0]], 'value[[0]]', true);
        hipotesis.eval(value => value[['a']], 'value[["a"]]', true);
        hipotesis.eval(value => value[1], 'value[1]', true);
        hipotesis.eval(value => value[2], 'value[2]', true);
        hipotesis.eval(value => value[Infinity], 'value[Infinity]', true);
        hipotesis.eval(value => value[undefined], 'value[undefined]', true);
        hipotesis.eval(value => value[""], 'value[""]', true);
        hipotesis.eval(value => value[[undefined]], 'value[[undefined]]', true);
        hipotesis.eval(value => value[[null]], 'value[[null]]', true);
        hipotesis.eval(value => value[null], 'value[null]', true);
             
       
        this.hipotesis.push(hipotesis);
    }

    
}