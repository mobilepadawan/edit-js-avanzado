const dataError = [{id: 999, nombre: "Error", creado: "Error", duracion: "Error"}]
const URL = "https://61c0bf9433f24c00178235d7.mockapi.io/Cursos/"
const filasTabla = document.querySelector("tbody")
const dialog = document.querySelector("dialog")
const inputID = document.querySelector("#id")
const inputNombre = document.querySelector("#nombre")
const inputCreado = document.querySelector("#creado")
const inputDuracion = document.querySelector("#duracion")
const btnConfirmar = document.querySelector("#btnConfirmar")
const btnAgregar = document.querySelector("#btnAgregar")
const btnNuevo = document.querySelector("#btnNuevo")
let cursosJSON = []