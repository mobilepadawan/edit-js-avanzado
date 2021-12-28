let contador = 0
let intervalo 
const htmlContador = document.querySelector("#contador")

//SetInterval es un método que ejecuta una función cada X cantidad de tiempo
//se lo llama método porque forma parte del objeto JS window
//se puede utilizar sin necesidad de anteponer el objeto al cual pertenece

//el tiempo se mide en milisegundos: 1000 ms = 1 segundo
//Se ejecuta de forma constante

//Usar con responsabilidad porque consume recursos del navegador

function iniciarTemporizador() {
    intervalo = setInterval(()=> {
        htmlContador.innerText = contador += 1
    }, 1000)
}
//Si necesitamos detener su proceso, contamos con el método clearInterval()
//debemos pasarle la variable a la cual asignamos setInterval()

//SetTimeOut es otro método que espera determinado tiempo (indicado por nosotros)
//y luego ejecuta un bloque de código o llama a una función determinada
//se ejecuta una sola vez, y recibe tbn, como intervalo de tiempo, un valor en milisegundos
function ejecutoConDelay() {
    setTimeout(() => {
        document.querySelector('img').classList.remove('hide')
    }, 2500);
}
//También contamos con un método que puede detener su ejecución: clearTimeout()