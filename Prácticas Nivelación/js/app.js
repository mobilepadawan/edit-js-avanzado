//REPASAR CUADROS DE DIÁLOGO JAVASCRIPT
// alert("Hola, mundo!")
// const nombre = prompt("Ingrese su nombre:","")
// const acepto = confirm("Por favor, pulse ACEPTAR para confirmar que acepta los términos y condiciones establecidos")

// //STRING LITERALS
// function saludar() {
//    const nombre = prompt("Ingrese su nombre:","")
//          //alert("Buenas noches, " + nombre) //Concatenación estándar de cadenas del tipo string
//          //alert(`Buenas noches, ${nombre}`) //utilizamos back thicks `` junto a string literals ${} para concatenar texto y código sin tener que utilizar el signo +
// }

//ARROW FUNCTIONS

//function convencional
// function saludar() {
//    const nombre = prompt("Ingrese su nombre:","")
//          saludarConParam(nombre)
// }

// //función con parámetro
// function saludarConParam(nombre) {
//    alert(`Hola, ${nombre}`)
// }

// //función con retorno
// function nombre() {
//    return prompt("Ingrese su nombre:","")
// }

// function saludarConRetorno() {
//    alert(`Hola, ${nombre()}`)
// }

//SU VERSION ARROW FUNCTIONS
//ARROW FUNCTION convencional
// const saludar = ()=> {
//    const nombre = prompt("Ingrese su nombre:","")
//          alert(`Hola, ${nombre}`)
//          //saludarConParam(nombre)
// }

//ARROW FUNCTION CON PARAMETRO
// const saludarConParam = (nombre)=> {
//    alert(`Hola, ${nombre}`)
// }

//ARROW FUNCTION CON RETORNO
// const saludarConRetorno = ()=> "Fernando"
// alert(`Hola, ${saludarConRetorno()}`)


//FUNCIONES DE OPTIMIZACIÓN VERSUS FUNCIONES NO OPTIMIZADAS
//PARA ESCRIBIR CÓDIGO HTML DESDE JAVASCRIPT DE MANERA OPTIMA
// function agregarUnTexto() {
//    let imprimir = ``
//    let parrafo = `<p>Hola, esto es un texto generado automáticamente</p>`
//       for (let i = 0; i < 1000; i++)
//          imprimir += parrafo
//       document.body.innerHTML += imprimir
// }

// function agregarUnTextoNoOptimizado() {
//    let parrafo = `<p>Hola, esto es un texto generado automáticamente</p>`
//       for (let i = 0; i < 1000; i++)
//          document.body.innerHTML += parrafo
// }