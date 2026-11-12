 let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];
 console.log(utiles)
 console.log(utiles[0]);
 console.log(utiles[1]);
 console.log(utiles[2]);
 console.log(utiles[3]);
 console.log(utiles[utiles.length -1]);
 console.log(utiles.length);

 utiles.push("Mochila");
console.log(utiles);

utiles.unshift("Cartuchera")
console.log(utiles);

console.log(utiles.length);

utiles.pop()
console.log(utiles.length);
console.log(utiles);

utiles.shift()
console.log(utiles.length);
console.log(utiles);

// Ejercicio 2

let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];

console.log(productos)
console.log(productos.length)

productos.push("azucar")

productos.push("yerba")

productos.push("cafe")

console.log(productos)

productos.unshift("sal")

productos.unshift("galletitas")

console.log(productos)
console.log(productos.length)

productos.pop()
console.log(utiles[utiles.length -1]);
 console.log(utiles.length);
 
// ejercicio 3

let productos = [
    "Teclado",
    "Mouse",
    "Monitor",
    "Auriculares",
    "Webcam",
    "Parlantes"
];

console.log(productos);

console.log(productos.indexOf("Mouse"));
console.log(productos.indexOf("Monitor"));
console.log(productos.indexOf("Webcam"));
console.log(productos.indexOf("Impresora"));

let teclado = productos.indexOf("Teclado");

if (teclado !== -1) {
    console.log("El teclado está registrado");
} else {
    console.log("El teclado no está registrado");
}

let impresora = productos.indexOf("Impresora");

if (impresora !== -1) {
    console.log("La impresora está registrada");
} else {
    console.log("La impresora no está registrada");
}

productos.push("Impresora");

console.log(productos.indexOf("Impresora"));
console.log(productos.length);

// ejercicio 4

let videojuegos = [
    "Minecraft",
    "Pokémon Cristal",
    "Super Mario",
    "The Legend of Zelda",
    "Sonic"
];

console.log(videojuegos);
console.log(videojuegos.length);

videojuegos.push("Animal Crossing");
videojuegos.push("Pokémon Rojo");

console.log(videojuegos);

videojuegos.unshift("Tetris");
videojuegos.unshift("Pac-Man");

console.log(videojuegos);

console.log(videojuegos.indexOf("Pokémon Cristal"));
console.log(videojuegos.indexOf("Sonic"));
console.log(videojuegos.indexOf("FIFA"));

let eliminado1 = videojuegos.pop();
console.log(eliminado1);

let eliminado2 = videojuegos.shift();
console.log(eliminado2);

console.log(videojuegos);
console.log(videojuegos.length);

// ejercicio 5

let estudiantes = [
    "Martina",
    "Lucas",
    "Sofía",
    "Tomás",
    "Valentina"
];

console.log(estudiantes);
console.log(estudiantes.length);

estudiantes.push("Agustín");
estudiantes.push("Camila");

console.log(estudiantes);

estudiantes.unshift("Bruno");

console.log(estudiantes);
console.log(estudiantes.length);

console.log(estudiantes.indexOf("Sofía"));
console.log(estudiantes.indexOf("Camila"));
console.log(estudiantes.indexOf("Federico"));

let eliminado1 = estudiantes.shift();
console.log(eliminado1);

let eliminado2 = estudiantes.pop();
console.log(eliminado2);

console.log(estudiantes);
console.log(estudiantes.length);

