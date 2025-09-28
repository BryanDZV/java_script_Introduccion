const suma = (num1, num2) => {
    let promise = new Promise((resolve, reject) => {
        if(!num1){
            return reject("no tengo primer numero");
        }
        if(!num2){
            return reject("no tengo segundo numero");
        }

        setTimeout(() => resolve(num1+num2), 3000)
    })

    return promise;
}


async function funcionAsincrona(){
    try {
        let resultado = await suma(3,5);    //await espera a que se resuelva la promesa y entonces nos da el resolve de la promesa
        console.log(resultado)        
    } catch (error) {
        console.log(error)
    }
}

funcionAsincrona();
suma(4,6).then((res) => console.log(res))
console.log("pepe")

const funcionAsincrona2 = async() => {
    try {
        let resultado = await suma(4, 7);
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

funcionAsincrona2();