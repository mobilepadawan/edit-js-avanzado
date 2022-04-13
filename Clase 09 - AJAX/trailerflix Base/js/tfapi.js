const obtengoContenido = (URL) => {
      //debugger
      const xhr = new XMLHttpRequest()
            xhr.open("GET", URL, true)
            xhr.send()
            xhr.addEventListener("loadend", ()=> {
                if (xhr.readyState == 4 && xhr.status >= 200) {
                    contenidoJSON = JSON.parse(xhr.responseText)
                    contenidoJSON.forEach(cont => {
                        cardsAmostrar += retornoCardContenido(cont)
                    })
                    contenidoDOM.innerHTML = cardsAmostrar
                }
            })
            xhr.addEventListener("error", ()=> {
                contenidoDOM.innerHTML = retornoCardError()
            })
            cargandoDOM.innerHTML = ""
}