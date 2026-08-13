// Cambio del texto
let parrafo = document.querySelector('p')

let btexto = document.querySelector ("#cambiotexto")
btexto.onclick = function(){
    parrafo.textContent = "este texto cambio"
}
// Fondo del parrafo
let bfondo = document.querySelector("#cambiofondo")
bfondo.onclick = function() {
parrafo.style.backgroundColor = "lightblue"

}

// Cambio de color
let bcolor = document.querySelector("#cambiocolor")
bcolor.onclick = function() {
    parrafo.style.color = "Black"
}
 // Cambio letra
 let bletra = document.querySelector ("#cambioletra")
 bletra.onclick =function(){
     parrafo.style.fontFamily = "IMPACT"
 }
