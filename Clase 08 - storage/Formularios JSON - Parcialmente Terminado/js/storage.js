const guardoContactosEnStorage = ()=> {
    debugger
    if (arrayContactos.length > 0) {
        localStorage.setItem("arrayContactos", JSON.stringify(arrayContactos))
    }
}



// //localStorage => persiste la info almacenada del lado del usuario

// //sessionStorage => persiste la info mientras que no se cierre la pestaña de nav.
// const infoTemporal = ()=> {
//     sessionStorage.setItem("nombre", nombre.value.trim())
//     sessionStorage.setItem("telefono", telefono.value.trim())
// }

// const infoPersistente = ()=> {
//     localStorage.setItem("nombre", nombre.value.trim())
//     localStorage.setItem("telefono", telefono.value.trim())
// }

// const recuperarDatos = ()=> {
//     nombre.value = localStorage.getItem("nombre")
//     telefono.value  = localStorage.getItem("telefono")
// }

// document.addEventListener("DOMContentLoaded", recuperarDatos)

