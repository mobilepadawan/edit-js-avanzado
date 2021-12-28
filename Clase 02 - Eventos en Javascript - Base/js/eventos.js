const botonProgreso = document.querySelector("#botonProgreso")
const botonFormulario = document.querySelector("#botonFormulario")
const barraProgreso = document.querySelector("#progreso")


botonProgreso.onclick = ()=>{
    barraProgreso.classList.toggle("hide")
}

botonFormulario.onclick = function() {
    location.target = "_self"
    location.href = "formulario.html"
}

