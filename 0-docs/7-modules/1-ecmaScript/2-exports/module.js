export const K = 0;

let o = {
  property: `atributo del objeto o del module`
};

export function f() {
  console.log(`cuerpo de la función f del module`);
};

class Clazz {
  constructor() {
    console.log(`objeto de la clase Clazz del module`);
  }

  m(){
    console.log(`método de la clase Clazz del module`);
  }
};

export default 3*5;
//export default "ya no compila"; // error de compilación

const ignored = "no exportado -> privado a nivel de módulo";

export {o, Clazz};

//export {f}; // error al exportat, ya que es redundante, ya exportado en la línia 7