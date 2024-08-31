const { Console } = require("console-mpds");

const consoleMDN = new Console();
let level0 = 0;
consoleMDN.writeln(`global level0: ${level0}`); // global level0: 0
// console.writeln(`global level1: ${level1}`); // Error!!!
// console.writeln(`global level2: ${level2}`); // Error!!!
// console.writeln(`global level3: ${level3}`); // Error!!!
outer();
// middle(); // Error!!!
// internal(); // Error!!!

function outer() {
    level0++;
    let level1 = 1;
    level1++;
    consoleMDN.writeln(`outer level0: ${level0}`); // external level0: 1
    consoleMDN.writeln(`outer level1: ${level1}`); // external level1: 2
    // console.writeln(`outer level2: ${level2}`); // Error!!!
    // console.writeln(`outer level3: ${level3}`); // Error!!!
    middle();
    inner();

    function middle() {
        level0++;
        level1++;
        let level2 = 2;
        level2++;
        consoleMDN.writeln(`middle level0: ${level0}`); // middle level0: 2
        consoleMDN.writeln(`middle level1: ${level1}`); // middle level1: 3
        consoleMDN.writeln(`middle level2: ${level2}`); // middle level2: 3 
        // console.writeln(`middle level3: ${level3}`); // Error!!!
        inner();

        function inner() {
            level0++;
            level1++;
            level2++;
            let level3 = 3;
            level3++;
            consoleMDN.writeln(`inner level0: ${level0}`); // internal level0: 3
            consoleMDN.writeln(`inner level1: ${level1}`); // internal level1: 4
            consoleMDN.writeln(`inner level2: ${level2}`); // internal level2: 4 
            consoleMDN.writeln(`inner level3: ${level3}`); // internal level3: 4 
        }
    }

    function inner() {
        level0++;
        level1++;
        let level2 = 2;
        level2++;
        consoleMDN.writeln(`inner level0: ${level0}`); // sibbling level0: 4
        consoleMDN.writeln(`inner level1: ${level1}`); // sibbling level1: 5
        consoleMDN.writeln(`inner level2: ${level2}`); // sibbling level2: 3  
    }
}
