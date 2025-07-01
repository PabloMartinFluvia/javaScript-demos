import { Hipotesis } from "../commons/hipotesis.js";
import { Test } from "../commons/test.js";

export class StringCoerCion extends Test{
    constructor() {
        super("stringCoercion");                   
    }
    
    test() {        
        this.firstHipotesis();
        this.secondHipotesis();
        this.thirdHipostsis();
    } 

    firstHipotesis() {
        const values = [
            null, undefined,
            true, false,
            NaN, 0, 1, Infinity,
            function() {}
        ]        
        const title = "Valores null / tipo primitivo / funciones --> cadena de carácteres correspondiente a la declaración literal";
        const id = this.articleId + "1";
        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => "" + value, '"" + value');
        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const values = [
            {}, { a: 0, 0: "item", undefined: 'ok' }
        ]        
        const title = 'Valores object --> cadena de carácteres [object Object]';
        const id = this.articleId + "2";
        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => "" + value, '"" + value');
        this.hipotesis.push(hipotesis);
    }

    thirdHipostsis() {
        const values = [
            [], [undefined], [null], [1,undefined, "a","bc"], [true], [NaN], [0], [{}], [function () {}],
        ]        
        let title = 'Valores array --> cada elemento se coercita a String, y luego se concatenan todos, \
        separandolos con comas. <br> Notar que <b>[ ]</b> o un <b>elemento cuyo valor es undefined o null </b> \
        --> cadena vacía <b>""</b>';
        const id = this.articleId + "3";
        const hipotesis = new Hipotesis(title, values, id, value => value === "" || value.includes(",,"));
        hipotesis.eval(value => "" + value, '"" + value');
        this.hipotesis.push(hipotesis);
    }
       
}

