const componentePrincipal = ()=> {
   return principal = `<div id="principal">
                           <br><br>
                           <h1>Bienvenidos</h1>
                           <i class="material-icons large">school</i>
                           <p>Bienvenidos a la construcción de una SPA, a través del curso de Vue JS.</p> <!-- <span class="blue-text font-bold">JavaScript Avanzado de Educación IT</span>.</p> -->
                           <p>Utiliza el menú superior para poder navegar entre las distintas páginas.</p>  
                        </div>`
}

const componenteProductos = ()=> {
   return productos = ` <div id="productos" class="left-align">
                           <h1>Productos</h1>
                           <p>Aquí encontrará un listado de nuestros productos. Todo lo aquí listado tiene Stock:</p>
                           <div id="loader" class="center">
                              <div class="preloader-wrapper active">
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
                           </div>
                           <ol id="listadoProductos">
                           <!-- Aquí se carga el listado de productos mediante AJAX -->
                           </ol>
                        </div>`
}

const componenteBlog = ()=> {
   return blog = `<div id="blog" class="left-align">
                     <h1>Blog de noticias</h1>
                     <p>Manténgase al tanto con las noticias de nuestra empresa.</p>
                     <h5>Noticia 1</h5>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae amet similique libero omnis ut porro magnam voluptates possimus provident vitae, dolore architecto! Aperiam fugiat iusto, dolor corporis omnis repellendus quos.</p>
                     <br>
                     <h5>Noticia 2</h5>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae amet similique libero omnis ut porro magnam voluptates possimus provident vitae, dolore architecto! Aperiam fugiat iusto, dolor corporis omnis repellendus quos.</p>
                     <br>
                     <h5>Noticia 3</h5>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae amet similique libero omnis ut porro magnam voluptates possimus provident vitae, dolore architecto! Aperiam fugiat iusto, dolor corporis omnis repellendus quos.</p>
                     <br>
                     <h5>Noticia 4</h5>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae amet similique libero omnis ut porro magnam voluptates possimus provident vitae, dolore architecto! Aperiam fugiat iusto, dolor corporis omnis repellendus quos.</p>
                  </div>`
}

const componenteError = ()=> {
   return error = `<div id="error" class="red darken-3 white-text borders z-depth-4">
                     <h1>404</h1>
                     <i class="material-icons white-text large">warning</i>
                     <h4>No se encontró el recurso o página solicitada.</h4>
                     <p>Intente nuevamente en unos minutos.</p>
                     <i class="material-icons white-text large">sentiment_very_dissatisfied</i>
                  </div>`
}

const componenteAyuda = ()=> {
   return ayuda = `<div id="ayuda" class="left-align">
                     <div class="center">
                     <br>
                     <i class="material-icons large">help_outline</i>
                     </div>
                     <h1>Bienvenido a la Ayuda</h1>
                     <p>Pulse los botones de la barra de navegación superior para cargar el contenido de dicha sección. Estos le permitirán navegar fácilmente por nuestra plataforma.</p>
                     <p>También puede utilizar el historial generado en el navegador web y desplazarse entre páginas a través de los botones <span><i class="material-icons smaller blue-text">arrow_back</i><span>  y  <span><i class="material-icons blue-text smaller">arrow_forward</i></span> de su navegador web.
                     </p>
                     <br>
                     <p class="blue-text">GRACIAS POR UTILIZAR NUESTRO SISTEMA DE AYUDA!</p>
                  </div>`
}