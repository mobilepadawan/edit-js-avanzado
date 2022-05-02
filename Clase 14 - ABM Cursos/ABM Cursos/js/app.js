const editarCurso = (param)=> {
      const resultado = cursosJSON.find(c => c.id == param)
            inputID.value = parseInt(resultado.id)
            inputNombre.value = resultado.nombre
            inputCreado.value = resultado.creado
            inputDuracion.value = parseInt(resultado.duracion)
            btnModificar.classList.remove("ocultar-boton")
            openModal()
}

const nuevoCurso = ()=> {
      inputID.value = 0
      inputNombre.value = ""
      inputCreado.value = ""
      inputDuracion.value = 0
      btnAgregar.classList.remove("ocultar-boton")
      openModal()
}

const modificarCurso = async ()=> {
        const id = parseInt(inputID.value)
        const datos = {nombre: inputNombre.value,
                       creado: inputCreado.value, 
                       duracion: parseInt(inputDuracion.value)
                    }
        const FULLURL = `${URL}${id}`
        const BODY = JSON.stringify(datos)
        const OPTIONS = {
                        method: 'PUT',
                        headers: {
                                    'Content-Type': 'application/json',
                                },
                        body: BODY
                        }
        const response = await fetch(FULLURL, OPTIONS)
              respuesta = await response.json()
              cargoTablaCursos()
              btnModificar.classList.toggle("ocultar-boton")
}

const agregarCurso = async ()=> {
        const datos = {nombre: inputNombre.value,
                    creado: inputCreado.value || d.toLocaleDateString(),
                    duracion: parseInt(inputDuracion.value) || 4 //mínimo 4 semanas
                    }
        const BODY = JSON.stringify(datos)
        const OPTIONS = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'Application/json'
                        },
                        body: BODY
                        }
        const response = await fetch(URL, OPTIONS)
              respuesta = await response.json()
              inputID.value = respuesta.id
              cargoTablaCursos()
              btnAgregar.classList.toggle("ocultar-boton")
}

const eliminarCurso = async ()=> {
    const cursoID = prompt("Ingrese el código del curso a Eliminar:")
          respuesta = cursosJSON.find(c => c.id == cursoID) || false
          if (!respuesta) {
              alert(`No se encontró un curso con el ID: ${cursoID}`)
              return
          } else {
              const confirmado = confirm("Esta operación no se podrá deshacer. ¿Desea continuar?")
                    if (confirmado) {
                        const FULLURL = `${URL}${cursoID}`
                        const OPTIONS = {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'Application/json'
                                        }
                                        }
                        const response = await fetch(FULLURL, OPTIONS)
                              respuesta = await response.json()
                              console.table(respuesta)
                              cargoTablaCursos()
                    }
          }
}

btnModificar.addEventListener("click", modificarCurso)
btnNuevo.addEventListener("click", nuevoCurso)
btnAgregar.addEventListener("click", agregarCurso)
btnEliminar.addEventListener("click", eliminarCurso)