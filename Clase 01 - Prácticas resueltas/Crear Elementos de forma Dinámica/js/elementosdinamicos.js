const body = document.querySelector("body")

const titulo1 = document.createElement("h1")
titulo1.innerText = "EduITfy"
body.appendChild(titulo1)

const parrafo1 = document.createElement("p")
parrafo1.innerText = "Nos distendemos con un poco de música"
body.appendChild(parrafo1)

const imagen = document.createElement("img")
imagen.src = "cover/blank.jpg"
//SIEMPRE VOY A LO SEGURO, PERO EN IMG NO PUDE HACER ANDAR ESTO
// imagen.width = "300px"
// imagen.height = "300px"
imagen.setAttribute("width", "100%")
body.appendChild(imagen)

const audio = document.createElement("audio")
audio.src = "Sources/Tones_and_I_Dance_Monkey.mp3"
audio.controls = true
audio.buffered = true
audio.autoplay = true
audio.loop = true
body.appendChild(audio)