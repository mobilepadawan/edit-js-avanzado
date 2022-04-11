const recuperoStorage = ()=> {
    strg = localStorage.getItem("arrayContactos")
    if (strg != null) {
        debugger
        arrayContactos = JSON.parse(decodificarContenido(strg))
        if (arrayContactos.length > 0) {
            cargoGrillaContactos(arrayContactos)
        }
    }
}

const guardoContactosEnStorage = ()=> {
    if (arrayContactos.length > 0) {
        localStorage.setItem("arrayContactos", codificarContenido(JSON.stringify(arrayContactos)))
    }
}

document.addEventListener("DOMContentLoaded", recuperoStorage)