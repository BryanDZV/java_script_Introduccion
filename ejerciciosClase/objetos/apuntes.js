
//objeto siempre entre {}
let objeto = { quien: "soy pepe ", num: 2, q: "hola" };
//se accede por:
Object.values(objeto);//un array de los valores de cada clave del objeto
let resultado=Object.values(objeto)
console.log(resultado);

//tambien por:dond te da un array con subarray donde cada subraray esta formado po calve/valor
resultado=Object.entries(objeto);
console.log(resultado);
resultado.forEach(([clave,valor])=>{
    console.log("clave :"+clave+"valor::"+valor);
    
})

//una coleccion de las claves del objeto 
for(clave in objeto){
    console.log(clave);
    

}
