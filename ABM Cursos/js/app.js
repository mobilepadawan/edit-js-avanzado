const editarCurso = (param)=> {
    //debugger
      const resultado = cursosJSON.find(c => c.id == param)
            inputID.value = parseInt(resultado.id)
            inputNombre.value = resultado.nombre
            inputCreado.value = resultado.creado
            inputDuracion.value = parseInt(resultado.duracion)
            btnConfirmar.classList.toggle("ocultar-boton")
            openModal()
}

const nuevoCurso = ()=> {
    //debugger
            inputID.value = 0
            inputNombre.value = ""
            inputCreado.value = ""
            inputDuracion.value = 0
            btnAgregar.classList.toggle("ocultar-boton")
            openModal()
}

const HTMLtabla = (fila)=> {
    return `<tr>
                <td onclick="editarCurso(${fila.id})">${fila.id}</td>
                <td>${fila.nombre}</td>
                <td>${fila.creado}</td>
                <td>${fila.duracion}</td>
            </tr>`
}

const obtenerCursos = async ()=> {
      const response = await fetch(URL)
            if (response.status >= 200 && response.status < 300)
                data = response.json()
            else
                data = dataError
            return data
}

const cargoTablaCursos = async ()=> {
    let armoTabla = ""
        cursosJSON = await obtenerCursos()
        await cursosJSON.forEach(curso => armoTabla += HTMLtabla(curso))
        filasTabla.innerHTML = armoTabla
}

cargoTablaCursos()

const modificarCurso = async ()=> {
    
    id = parseInt(inputID.value)
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
                console.table(respuesta)
}

const agregarCurso = async ()=> {
    debugger
    const datos = {nombre: inputNombre.value,
                   creado: inputCreado.value || Date.now(),
                   duracion: parseInt(inputDuracion.value) || 4 //mínimo 4 semanas
                  }
    const response = await fetch(URL, {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'Application/json'
                                        },
                                        body: JSON.stringify(datos)
                                    })
        respuesta = await response.json()
        inputID.value = respuesta.id
}

btnConfirmar.addEventListener("click", modificarCurso)
btnNuevo.addEventListener("click", nuevoCurso)
btnAgregar.addEventListener("click", agregarCurso)