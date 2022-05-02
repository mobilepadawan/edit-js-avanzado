const obtenerHashDeURL = () => location.hash.slice(1).toLowerCase() || '/'

const accionSegunPath = (path, routes) =>  routes.find(r => r.path == path || undefined)

const ruteo = ()=> {
   const path = obtenerHashDeURL()
   const {action = 'error'} = accionSegunPath(path, routes) || {}
         switch (action) {
            case '':
               mostrarVista("SPA - Principal", componentePrincipal())
               break
            case 'principal':
               mostrarVista("SPA - Principal", componentePrincipal())
               break
            case 'productos':
                  mostrarVista("SPA - Productos", componenteProductos())
                  setTimeout(() => {
                     lprod = document.querySelector("#listadoProductos")
                     preload = document.querySelector("#loader")
                     listarProductosEnVista(lprod, preload)
                  }, 2000);
               break
            case 'blog':
               mostrarVista("SPA - Blog", componenteBlog())
               break
            case 'ayuda':
               mostrarVista("SPA - Ayuda", componenteAyuda())
               break
            default:
               mostrarVista("SPA - Error", componenteError())
               break
         }
}

const mostrarVista = (titulo, componente)=> {
   document.title = titulo
   main.innerHTML = componente
}