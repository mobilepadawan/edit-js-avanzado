let HTMLTabla = ""
let contenidoAPI = []
const URL = "https://randomuser.me/api/"
const contenido = document.querySelector('#contenido')
const textoInicial = document.querySelector('#textoInicial')
const tablaResultados = document.querySelector('#tablaResultados')
const btnBuscar = document.querySelector('#btnbuscar')

const selectGender = document.querySelector("#selectGender")
const selectNat = document.querySelector("#selectNat")
const btnParamsBuscar = document.querySelector("#btnParamsBuscar") //buscar aplicando filtros