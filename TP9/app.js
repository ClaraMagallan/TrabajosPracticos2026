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
