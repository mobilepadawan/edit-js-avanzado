const retornoCardContenido = (contenido)=> {
   let HTMLCard = `<div class="col s12 m6 l3">
                     <div class="card z-depth-2">
                        <div class="card-image">
                           <img loading="lazy" src="${contenido.poster}" title="${contenido.titulo}">
                           <a id = "btn${contenido.id}}" class="btn-floating halfway-fab waves-effect waves-black red"><i class="material-icons" onclick="verDetalle(${contenido.id})">search</i></a>
                        </div>
                        <div class="card-content black">
                           <p class="yellow-text">GÉNERO: <span class="white-text">${contenido.genero}</span></p>
                           <p class="yellow-text">TEMPORADAS: <span class="white-text">${contenido.temporadas}</span></p>
                        </div>
                     </div>
                  </div>`
      return HTMLCard
}

const retornoCardError = ()=> {
   let HTMLCardError = `<div class="center white-text"> 
                           <br><br> 
                           <br><br> 
                           <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                           <br><br> 
                           <i class="large material-icons">sentiment_very_dissatisfied</i> 
                           <br><br> 
                        </div>`
      return HTMLCardError
}

const retornoDetalle = (contenido)=> {
const {poster, titulo, categoria, genero, resumen, temporadas, reparto} = contenido
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