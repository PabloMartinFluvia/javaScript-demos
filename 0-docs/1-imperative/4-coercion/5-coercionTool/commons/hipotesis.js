export class Hipotesis {

    constructor(title, values, id, isInteresting = value => false) {
        this.title = title;        
        this.id = id;
        this.steps = [["", ...values]];
        this.isInteresting = isInteresting;
    }

    eval(process, expression, vsFirst = false) {        
        const results = [expression];
        const values = this.steps[vsFirst ? 0 : this.steps.length - 1];
        for (let i = 1; i < values.length; i++) {
            let expected;
            try {
                expected = process(values[i]);
            } catch (e) {
                expected = "exception";
            }
            results.push(expected);
        }
        this.steps.push(results);        
    }

    addIn(article) {
        [this.label, this.checkBox, this.table].forEach(element => {article.appendChild(element)});
    }

    get label() {
        const label = document.createElement("label");
        label.innerHTML = this.title;
        label.htmlFor = this.id;
        return label;
    }

    get checkBox() {
        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = this.id;
        input.checked = false;
        input.addEventListener("click", event => {
            const table = document.getElementById(this.id+"table");
            table.className = "";            
            if (event.target.checked) {
                table.className = "hidden";  
            }
        })
        return input;
    }

    get table() {
        const table = document.createElement("table");
        table.id = this.id + "table";
        for (let rowValues of this.steps) {                      
            const row = this.initRow(rowValues[0]);
            for (let i = 1; i < rowValues.length; i++) {                
                row.appendChild(this.createCell(rowValues[i]))
            }
            table.appendChild(row)
        }
        return table;
    }

    initRow(value) {
        const row = document.createElement('tr');
        row.appendChild(this.createCell(value, false, false));
        return row;
    }

    createCell(value, asLiteral = true, checkInteresting = true) {
        const cell = document.createElement('td');
        cell.innerHTML = asLiteral ? Hipotesis.toLiteralCodeString(value) : value;
        if (value === "exception") {
            cell.className = "error"
            cell.innerHTML = "";
        } else if (value === undefined) {
            cell.className = "undefined"
        } if (Number.isNaN(value)) {
            cell.className = "nan"
        }   
        if (checkInteresting && this.isInteresting(value)) {
            cell.className = "interesting"
        }     
        return cell;
    }

    static toLiteralCodeString(value) {
        let literalCode;
        if (Array.isArray(value)) {
            literalCode = '[';
            for (let i = 0; i < value.length; i++) {
                literalCode += this.toLiteralCodeString(value[i]);
                if (i < value.length - 1) {
                    literalCode += ', ';
                }
            }
            literalCode += ']';
        } else if (typeof value === 'object' && value !== null) {
            literalCode = '{';
            for (let property in value) {
                if (literalCode[literalCode.length - 1] !== '{') {
                    literalCode += ', ';
                }
                literalCode += property + ': ' + this.toLiteralCodeString(value[property]);
            }
            literalCode += '}';
        } else if (typeof value === 'string') {
            literalCode = '"' + value + '"';
        } else {
            // num or boolean or null or function -> literal text code es la cadena de caracteres equivalente (sin "")
            literalCode = "" + value;
            if (typeof value === 'function') {
                console.log(value)
                console.log("" + value)
                console.log(value.toString())
            }
        }
        return literalCode;
    }

    
}