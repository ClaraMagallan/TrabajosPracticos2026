/*let parrafo1 = document.querySelector('#parrafo')
let campoDeTexto = document.querySelector('#texto')
let botonTexto = document.querySelector('#botonTexto')
let body = document.querySelector('body')

botonTexto.onclick = function () {
    if (campoDeTexto.value > 0) {
        parrafo1.textContent = 'Positivo'
    } else if (campoDeTexto.value < 0) {
        parrafo1.textContent = 'Negativo'
    } else {
        parrafo1.textContent = 'Cero'

    }
}


/*

 if (campoDeTexto.value >= 18) {
        parrafo.textContent = 'Sos mayor de edad'
        parrafo.style.color = 'green'
    } else {
        parrafo.textContent = 'Sos menor de edad'
        parrafo.style.color = 'red'
    }
botonTexto.onclick = function () {
    if (campoDeTexto.value == 'rojo') {
        parrafo.style.color = 'red'
        parrafo.textContent = 'El parrafo es rojo'
        parrafo.style.fontSize = '20px'
        body.style.backgroundColor = 'pink'
    } else if (campoDeTexto.value == 'verde') {
        parrafo.style.color = 'green'
        parrafo.textContent = 'El parrafo es verde'
        parrafo.style.fontSize = '30px'
        body.style.backgroundColor = 'blue'
    } else if (campoDeTexto.value == 'azul') {
        parrafo.style.color = 'blue'
        parrafo.textContent = 'El parrafo es azul'
        parrafo.style.fontSize = '70px'
        body.style.backgroundColor = 'purple'
    }else{
        parrafo.style.color = 'black'
        parrafo.textContent = 'Este texto va a cambiar'
        parrafo.style.fontSize = '12px'
        body.style.backgroundColor = 'rgb(186, 208, 249)'
    }
}*/
/*
SEA: 1 a 3
EP: 4 a 5
S: 6 a 8
MS: 9 a 10
*/
/*
let parrafo1 = document.querySelector('#parrafo1')
let boton1 = document.querySelector('#boton1')
let nota = document.querySelector('#input1')

boton1.onclick = function(){
    if (nota.value >= 1 && nota.value <= 3) {
        parrafo1.textContent = 'SEA'
    } else if (nota.value >= 4 && nota.value <= 5) {
        parrafo1.textContent = 'EP'
    } else if (nota.value >= 6 && nota.value <= 8) {
        parrafo1.textContent = 'S'
    } else if (nota.value >= 9 && nota.value <= 10) {
        parrafo1.textContent = 'MS'
    } else{
        parrafo1.textContent = 'Nota no válida, ingresar valores entre 1 y 10'
    }
}
    */

   let parrafo1 = document.querySelector('#parrafo1')
   let boton1 = document.querySelector('#boton1')
   let texto = document.querySelector('#input1')
   /*
   SEA: 1 A 3
   EP: 4 A 5
   S: 6 A 8
   MS: 9 A 10
   */
   boton1.onclick = function(){
       if ((texto.value <= 3) && (texto.value >=1)) {
           parrafo1.textContent = 'SEA'
           parrafo1.style.color = '#b61313'
       } else if((texto.value >= 4) && (texto.value <=5)){
            parrafo1.textContent = 'EP'
           parrafo1.style.color = '#e48a30'
       }  else if((texto.value >= 6) && (texto.value <=8)){
            parrafo1.textContent = 'S'
           parrafo1.style.color = '#f1f51b'
       }  else if((texto.value >= 9) && (texto.value <=10)){
            parrafo1.textContent = 'MS'
           parrafo1.style.color = '#138e0a'
       } else{
   parrafo1.textContent = 'ingresa un valor de 1 a 10'
           parrafo1.style.color = '#151b15'
   
       }
   
   }