const respuestaUsuario = document.getElementById("numero_usuario")
const descripcionRespuesta = document.getElementById("descripcion")
const btnVerificar = document.getElementById("verificar")
const intentos = document.getElementById("intentos")
const btnReiniciar = document.getElementById("reiniciar")



let numeroRandom = Math.random() * 100
numeroRandom = Math.round(numeroRandom)
let contador = 0


btnVerificar.addEventListener("click", () => {

    const respuesta = respuestaUsuario.value

    if (validarCampo(respuestaUsuario)) {
        if (respuesta == numeroRandom) {
            diseñoDeLaRespuesta(descripcionRespuesta, "green", "none")
            contador++
            mostrarIntentos(intentos, contador)
            descripcionRespuesta.innerText = "Has ganado " + String.fromCodePoint(128558) + " en " + contador + " intentos"
        } else if (respuesta < numeroRandom) {
            diseñoDeLaRespuesta(descripcionRespuesta, "yellow", "none")
            descripcionRespuesta.innerText = "Es un numero mayor " + String.fromCodePoint(128555)
            contador++
            mostrarIntentos(intentos, contador)
        }
        else if (respuesta > numeroRandom) {
            diseñoDeLaRespuesta(descripcionRespuesta, "red", "none")
            descripcionRespuesta.innerText = "Es un numero menor " + String.fromCodePoint(128162)
            contador++
            mostrarIntentos(intentos, contador)
        }
    } else {
        diseñoDeLaRespuesta(descripcionRespuesta, "white", "line-throught")
        descripcionRespuesta.innerText = "NO TE HAGAS EL CHISTOSO" + String.fromCodePoint(128580)
    }
})


btnReiniciar.addEventListener("click", () => {
    contador  = 0
    diseñoDeLaRespuesta(descripcionRespuesta, "white", "none")
    descripcionRespuesta.innerText = "Iniciemos" +  String.fromCodePoint(9996);
    intentos.innerText = "0"
    respuestaUsuario.value = ""
})


function validarCampo(input) {
    return (input.value <= 100 && input.value >= 0) ? true : false
}

function diseñoDeLaRespuesta(elemento, color, decoration){
        elemento.style.color = color
        elemento.style.textDecoration = decoration
}

function mostrarIntentos(span, contador){
    span.innerText = contador
}