const guardoContacto = ()=> {
      const nuevoContacto = {
            id: arrayContactos.length + 1,
            nombre: nombre.value.trim(), 
            telefono: telefono.value, 
            email: email.value.trim()
      }
      arrayContactos.push(nuevoContacto)
      cargoGrillaContactos(arrayContactos)
      limpiarCampos()
}

//CARGAR LA TABLA CONTACTOS CON LOS DATOS DEL ARRAY JSON
const cargoGrillaContactos = (arr)=> {
      //debugger
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
          guardoContactosEnStorage()
        }
}

const limpiarCampos = ()=> {
    id.value = ""
    nombre.value = ""
    telefono.value = ""
    email.value = ""
}

btnEnviar.addEventListener("click", guardoContacto)

//BUSCAR UN CONTACTO ESPECÍFICO POR SU NOMBRE
const buscarContacto = ()=> {
    aBuscar = prompt("Ingrese el nombre a buscar:")
    if (aBuscar != null && aBuscar.trim() != "") {
        if (arrayContactos.length == 0) {
            alert("No hay contactos cargados.")
        } else {
            //debugger
            const resultado = arrayContactos.find(c => c.nombre.includes(aBuscar))
            //debugger
            if (resultado != "" && resultado != undefined) {
                id.value = resultado.id
                nombre.value = resultado.nombre
                telefono.value = resultado.telefono
                email.value = resultado.email
            } else {
                alert(`No se encontró coincidencia alguna con '${aBuscar}'`)
            }
        }
    }
}

btnBuscar.addEventListener("click", buscarContacto)

//FILTRAR DATOS PARA VISUALIZAR EN LA TABLA
inputFiltrar.addEventListener("keyup", (e)=> {
    if (e.key == "Enter") {
        let aBuscar = inputFiltrar.value.trim()
            if (aBuscar != "" && aBuscar != null) {
                const resultado = arrayContactos.filter(c => c.nombre.includes(aBuscar))
                      if (resultado.length > 0) {
                          cargoGrillaContactos(resultado)
                      } else {
                          alert(`No se encontraron resultados con el parámetro '${aBuscar}' :(`)
                      }
              }
    }
})

//ELIMINAR UN DATO EXISTENTE
btnEliminar.addEventListener("click", ()=> {
    let aBuscar = prompt("Ingrese el nombre del contacto a buscar:")
    //debugger
    if (aBuscar == null || aBuscar.trim() == "" || aBuscar == undefined) {
        alert("No se encontró el contacto especificado.")
    } else {
        //debugger
        const indice = arrayContactos.findIndex(c => c.nombre == aBuscar)
              if (indice != -1) {
                 const confirma = confirm(`¿Realmente desea eliminar el Contacto ${aBuscar}?`)
                       if (confirma) {
                            arrayContactos.splice(indice, 1)
                            cargoGrillaContactos(arrayContactos)
                       }
              }
    }
})