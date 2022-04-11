const btnBuscar = document.querySelector("#btnBuscar")

const cargoComboSelect = (selId, arr)=> {//debugger
      const comboSelect = document.querySelector(`#${selId}`)
      let option = ""
            if (arr.length > 0) {
                for (elemento of arr)
                    option += `<option>${elemento}</option>`
                comboSelect.innerHTML = option
            }
}

cargoComboSelect("selectPaises", paisesDelSur)
cargoComboSelect("selectLocalidades", localidades)

const buscarYreemplazar = ()=> {//debugger
    let eliminar = prompt("Ingrese el elemento a eliminar del array Paises:")
        if (eliminar != "") {
            posicion = paisesDelSur.findIndex(p => p == eliminar)
            if (posicion != -1) {
                paisesDelSur.splice(posicion, 1, "eliminado")
                console.table(paisesDelSur)
            }
        }
}

btnBuscar.addEventListener("mouseup", buscarYreemplazar)