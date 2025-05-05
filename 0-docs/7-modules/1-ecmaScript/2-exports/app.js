console.log(`1. En un mòdulo se puden incluir MÚLTIPLES sentencias export.`);
console.log(`   - si no acompañan una "declaración nominal" entonces deben acompañar la declaración del valor de un objeto con los identificadores a exportar`);

console.log(`\n2. Al solicitar la importación del archivo, lo exportado se recibe como un solo objeto, cuyas porpiedades son los valores de TODOS los identificadores exportados`);
import * as exportedObject from './module.js';
console.log(exportedObject);

console.log(`\n3. Al importar un objeto, este se puede desestructurar, para realizar:`);
console.log(`   - una importacion parcial`)
console.log(`   - renombrar los identificadores importados`)
import {o, f as functionImported} from './module.js';
console.log(o.property);
functionImported();

console.log(`\n4. En el módulo se puede incluir UNA ÚNICA sententencia EXPORT DEFAULT (más ya no compila)`);
console.log(`   - esta sentencia, lo que hace, es incluir, en el objeto exportado, 
    la propiedad default, cuyo valor es el resultado de la evaluación de la sentencia escrita después del 'export default' `);
console.log(`   - Por este motivo solo se permite una única sentencia export default por modulo`);
import * as exportedObjectWithDefault from './module2.js';
console.log(exportedObjectWithDefault);
console.log(exportedObjectWithDefault.default); // 15

console.log(`   - Al ser default una palabra reservada, no se puede obtener por desestructuración (no compila)`);
//import {default, Clazz} from './module2.js'; // error de compilación

console.log(`\n5. Se puede importar SOLAMENTE la propiedad default del objeto exportado, asignando su valor a un nuevo identificador`);
import defaultValue from './module2.js';
console.log(defaultValue);

console.log(`   - Obs: Si el valor de default és un objeto, la assignación de este valor NO se puede hacer por desestructuración`);
//import {name, age} from './module3.js';  // error al ejecutar la sentencia, no existe exported.name i exported.age

import * as exported from './module3.js';
console.log(exported);
import defaultPropertyObject from './module3.js';
console.log(defaultPropertyObject);

console.log(exported.default.name); // me
console.log(defaultPropertyObject.name); // me
console.log(exported.default.age); // 99
console.log(defaultPropertyObject.age); // 99
