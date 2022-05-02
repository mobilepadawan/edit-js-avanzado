
const tabla = document.querySelector("tbody")

let HTMLTabla = ""
//let respuesta = []
let respuesta = [{id:1, name: "Jason Bourne", username: "dwebb", email: "agent@cia.us"}, 
                 {id: 2, name: "Nicky Parsons", username: "Niky", email: "niky@cia.us"}]

function obtenerUsuarios() {
   debugger
   try {
      console.log("Verifico si hay elementos y los cargo en la tabla")
      if (respuesta.length > 0) {
         respuesta.forEach(u => {
            HTMLTabla += `<tr>
                              <td>${u.id}</td>
                              <td>${u.name}</td>
                              <td>${u.username}</td>
                              <td>${u.email}</td>
                          </tr>`
         })
      } else {
         console.warn("Si no hay elementos, doy aviso en pantalla reformulando el contenido de la tabla.")
         HTMLTabla = "<tr><td class='red-text'>Error :(</td></tr>"
         throw new error
      }
   } catch (error) {
      console.log("Finalmente alerto que ocurrió un error")
      console.error("No se pudo obtener el listado. ") //si quiero, puedo concatenar o mostrar directamente el error que me viene como parámetro en catch()
   } finally {
      console.log("Listo el contenido de la variable HTMLTabla, más allá de que tenga o no contenido.")
      tabla.innerHTML = HTMLTabla
   }
}

document.querySelector("button").addEventListener("click", ()=> obtenerUsuarios())