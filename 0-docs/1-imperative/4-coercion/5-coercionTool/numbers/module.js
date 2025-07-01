import { Test } from "../commons/test.js";
import { Hipotesis } from "../commons/hipotesis.js";

export class Module extends Test {
    constructor() {
        super("mod")
    }

    test() {
        this.firstHipotesis();
        this.secondHipotesis();
    }

    firstHipotesis() {
        const values = [
            0, 1, -1, 5, Infinity, -Infinity, NaN
        ]
        const title = 'Los 2 operandos con valor númerico<br>\
        A) X / Y : NaN | Infinity ? -> X % Y : NaN<br>\
        B) 0 / value : !NaN & ! Infinity ? --> 0 % value : 0<br>\
        C) value / Infinity : !Nan ? --> value % Infinity : value';

        const id = this.articleId + "1";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => NaN % value, 'A) NaN % value', true);
        hipotesis.eval(value => value % NaN, 'A) value % NaN', true);
        hipotesis.eval(value => value % 0, 'A) value % 0', true);
        hipotesis.eval(value => 0 % value, 'A i B) 0 % value', true);

        hipotesis.eval(value => value % Infinity, 'A i C) value % Infinity', true);
        hipotesis.eval(value => Infinity % value, 'A) Infinity % value', true);
        hipotesis.eval(value => value % 3, 'value % 3', true);
        hipotesis.eval(value => 3 % value, '3 % value', true);

        this.hipotesis.push(hipotesis);
    }

    secondHipotesis() {
        const values = [
            null,
            true, false,
            undefined,
            "", "0", "1", "2", "Infinity", "NaN", "'0'", "[0]", "true", "undefined",
            [], [[]], [undefined], [""], [0], [1], [NaN], [true], [1, undefined, "a", "bc"], [function () { }],
            {}, { a: 0, 0: "item", undefined: 'ok' },
            function () { },
        ]
        const title = 'Algún operando NO númerico:<br>\
        1) Coerción a Number<br>\
        2) Operar';
        const id = this.articleId + "2";

        const hipotesis = new Hipotesis(title, values, id);
        hipotesis.eval(value => +value, '1) +value', true);
        hipotesis.eval(value => NaN % value, 'A) NaN % value', true);
        hipotesis.eval(value => value % NaN, 'A) value % NaN', true);
        hipotesis.eval(value => value % 0, 'A) value % 0', true);
        hipotesis.eval(value => 0 % value, 'A i B) 0 % value', true);

        hipotesis.eval(value => value % Infinity, 'A i C) value % Infinity', true);
        hipotesis.eval(value => Infinity % value, 'A) Infinity % value', true);
        hipotesis.eval(value => value % 3, 'value % 3', true);
        hipotesis.eval(value => 3 % value, '3 % value', true);

        this.hipotesis.push(hipotesis);
    }
}