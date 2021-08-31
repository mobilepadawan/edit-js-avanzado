const body = document.getElementById("cuerpo")

const titulo1 = document.createElement("h1")
titulo1.innerText = "EduITfy"
body.append(titulo1)

const parrafo1 = document.createElement("p")
parrafo1.innerText = "Nos distendemos con un poco de música"
document.body.appendChild(parrafo1)

const imagen = document.createElement("img")
imagen.src = "cover/blank.jpg"
imagen.width = "300px"
document.body.appendChild(imagen)

const audio = document.createElement("audio")
audio.src = "Sources/Tones_and_I_Dance_Monkey.mp3"
audio.controls = true
audio.buffered = true
document.body.appendChild(audio)