const cargoAPIamigos = ()=> {
    tablaResultados.innerHTML = retornoHTMLPreloader()
    $.ajax({
            url: URL,
            success: (data)=> { 
                contenidoAPI = data.results
                for (usuario of contenidoAPI) {
                    HTMLTabla += retornoHTMLUsuario(usuario)
                }
                tablaResultados.innerHTML = HTMLTabla
                },
            error: ()=> {
                //código para manejar el error (debemos usar la función con return "retornoError()"
                HTMLTabla = retornoError()
                tablaResultados.innerHTML = HTMLTabla
            } 
    })
    textoInicial.innerHTML = ""
}

btnBuscar.addEventListener("click", cargoAPIamigos)