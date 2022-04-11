const retornoCardContenido = (cont)=> {
   let HTMLCard = `<div class="col s12 m6 l3">
                        <div class="card z-depth-2">
                           <div class="card-image">
                              <img loading="lazy" src="${cont.poster}" title="The Mandalorian">
                              <a id="btn3}" class="btn-floating halfway-fab waves-effect waves-black red"><i class="material-icons" onclick="verDetalle(3)">search</i></a>
                           </div>
                           <div class="card-content black">
                              <p class="yellow-text">GÉNERO: <span class="white-text">Ciencia Ficción, Fantasía</span></p>
                              <p class="yellow-text">TEMPORADAS: <span class="white-text">2</span></p>
                           </div>
                        </div>
                     </div>`
      return HTMLCard
}

const retornoCardError = ()=> {
   let HTMLCardError = ``
      return HTMLCardError
}


















const retornoDetalle = (contenido)=> {
   HTMLDetalle = `<div class="row center">
                     <div class="col s12 m5 l4 center-align">
                     <img src="${contenido.poster}" width="100%">
                     </div>
                     <div class="col s12 m7 l8">
                     <table>
                        <tbody class="white-text">
                           <tr>
                           <td class="yellow-text">TÍTULO</td>
                           <td><h5>${contenido.titulo}</h5></td>
                           </tr>
                           <tr>
                           <td class="yellow-text">CATEGORÍA</td>
                           <td>${contenido.categoria}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">GÉNERO</td>
                           <td>${contenido.genero}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">RESUMEN</td>
                           <td>${contenido.resumen}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">TEMPORADAS</td>
                           <td>${contenido.temporadas}</td>
                           </tr>
                           <tr>
                           <td class="yellow-text">REPARTO</td>
                           <td><h6>${contenido.reparto}</h6></td>
                           </tr>
                        </tbody>
                     </table>
                     </div>
                  </div>`
         return HTMLDetalle
}