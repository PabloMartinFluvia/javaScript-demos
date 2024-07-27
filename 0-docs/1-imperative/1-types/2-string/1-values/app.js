const { Console } = require("console-mpds");

const console = new Console();
console.writeln("cadena de caracteres con comillas dobles"); // cadena de caracteres con comillas dobles
console.writeln('cadena de caracteres con comillas simples'); // cadena de caracteres con comillas simples
console.writeln("cadena de caracteres con comillas dobles 'con comillas simples' dentro"); // cadena de caracteres con comillas dobles 'con comillas simples' dentro
console.writeln('cadena de caracteres con comillas simples "con comillas dobles" dentro'); // cadena de caracteres con comillas simples "con comillas dobles" dentro

console.writeln("¡¡¡ Alerta !!! \u0278 o \u{00000278}, \u{1F970}"); // ¡¡¡ Alerta !!! ɸ o ɸ, 🥰
console.writeln(""); //  
console.writeln("1"); // 1
console.writeln("123"); // 123
console.writeln("TRUE."); // TRUE.
console.writeln("false"); // false

console.writeln("cadena de caracteres\ncon salto de línea y \ttabulador"); // cadena de caracteres
// con salto de línea y    tabulador

/*
Si vui codificar la cadena en varies línies per a millorar la legibilitat:
per a apretar l'Enter enmig d'un String cal escapar (\) abans de clicar la tecla.
Si no escapo dona error
*/
console.writeln("Text mooooooooooooooooooooolt llarg codificat a fuego en \
en tres linies \
però s'escriu en una");
/*Ídem, pero en aquest cas lo que passa es que si que vui que hi hagi salts de línia en la sortida
Que poden coincidir o no amb els meus Enters*/
console.writeln("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\
Donec rhoncus sollicitudin enim vitae tempor.\nNullam dui \
lorem, vulputate varius sapien ac, malesuada dictum metus.\n\
...");

//En les plantilles: clicar l'Enter equival a escriure un \n
console.writeln(
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Donec rhoncus sollicitudin enim vitae tempor. 
Nullam dui lorem, vulputate varius sapien ac, malesuada dictum metus. 
...`);
console.writeln(`Qué "comodo" usar comillas con normalidad sin 'escaparlas'!!!`); // Qué "comodo" usar comillas con normalidad sin 'escaparlas'!!!
console.writeln(`Pero \tel salto\nde linea sí hace falta escaparlo si lo quiero codificar en una linia!!!`); // Pero    el salto
//de linea sí hace falta escaparlo si lo quiero codificar en una linia
console.writeln(`Pero   el salto
de linea no hace falta escaparlo si uso Enter o TAB en el codigo!!!`); // Pero    el salto
//de linea no hace falta escaparlo si uso Enter o TAB en el codigo!!!

console.writeln(`Text amb 
    un salt de línia fet amb Enter + TAB i\n\tun salt de linia fet amb un \\n i \\t
i un altre salt de línia fet només amb Enter`); //Text amb
//  un salt de línia fet amb Enter + TAB o
//      un salt de linia fer amb un \n i \t
//i un altre salt de líni fet només amb Enter

console.writeln(`${535} * ${723} = ${535*723}.`); // 535 * 723 = 386805.
console.writeln(`${5} * ${4} = ${5*4}.`); // 5 * 4 = 20.
console.writeln("535 * 723  = 386805."); // 535 * 723 = 386805.
console.writeln(`esto es ${`innecesariamente ${`innecesario`}`}, verdad?`); // esto es innecesariamente innecesario, verdad?
