let cardsAmostrar = ""
let contenidoJSON = []

const URL = `${location.origin}/js/trailerflix.json`
//const URL = `https://api.mirutadementira.com.au/`

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")








const peticionAJAX = ()=> {
    //debugger
    //const URLJPH = "https://jsonplaceholder.typicode.com/posts"
    const xhr = new XMLHttpRequest
          xhr.open("GET", URLJPH)
          xhr.timeout = 0 //1000 milisegundos = 1 segundo
          xhr.send()
          xhr.addEventListener("loadend", ()=> {
              //debugger
              if (xhr.readyState == 4 && xhr.status >= 200) {
                  const contenidoPOST = JSON.parse(xhr.responseText)
                  console.table(contenidoPOST)
                  debugger
              } else {
                throw new error
              }
          })
          xhr.addEventListener("error", ()=> {
            xhr.abort()
            console.error("Se ha producido un error :(")
          })

}