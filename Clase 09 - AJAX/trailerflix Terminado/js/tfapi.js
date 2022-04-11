const obtengoContenido = (URL) => {
   //debugger
      const xhr = new XMLHttpRequest()
            xhr.open("GET", URL, true)
            xhr.timeout = 5000
            xhr.send()
            //debugger
            xhr.addEventListener("loadend", ()=> {
               if (xhr.readyState == 4 && xhr.status == 200) {
                  contenidoJSON = JSON.parse(xhr.responseText)
                  contenidoJSON.forEach(cont => {
                     cardsAmostrar += retornoCardContenido(cont)
                  })
                  contenidoDOM.innerHTML = cardsAmostrar
               }
            })
            xhr.addEventListener("error", ()=> {
               contenidoDOM.innerHTML = retornoCardError()
               xhr.abort()
            })
            cargandoDOM.innerHTML = ""
}