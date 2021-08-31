const frutas = ['Banana', 'Manzana', 'Pera', 'Frutilla', 'Mango', 'Papaya']

//EJERCICIO BASICO 1
const titulo = "Acceso a elementos HTML"
const parrafo1 = "Esto es una prueba de acceso a los elementos HTML de un documento homónimo. La idea es cargar de forma dinámica un listado de productos que guardados en un array."

document.querySelector("h1").innerText = titulo
document.querySelector("p").innerText = parrafo1
//document.getElementsByTagName("p")[1].innerText = ""

//EJERCICIO BASICO 2 (PINTAR LOS PARAGRAPHS CON LETRA AZUL)
const parrafosEnAzul = document.querySelectorAll("p")
parrafosEnAzul.length // me devuelve el total de elementos HTML del tipo <p>

//EJERCICIO BASICO 3
//debugger
// function cargarProductos() {
//     let listado = ''
//     for (let f of frutas) {
//         listado += `<li>${f}</li>`
//     }
//     document.querySelector("ul").innerHTML = listado
// }

//cargarProductos()