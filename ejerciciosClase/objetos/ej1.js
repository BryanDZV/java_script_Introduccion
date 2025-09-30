/*crea una funcion que reciba un objeto y que muestre sus claves de tipo string
(sit teiensun objeto a:"sdsa" b:"asd"c:1 d:{})
solo muestra las claves que teng strin a b*/

/*2 ejercicio continuacion
let array=[{saludo:"hola",aquien:"mundo",numero:1,datos:{email:"@",direc:"caramelo",calle:"piruleta"}}];

la funcion recibe un parametro opcional que sea la profundidad a la que quieres buscar y q por defecto sea 1(mira como psar parametros opcionales maxDeep=1 es un ejempli ose al profuncidad de buscadena encadenada);*/
let objetos = {
  saludo: "hola",
  aquien: "mundo",
  numero: 1,
  datos: {
    email: "@",
    calle: "piruleta",
    edad: 99,
    asd: {
    email: "r",
    calle: "t",
    edad: 120
  }
  }
  
};
let array="lala";

const clasificar = (objeto, profundidad = 1) => {
  const recorrer = (obj, nivel) => {
    if (typeof obj !== "object" || obj === null || nivel === 0) return [];

    let strings = Object.values(obj).filter(v => typeof v === "string");

    let objetosInternos = Object.values(obj)
      .filter(v => typeof v === "object")
      .map(v => recorrer(v, nivel - 1));


    return strings.concat(...objetosInternos);
  };

  return recorrer(objeto, profundidad);
};

let resultado = clasificar(objetos);
//resultado=clasificar(array,2)
console.log(resultado); // ["hola", "mundo", "@", "piruleta"]


/*2*/

