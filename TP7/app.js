
/*let ej1 = document.querySelector('#ej1')
let botonEj1 = document.querySelector('#botonEj1')
//Guardamos el input de html
let inputEj1 = document.querySelector('#inputEJ1')
//Dejamos el valor de la variable en 0 para comenzar
let edad = 0
botonEj1.onclick = function () {
  //A la variable edad le asignamos el valor que tiene el input (campo de texto)
  edad = inputEj1.value
  //Comparamos si esa variable es mayor o igual a 18
  if (edad >= 18) {
    ej1.textContent = 'Sos mayor de edad'
  } else {
    ej1.textContent = 'Sos menor de edad'
  }
}
*/
let ej5 = document.querySelector('#ej5')
let botonEj5 = document.querySelector('#botonEj5')
let edad = document.querySelector('#inputEj5')

botonEj5.onclick = function(){
  //Resolvemos el ejercicio condicional acá
  
  if ((edad.value >=6) && (edad.value <= 11)) {
    ej5.textContent = 'La edad corresponde a un niño/a'
  } else if((edad.value >=12) && (edad.value <= 18)){
    ej5.textContent = 'La edad corresponde a un adolescente'
  } else if ((edad.value >=19) && (edad.value <= 26)){
    ej5.textContent = 'La edad corresponde a un joven adulto'
  } else if ((edad.value >=27) && (edad.value <= 59)){
    ej5.textContent = 'La edad corresponde a un adulto'
  } else if(edad.value >= 60){
    ej5.textContent = 'La edad corresponde a un anciano'
  } else {
    ej5.textContent = 'La edad no se encuentra definida'

  }
}
/*
let ejX = document.querySelector('#ejX')
let botonEjX = document.querySelector('#botonEjX')
let texto = document.querySelector('#texto')

botonEjX.onclick = function(){
  ejX.textContent = texto.value
}

let ej7 = document.querySelector('#ej7')
let botonEj7 = document.querySelector('#botonEj7')
let contrasenia = 'secreto'

botonEj7.onclick = function () {
  if (contrasenia == 'secreto') {
    ej7.textContent = 'Acceso concedido'
  } else {
    ej7.textContent = 'Acceso denegado'
  }
}
*/
//Guardamos el elemento input en una variable
let inputColor = document.querySelector('#inputColor')
//Parrafo seleccionado
let pColor = document.querySelector('#pColor')
//Boton para aplicar los cambios de color
let botonColor = document.querySelector('#botonColor')

//Ejecutamos instrucciones al hacer clic
botonColor.onclick = function(){
  //Cambiamos el color del parrafo, con el valor almacenado en el input
  pColor.style.color = inputColor.value
}