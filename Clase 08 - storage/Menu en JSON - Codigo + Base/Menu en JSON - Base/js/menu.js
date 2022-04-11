const menuList = [
    {
        id: "principal",
        href: "index.html",
        innerText: "Principal",
        target: "_self"
    },
    {
        id: "productos",
        href: "productos.html",
        innerText: "productos",
        target: "_self"
    },
    {
        id: "noticias",
        href: "noticias.html",
        innerText: "NoticiaS",
        target: "_self"
    },
    {
        id: "contacto",
        href: "contacto.html",
        innerText: "contacto",
        target: "_blank"
    },]

const crearMenu = ()=> {
    //debugger
      for (let item of menuList) {
          const menuNuevo = document.createElement("a")
                menuNuevo.id = `${item.id}`
                menuNuevo.setAttribute("class", "btn-flat black-text waves-effect waves-black")
                //menuNuevo.className = ""
                menuNuevo.target = `${item.target}`
                menuNuevo.href = `${item.href}`
                menuNuevo.innerHTML = `${item.innerText}`
                menu.append(menuNuevo)
      }
}

document.addEventListener("DOMContentLoaded", crearMenu)