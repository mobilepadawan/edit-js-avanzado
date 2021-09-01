function aplicoColor() {
    let colorActual = document.body.bgColor
        switch (colorActual) {
            case "":
                document.body.bgColor = "white"
                break
            case "white":
                document.body.bgColor = "darkred"
                break
            case "darkred":
                document.body.bgColor = "green"
                break
            case "green":
                document.body.bgColor = "yellow"
                break
            case "yellow":
                document.body.bgColor = "blue"
                break
            case "blue":
                document.body.bgColor = "black"
                break
            default:
                document.body.bgColor = "white"
        }
}

function mostrarOcultarProgressBar() {
    document.body.querySelector("#progreso").classList.toggle("hide")
}

function irAformulario() {
    location.target = "_self"
    location.href = "formulario.html"
}