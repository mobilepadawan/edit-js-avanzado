const HTMLtabla = (fila)=> {
    return `<tr>
                <td>${fila.id}</td>
                <td>${fila.nombre}</td>
                <td>${fila.creado}</td>
                <td>${fila.duracion}</td>
            </tr>`
}

const obtenerCursos = async ()=> {
      const response = await fetch(URL)
            if (response != "" && response.status >= 200 && response.status < 300)
                data = response.json()
            else
                data = [{id: 999, nombre: "Error", creado: "Error", duracion: "Error"}]
            return data
}

const cargoTablaCursos = async ()=> {
    let armoTabla = ""
        cursosJSON = await obtenerCursos()
        await cursosJSON.forEach(curso => armoTabla += HTMLtabla(curso))
        filasTabla.innerHTML = armoTabla
}

cargoTablaCursos()