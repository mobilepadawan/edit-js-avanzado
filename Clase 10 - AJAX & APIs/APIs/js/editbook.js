function cargoAPIamigos() {
      tablaResultados.innerHTML = retornoHTMLPreloader()
      // el método AJAX espera al menos dos parámetros. Tres, es el ideal.
      //1) endpoint URL, 2) qué hago si todo OK, 3) qué hago ante un error.
      // $.ajax({
      //    url: URL,
      //    success: ()=> {},
      //    error: ()=> {}
      // })
      $.ajax({
         url: "https://randomuser.me/api/?results=5000",//&gender=female&nat=AU", //?results=50&nat=ES
         success: (data)=> { //data ya vuelve como un JSON, no hace falta JSON.parse()
            contenidoAPI = data.results
            console.table(contenidoAPI)
            contenidoAPI.map(usuario => HTMLTabla += retornoHTMLUsuario(usuario))
            tablaResultados.innerHTML = HTMLTabla
         },
         error: ()=> {
            contenido.innerHTML = retornoError()
         }
      })
      textoInicial.innerHTML = ""
}

btnBuscar.addEventListener("click", cargoAPIamigos)