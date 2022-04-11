strContactos = '[{"id":1,"nombre":"Educación IT","telefono":"11222333","email":"info@educacionit.com"},{"id":2,"nombre":"ISTEA","telefono":"11333444","email":"info@istea.edu.ar"},{"id":3,"nombre":"Digitalers","telefono":"111555666","email":"info@digitalers.com"},{"id":4,"nombre":"Coding Fake Institute","telefono":"111555667","email":"coding@fakeinstitute.com"}]'

const guardoContacto = ()=> {
    const nuevoContacto = {id: arrayContactos.length + 1,
                           nombre: nombre.value.trim(),
                           telefono: telefono.value,
                           email: email.value
                          }
          arrayContactos.push(nuevoContacto)
          limpiarCampos()
          cargoTablaContactos(arrayContactos)
}

const limpiarCampos = ()=> {
    id.value = ""
    nombre.value = ""
    telefono.value = ""
    email.value = ""
}

btnEnviar.addEventListener("click", guardoContacto)

const cargoTablaContactos = (arr)=> {
      let detalleTabla = ""
      if (arr.length > 0) {
          arr.forEach(contacto => {
            detalleTabla += `<tr>
                                <td>${contacto.id}</td>
                                <td>${contacto.nombre}</td>
                                <td>${contacto.telefono}</td>
                                <td>${contacto.email}</td>
                             </tr>`
          })
          tbody.innerHTML = detalleTabla
        }
}

const buscarContacto = ()=> {
    let aBuscar = prompt("Ingrese el nombre a buscar:")
        if (aBuscar.trim() != "") {
            //debugger
            //const arrayResultado = arrayContactos.find((c)=> c.nombre.toUpperCase() == aBuscar.toUpperCase())
            const arrayResultado = arrayContactos.find((c)=> c.nombre.includes(aBuscar))
            //console.table(arrayResultado)
            if (arrayResultado != "" && arrayResultado != undefined) {
                id.value = arrayResultado.id
                nombre.value = arrayResultado.nombre
                telefono.value = arrayResultado.telefono
                email.value = arrayResultado.email    
            } else {
                alert("No se encontraron resultados coincidentes.")
            }
        } 
}
 
btnBuscar.addEventListener("click", buscarContacto)

inputFiltrar.addEventListener("keyup", (e)=> {
    if (e.key == "Enter") {
        const arrayResultado = arrayContactos.filter((c)=> c.nombre.includes(inputFiltrar.value.trim()))
              //console.table(arrayResultado)
              cargoTablaContactos(arrayResultado)
    }
})

btnEliminar.addEventListener("click", ()=> {
    debugger
    let aBuscar = prompt("Ingrese el nombre a buscar:")
        if (aBuscar == null || aBuscar.trim() =="") {
            alert("No se encontró el contacto especificado.")
        } else {
            const indice = arrayContactos.findIndex(c => c.nombre == aBuscar.trim())
                  if (indice != -1) {
                      const confirma = confirm(`¿Realmente desea eliminar el Contacto ${aBuscar.trim()}`)
                            if (confirma) {
                                arrayContactos.splice(indice, 1)
                                cargoTablaContactos(arrayContactos)
                            }
                  }
        }
})







document.addEventListener("DOMContentLoaded", ()=> {
    arrayContactos = JSON.parse(strContactos)
    cargoTablaContactos(arrayContactos)
})