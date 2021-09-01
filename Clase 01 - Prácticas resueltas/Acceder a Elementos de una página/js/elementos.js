const frutas = ['Banana', 'Manzana', 'Pera', 'Frutilla', 'Mango', 'Papaya']
/*
//EJERCICIO BASICO 1
//DIFERENCIAS ENTRE INNERTEXT e INNERHTML
// const titulo = "Acceso a elementos HTML"
// const parrafo1 = "Esto es una prueba de acceso a los elementos HTML de un documento homónimo. La idea es cargar de forma dinámica un listado de productos que guardados en un array."
// document.querySelector("h1").innerText = titulo
// document.querySelector("p").innerText = parrafo1
//document.getElementsByTagName("p")[1].innerText = ""

//EJERCICIO BASICO 4
//debugger
// function cargarProductos() {
//     let listado = ''
//     for (let f of frutas) {
//         listado += `<li>${f}</li>`
//     }
//     document.querySelector("ul").innerHTML = listado
// }

// cargarProductos()
*/



//EJERCICIO BASICO 2 (GENERAR UN ARRAY DE UN MISMO ELEMENTO HTML)
// const parrafosEnAzul = document.querySelectorAll("p")
// console.log(`Total de elementos <p>: ${parrafosEnAzul.length}`) // me devuelve el total de elementos HTML del tipo <p>

//EJERCICIO BASICO 3 (APLICAR LA FUENTE DE COLOR AZUL A LOS ELEMENTOS HTML ANTERIORES)
// for (let el of parrafosEnAzul)
//    el.classList.add("blue-text")
//EXPLICAR QUE, FOR... OF ES UNA EVOLUCIÓN DE FOR (LET I = 0;...;...) {}

//ESTE MISMO EJERCICIO PODRIA HACERSE DE LA FORMA CONVENCIONAL
//¿VIERON ALGUNA VEZ EL CICLO FOR EN CAMARA LENTA?
// for (let i = 0; i < parrafosEnAzul.length ; i++)
//    parrafosEnAzul[i].classList.add("orange-text")
//TAMBIEN EXISTE classList.remove() PARA QUITAR
//O classList.toggle() PARA AGREGAR O QUITAR SEGUN EL ESTADO

//EJERCICIO BASICO 5 (AGREGAR ATRIBUTOS A LOS ELEMENTOS)
// const titulo = document.getElementsByTagName("h1")
// titulo[0].setAttribute("id", "titulo1")
// //TAMBIEN EXISTE REMOVEATTRIBUTE()