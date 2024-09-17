Hola,

En el video "Distintos modos en Javascript para construir objetos" se enseñan 4 formas distintas de crear objetos con métodos. 

No entiendo porqué sólo en una Luís la considera clousure y en las otras 3 no. 

En todos los casos el método público del objeto retornado hace mención a variables declaradas en el ámbito de la función 'createObject' (y por tanto han sido creadas en el contexto de ejecución generado al llamar a la función 'createObject').

1. Caso "Objeto con comportamiento"
   - Se menciona variable 'returned', la cual guarda una referencia un objeto, cuya referencia se devolverá.
   - Se menciona variable 'privateFunction', la cual guarda una referencia a una función local.

2. Caso "this"
   - Se menciona variable 'privateFunction', la cual guarda una referencia a una función local.

3. Caso "clousure"
   - Se menciona variable 'privateAttributeX', parámetro de la función creadora.     
   - Se menciona variable 'privateAttributeY', declarada como variable local en la función creadora.
   - Se menciona variable 'privateFunction', la cual guarda una referencia a una función local.

4. Caso "patrón factoría"
   - Se menciona variable 'that', la cual guarda una referencia un objeto con atributos y métodos privados (simula la parte privada del objeto retornado).

Por que el caso 3 es una clousre y en las otras no? En todos los casos las variables mencionadas deben seguir existiendo en memoria una vez se termine la ejecución de la función creadora, y por tanto su contexto no se podría liberar.

He hecho pruebas añadiendo métodos públicos en el objeto retornado del estilo 'setX' (asigna nuevos valores a las variables mencionadas). Y al lanzar el mensaje del método público, después de cada seteo, el resultado es distinto. Cosa que indica que dichas variables siguen existiento después de ejecutarse la función 'createObject'. **No indica eso que hay una clousure en todos los casos?**

Duda extra: en todos los casos en que Luís ha comentado que hay clousure (clousure, currificación, crear objetos con clousure) en los ejemplos siempre se da el caso que la función devuelta menciona una variable que es un parámetro de la función que "la envuelve" (o cuyo valor depende de un parámetro). **Es una casualidad? O es un requisito para que se considere que hay clousure?**

Muchas grácias.
