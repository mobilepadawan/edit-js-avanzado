const retornoHTMLUsuario = (usuario)=> {
      HTMLTabla = `<tr class="white">
                     <td><img src="${usuario.picture.medium}" class="circle responsive-img"></td>
                     <td>${usuario.name.first} ${usuario.name.last}</td>
                     <td>${usuario.location.city}, ${usuario.location.country}</td>
                     <td>${usuario.dob.age} años</td>
                     <td class="blue-text">${usuario.email}</td>
                  </tr>`
      return HTMLTabla
}

const retornoError = ()=> {
      HTMLCard = `<div class="lightgrey-text wide-80">
                     <br><br>
                     <br><br>
                        <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4>
                     <br><br>
                        <i class="medium material-icons">sentiment_very_dissatisfied</i>
                     <br><br>
                  </div>`
      return HTMLCard
}

const retornoHTMLPreloader = ()=> {
      HTMLPreloader = `<br><br><br>
                        <div class="preloader-wrapper big active">
                           <div class="spinner-layer spinner-blue-only">
                           <div class="circle-clipper left">
                              <div class="circle"></div>
                           </div><div class="gap-patch">
                              <div class="circle"></div>
                           </div><div class="circle-clipper right">
                              <div class="circle"></div>
                                 </div>
                                 </div>
                              </div>
                                 <div class="circle"></div>
                              </div><div class="circle-clipper right">
                              <div class="circle"></div>
                           </div>
                           </div>
                        </div>`
      return HTMLPreloader
}