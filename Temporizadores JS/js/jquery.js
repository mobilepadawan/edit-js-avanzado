$("#titulo").text('Jquery 3.6')

const listado = `<ol>
                    <li>Curso JS</li>
                    <li>Curso JS avanzado</li>    
                    <li>Curso Node JS</li>
                    <li>Curso Node y MongoDB</li>
                </ol>`

//es el equivalente a elemento.innerHTML()
$("#listado").html(listado)

//el equivalente a elemento.append() pero resuelve internamente
//si lo que recibe es un elemento creado a partir de createElement()
//o si es un bloque HTML creado dentro de una variable
$("#listado").append(listado)

//SELECTOR DE TAGS
$('img')

//MANEJO DE CLASSES CSS //equivalente a classList.add(), classList.remove(), classList.toggle()
$('img').toggleClass('hide')

//SELECTOR DE IDs
//$('#iddelelementohtml')

//SELECTOR DE CLASES CSS
//$('.claseCSS .clase2CSS')

//SELECTOR DE INPUT TYPES
//$(':inputTextAseleccionar')

//ANIMACIONES
$('selector').hide()
$('selector').show() //milisegundos o constantes 'fast' / 'slow'
$('selector').fadeIn()
$('selector').fadeOut()
$('selector').slideUp()
$('selector').slideDown()
$('selector').slideToggle()

// $('a').on("click",()=> {
//     console.warn('Botón JQuery disparando un evento.')
//     alert('Hola, desde JQuery!')
// })

// $("#listado").on("mousemove", ()=> {
//     console.log('moviendo el mouse sobre la lista ordenada.')
// })