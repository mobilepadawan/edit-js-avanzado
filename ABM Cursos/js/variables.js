const dataError = [{id: 999, nombre: "Error", creado: "Error", duracion: "Error"}]
const URL = "https://61c0bf9433f24c00178235d7.mockapi.io/Cursos/"
const filasTabla = document.querySelector("tbody")
const cargando = document.querySelector("#cargando")
const dialog = document.querySelector("dialog")
const inputID = document.querySelector("#id")
const inputNombre = document.querySelector("#nombre")
const inputCreado = document.querySelector("#creado")
const inputDuracion = document.querySelector("#duracion")
const btnModificar = document.querySelector("#btnModificar")
const btnAgregar = document.querySelector("#btnAgregar")
const btnNuevo = document.querySelector("#btnNuevo")
const btnEliminar = document.querySelector("#btnEliminar")

let cursosJSON = []
const d = new Date()