const frutas = ['Banana', 'Manzana', 'Pera', 'Frutilla', 'Mango', 'Papaya']

//EJERCICIO BASICO 1
const titulo = "Acceso a elementos HTML"
const parrafo1 = "Esto es una prueba de acceso a los elementos HTML de un documento homónimo. La idea es cargar de forma dinámica un listado de productos que guardados en un array."

document.querySelector("h1").innerText = titulo
document.querySelector("p").innerText = parrafo1
//document.getElementsByTagName("p")[1].innerText = ""

//EJERCICIO BASICO 2 (GENERAR UN ARRAY DE UN MISMO ELEMENTO HTML)
const parrafosEnAzul = document.querySelectorAll("p")
console.log(`Total de elementos <p>: ${parrafosEnAzul.length}`) // me devuelve el total de elementos HTML del tipo <p>

//EJERCICIO BASICO 3 (APLICAR LA FUENTE DE COLOR AZUL A LOS ELEMENTOS HTML ANTERIORES)
for (let el of parrafosEnAzul)
   el.classList.add("blue-text")

   //EXPLICAR QUE, FOR... OF ES UNA EVOLUCIÓN DE FOR (LET I = 0;...;...) {}

   //Y QUE TAMBIÉN EXISTE FOR... IN, PERO QUE EN ESTE CASO DEBEMOS USAR UN INDICE

//EJERCICIO BASICO 4
//debugger
// function cargarProductos() {
//     let listado = ''
//     for (let f of frutas) {
//         listado += `<li>${f}</li>`
//     }
//     document.querySelector("ul").innerHTML = listado
// }

//cargarProductos()