/*
las promesas son un objeto que representan un valor que van a resolver y que nosotros vamos a poder acceder a esta.
Una de las ventajas de utilizar promesas por sobre métodos nativos como ASYNC AWAIT es que las promesas serán más flexibles para que podamos reutilizar cada vez más y más nuestro código, siempre que utilicemos a las promesas de la forma correcta.

Las promesas funcionan de dos formas:
.pueden resolverse inmediatamente
.pueden resolverse en un futuro

También pueden:
.fallar inmediatamente
.fallar en un futuro

Poseen tres estados:
<PENDING>
<RESOLVED>
<REJECTED>

Poseen una serie de métodos para manejar por etapas un proceso de mediana o alta complejidad. El manejo se realiza de forma asincrónica, aunque suelen combinarse hoy con ASYNC - AWAIT.
.then() //método que organiza las etapas de ejecución de la promesa
.then() //podemos usar N cantidad de .then() según cómo deseemos estructurar el código
.catch() //Si en el medio ocurre un error detectable por nosotros (programadores), o generado de forma inesperada por un proceso no controlado en el código, se dispara el método .catch()
.catch() //este permite controlar el error en cuestión mediante un LOG del mismo, y/o definir un error amigable de cara al usuario de la aplicación
.finally() //Este último método, se ejecuta siempre más allá que nuestra promesa se resuelva correctamente, o que surja un error en el medio del código.


####################################################################################
VENTAJAS
####################################################################################

VENTAJAS DE UTILIZAR PROMESAS:

Se pueden encadenar, lo cual nos permitiría, por ejemplo:

Promesa1 devuelve un valor, puedo disparar una Promesa2 y esperar que devuelva su valor asociado, y luego disparar promesa3 y esperar que finalmente devuelva un tercer valor.

Este encademamiento nos permite estructurar el código fácilmente y casi obviar un control de errores porque, si promesa1 no se resuelve, promesa2 y promesa3 nunca serán iniciadas.

Así es como mantener una estructura de promesas nos hará más sencillo el manejo de los errores en JS.

Desde hace unos años, las promesas se encuentran integradas de forma nativa tanto en el navegador web como en NodeJS (JavaScript del lado del servidor).
Originalmente nacieron de la mano de NODE para poder controlar un ambiente de backend mayormente asincrónico.

#####################################################################################

const prom1 = Promise.resolve(1)

En sí, el resultado que resuelve la promesa anterior, no quedará asignado directamente sobre la constante prom1, sino que dicha constante se convierte en un objeto del tipo Closure o Literal {}, y recién dentro de este podremos encontrar el valor resuelto por la promesa en cuestión.

Para poder acceder al valor resuelto por la promesa, debemos hacer:

prom1
   .then(x => console.log(x))

declaramos nuestra constante (que se convirtió en objeto), invocamos al método .then(), le pasamos un parámetro por referencia, y recién allí leemos su valor obtenido.

Seguido a esto, podemos desplegar un nuevo método .then() y, por ejemplo, realizar algún tipo de conversión u operación sobre 
*/


//***************************************************************************
// PRACTICA 1
//***************************************************************************

// const prom1 = Promise.resolve(1)
// //Integrar resolve() y then()
// prom1
//       .then(x => x)
//       .then(x => Number(x) * 7)
//       .then(x => x)
//       .then(x => Promise.resolve((x) * 3))
//       .then(x => console.log(x))
//       .catch(x => console.error(`Ocurrió algo con la promesa de ${x}`))


//***************************************************************************
// PRACTICA 2
//***************************************************************************

// const prom2 = Promise.resolve(7)
// //Integrar rechazos mediante reject()
// prom2
//       .then(y => y * 3)
//       .then(y => y * 10)
//       .then(x => Promise.reject('Error: se rompió nuestra aplicación :('))
//       .then(y => console.warn("Esto no se debería ver."))
//       //El método reject() se ejecuta cuando algo no salió bien, y cortará la cadena del resto de métodos .then() que vengan posterior a éste.
//       .catch(e => console.error(`Aquí llegamos porque, en el camino de nuestra promesa, apareció un método reject(). Reject viene con un mensaje, que lo mostraremos a continuación: \n \n ${e}`))

//***************************************************************************
// PROMISE.ANY() Y PROMISE.ALL().
//***************************************************************************

// También vamos a encontrar que existen los métodos .any() y .all() dentro de Promises.
// Estos permiten ejecutar un bloque then() asociado a la respuesta parcial o total de un conjunto de promesas.

// const promise1 ...
// const promise2 ...
// const promise3 ...

// const promiseArray = [promise1, promise2, promise3]

// Promise.any(promiseArray).then((//el código a ejecutar cuando al menos una se cumpla...))

// Promise.all(promiseArray).then((//el código a ejecutar cuando todas se cumplan...))


//***************************************************************************
// EJEMPLO PARA MOSTRAR COMO FUNCIONA UNA PETICIÓN FETCH JUNTO CON PROMISES.
//***************************************************************************

// URL = 'https://jsonplaceholder.typicode.com/users'
// //URL = 'https://jsonplacesssssholder.typicode.com/users'

// // Función para invocar a fetch API
// function llamoAPIpromise(URL) {
//    fetch(URL)
//          .then((response) => response.json())
//          .then((json) => {
//             console.table(json)
//             // json.forEach(element => {
//             //    console.table(element)               
//             // })
//          })
//          .catch(e => console.error(`Ocurrió un error: ${e}`))
//          .finally(x => console.warn('Esto lo ejecutamos más allá del .then(), reject() y/o catch() que tenga la estructura de nuestra promesa.'))
// }


//***************************************************************************
//Otra alternativa para utilizar fetch, es con try() catch() convencional...
//En este caso, el try() catch() desordena los bloques y no espera a la 
//respuesta de fetch() antes de ejecutar catch89 y finally()
//***************************************************************************

function llamoAPIjsonTCF(URL) {
   console.log(URL)
         try {
            fetch(URL)
                  .then((response) => response.json())
                  .then((response) => console.table(response))
         } catch (err) {
            msj = `Se produjo un error al ejecutar la API fetch(): ${err}`
            console.error(msj)
         } finally {
            console.warn('Este bloque se ejecuta indistintamente luego de try() o catch().')
         }
}

//***************************************************************************
// //Un bloque más, combinando asincronismo y promesas
//***************************************************************************

function llamarAPIJSONplaceHolder() {
   const URLok = 'https://jsonplaceholder.typicode.com/users'
   //const URLfake = 'https://jsonplaceholder.noexisto.com/users'
   setTimeout(
   fetch(URLfake)
         .then((response) => response.json())
         .then((json) => {
            json.forEach(element => {
               console.table(element)               
            })
         })
         .catch(e => console.error(`Ocurrió un error inesperado... ${e}`))
, 4500)
}

// async function jph() {
//     console.log('Peticiono a JSON Placeholder...')
//     const r = await llamarAPIJSONplaceHolder()
// }

// jph() //Ejecuta la función JPH() la cual es asíncrona
