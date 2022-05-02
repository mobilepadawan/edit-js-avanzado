const closeModal = ()=> {
    dialog.removeAttribute("open")
}

const openModal = ()=> {
    dialog.setAttribute("open", true)
}

const HTMLtabla = (fila)=> {
    return `<tr>
                <td ondblclick="editarCurso(${fila.id})"
                    title="Doble clic para Modificar"
                    class="cell-colored">${fila.id}</td>
                <td>${fila.nombre}</td>
                <td>${fila.creado}</td>
                <td>${fila.duracion}</td>
            </tr>`
}

const obtenerCursos = async ()=> {
      const response = await fetch(URL)
            response.status >= 400
            ? data = dataError
            : data = response.json()
            return data
}

const cargoTablaCursos = async ()=> {
    let armoTabla = ""
        cursosJSON = await obtenerCursos()
        await cursosJSON.forEach(curso => armoTabla += HTMLtabla(curso))
        filasTabla.innerHTML = armoTabla
        cargando.remove()
}

cargoTablaCursos()