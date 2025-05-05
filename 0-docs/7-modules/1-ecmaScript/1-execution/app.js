
console.log('Start app file');
console.log('Import a file implies execute code in file:')

console.log('\timport .js in app')
import './module.js';
console.log('\timport .mjs in app')
import './module.mjs';
console.log('import .cjs in app')
import './module.cjs';

console.log('\timport again .mjs in app')
import './module.mjs';
console.log('\timport again .cjs in app')
import './module.cjs';

console.log('End app file');

console.log('Multiples imports of the same file will be executed only one time');
console.log('Note first executes .cjs, after .mjs, finally .js')

