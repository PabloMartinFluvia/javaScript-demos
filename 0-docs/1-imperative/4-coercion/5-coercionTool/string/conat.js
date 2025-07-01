import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Concat extends Test {
    constructor() {
        super("concat")
    }

    test() {
        this.firstHipotesis();
    }

    firstHipotesis() {
        const values = [
            "text",
            null, undefined,
            true, false,
            NaN, 0, 1, Infinity,
            function () { },
            {}, { a: 0, 0: "item", undefined: 'ok' },
            [], [undefined], [1,undefined, "a","bc"], [NaN], [0], [{}], [function () {}],
        ]
        const title = "Cuando almenos <b>un operando cuyo valor es String</b> \
        --> <br>1)Se fuerza la <b>coerción a String</b> <br>2)Se concatenan los valores String";
        const id = this.articleId + "1";
        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => "x" + value + "y", '"x" + value + "y"');
        this.hipotesis.push(hipotesis);
    }

}