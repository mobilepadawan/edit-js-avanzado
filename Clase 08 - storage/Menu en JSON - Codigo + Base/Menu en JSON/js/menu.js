const menuList = [
   {
      id: "principal",
      target: "_self",
      accion: "index.html",
      value: "Principal"
   },
   {
      id: "productos",
      target: "_self",
      accion: "productos.html",
      value: "Productos"
   },
   {
      id: "noticias",
      target: "_self",
      accion: "noticias.html",
      value: "Noticias"
   },
   {
      id: "contacto",
      target: "_blank",
      accion: "contacto.html",
      value: "Contacto"
   },
]

const crearMenu = ()=> {
   for (let item of menuList) {
      const menuNuevo = document.createElement("a")
            menuNuevo.id = `#${menu.id}`
            menuNuevo.setAttribute("class", "btn-flat black-text waves-effect waves-black")
            menuNuevo.target = `${menu.target}`
            menuNuevo.href = `${menu.accion}`
            menuNuevo.innerHTML = `${menu.value}`
            menu.appendChild(menuNuevo)
   }
}

document.addEventListener("DOMContentLoaded", crearMenu)