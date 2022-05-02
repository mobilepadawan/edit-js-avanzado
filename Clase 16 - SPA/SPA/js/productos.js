const listarProductosEnVista = (HTMLToLoad, HTMLloader)=> {
   const xhr = new XMLHttpRequest()
         xhr.open("GET", "products/products.json")
         xhr.send()
         xhr.addEventListener("load", ()=> {
            let lista = "" //Variable para acumular los listItems de productos en formato HTML
            if (xhr.status == 200 && xhr.readyState == 4) {
               const productos = JSON.parse(xhr.responseText)
                     productos.forEach(item => {
                        lista += `<li>${item.name}</li>`                           
                     })
                     HTMLToLoad.innerHTML = lista
                     HTMLloader.innerHTML = ""
            }
         })
}

// const listarProductosEnVista = async (HTMLToLoad, HTMLLoader)=> {
//    let lista = ""
//        await fetch("products/productsss.json")
//        .then((response)=> data = response.json())
//        .then((data)=> data.forEach(item => lista += `<li>${item.name}</li>`))
//        .catch((error)=> {
//           console.error(`Se ha producido un error inesperado.`, error)
//           lista = `<h4 class="red-text">ERROR INESPERADO :(</h4>`
//        })
//        .finally(()=> {
//           HTMLToLoad.innerHTML = lista
//           HTMLLoader.innerHTML = ""
//        })
// }