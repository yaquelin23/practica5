/*//llamada antes de inicializar la funcion
saludar()

//funcion de primer orden
function saludar (){
    console.log(`Hola mundo`)
}

//llamada despues de inicializar
saludar()

//funcion anonima
const saludarAnonimo =function(){
    saludar()
}

//llamada a funcion anonima
saludarAnonimo()

//objeto
const usuario = {
    Nombre: 'jaqui';
    Correo:'sin agregar'
}

//funcion agregar correo
             {
    usuario.Correo=nuevocorreo
}
console.log(usuario);
agregarCorreo('vilyaher@gmail.com')**/


/**
 * crear una funcion que permita determinar
 * una multiplicacion a partir  de sumas
 */

const multiplicacion =function suma (a, b){
    return (b !=0)? a + suma(a, b -1): 0
}

console.log(multiplicacion(5,2));

/**
 * funciones recursivas
 */

let numero = 0
while(numero <= 10){
    console.log(numero)
    numero++
}
function contador(numero = 0){
    if(numero >= 10){
        return
    }

    console.log(numero);

    contador(numero + 1)
}
console.log("funciones recurivas");
contador()

//funciones anidadas
function media(datos){
    function sumatoria(serie){
        let suma = 0
        serie.forEach(numero => {
            suma += numero
        });
         return suma   
        }
        return sumatoria(datos)/datos.length
}

function mediana(datos){
    const largo =datos.length
    if (largo %2 == 0){
        let mitadArreglo = (largo) / 2
        let anterior = mitadArreglo - 1
        let siguiente = mitadArreglo 

        console.log(datos[anterior])
        console.log(datos[siguiente])

        return  (
            datos[anterior] + datos[siguiente]) / 2                                                                                                                
    }else{
        let mitadArreglo=Math.round((largo) / 2)
        return datos[mitadArreglo - 1]

    }
}

const misDatos = [5,6,19,3]
console.log(`La media de ${misDatos} es ${media(misDatos)}`)

console.log(mediana(misDatos))

function multiplicar(a, ...args) {
    args.forEach (numero => {
        a*=numero
    })
    return a 
}
console.log('Funcion de varios parametros')
console.log(multiplicar(a * b));
console.log(multiplicar(2,4));
console.log(multiplicar(2,4,5));
console.log(multiplicar(2,4,5,6));