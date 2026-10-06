//ejercicio 1

function mayor() {
    let num1 = Number(document.querySelector("#numero1").value);
    let num2 = Number(document.querySelector("#numero2").value);

    if (num1 > num2) {
        document.querySelector("#resultado").textContent = "El número  "+num1+" es mayor";
    } else {
        document.querySelector("#resultado").textContent = "El número  "+num2+" es mayor";
    }
}
//ejercicio 2

function menor() {
    let num1 = Number(document.querySelector("#ejn1").value);
    let num2 = Number(document.querySelector("#ejn2").value);

    if (num1 < num2) {
        document.querySelector("#resultado2").textContent = "El número "+num1+" es menor";
    } else {
        document.querySelector("#resultado2").textContent = "El número "+num2+" es menor";
    }
}

// ejercicio 3

function numerosIguales() {
    let num1 = Number(document.querySelector("#num1Iguales").value);
    let num2 = Number(document.querySelector("#num2Iguales").value);

    if (num1 === num2) {
        document.querySelector("resultadoIguales").textContent =
            "Los dos números son iguales.";
    } else {
        document.querySelector("resultadoIguales").textContent =
            "Los dos números son diferentes.";
    }
}


// ejercicio 4

function calcularIVA() {
    let compra = Number(document.querySelector("#valorCompra").value);

    let iva = compra * 0.21;

    document.querySelector("#resultadoIVA").textContent =
        "El IVA es: $"

// ejercicio 5

function saludar() {
    let nombre = documentquerySelector("#nombre").value;

    document.querySelector("resultadoSaludo").textContent =
        "Hola " + nombre + ", ¡bienvenido/a!";
}

// ejercicio 6

function modoOscuro() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}


// ejercicio 7

function modoClaro() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}