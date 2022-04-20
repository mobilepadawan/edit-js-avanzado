function cargoAPIamigos() {
      tablaResultados.innerHTML = retornoHTMLPreloader()
      $.ajax({
         url: URL,
         success: (data)=> {
            contenidoAPI = data.results
            console.table(contenidoAPI)
            contenidoAPI.forEach(usuario => HTMLTabla += retornoHTMLUsuario(usuario))
            tablaResultados.innerHTML = HTMLTabla
         },
         error: ()=> {
            contenido.innerHTML = retornoError()
         }
      })
      textoInicial.innerHTML = ""
}

//Código propio de MATERIALIZE para inicializar la barra lateral
const elem = document.querySelector('.sidenav')
const options = "{edge: 'left', inDuration: 400, draggable: true, preventScrolling: true}"
const latBar = M.Sidenav.init(elem, options);

const abrirMenuLateral = ()=> {
   latBar.open()
}

btnBuscar.addEventListener("click", abrirMenuLateral)