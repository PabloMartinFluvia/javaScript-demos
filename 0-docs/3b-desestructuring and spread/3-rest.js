console.log('Rest element/ property')
let { a, ...subObject } = { a: 1, b: 2, c: 3 };
console.log(subObject); // { b: 2, c: 3 }

let head;
let tail = ["initA", "initB"];
[head, ...tail] = [1, 2, 3];
console.log(tail); // [2, 3]


console.log('\Rest Parameter: permet recollir en un array un número indeterminat d arguments')

test("ignored", 1,2,3,4,5,6)

function test(a, ...argsTest) {
    console.log(argsTest); // [ 1, 2, 3, 4, 5, 6 ]
    console.log(...argsTest); // 1 2 3 4 5 6
}

console.log("\nEl Rest Parametre es pot desestructurar")

function ignoreFirst(...[, b, c = "default"]) {
  return b + c;
}