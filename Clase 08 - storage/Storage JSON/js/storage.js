const recuperoStorage = ()=> {
    strg = localStorage.getItem("arrayContactos")
    if (strg != null) {
        arrayContactos = JSON.parse(strg)
        if (arrayContactos.length > 0) {
            cargoGrillaContactos(arrayContactos)
        }
    }
}

const guardoContactosEnStorage = ()=> {
    if (arrayContactos.length > 0) {
        localStorage.setItem("arrayContactos", JSON.stringify(arrayContactos))
    }
}

document.addEventListener("DOMContentLoaded", recuperoStorage)