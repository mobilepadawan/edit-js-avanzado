// alert("Hola, mundo!")
// const nombre = prompt("Ingrese su nombre:","")
// const acepto = confirm("Por favor, pulse ACEPTAR para confirmar que acepta los términos y condiciones establecidos")

function agregarUnTexto() {
   let imprimir = ``
   let parrafo = `<p>Hola, esto es un texto generado automáticamente</p>`
      for (let i = 0; i < 1000; i++)
         imprimir += parrafo
      document.body.innerHTML += imprimir
}

function agregarUnTextoNoOptimizado() {
   let parrafo = `<p>Hola, esto es un texto generado automáticamente</p>`
      for (let i = 0; i < 1000; i++)
         document.body.innerHTML += parrafo
}