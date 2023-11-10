console.log("-------------------- Ejercicio 1 --------------------")
console.log("Tablas de Multiplicar")
let E1number = prompt("Ingresar numero a multiplicar: ")
let i = 1
do {
    console.log(E1number + " x " + i + " = " + E1number * i)
    i++
} while (i <= 10)
console.log("")

console.log("-------------------- Ejercicio 2 --------------------")
console.log("Acumulacion de E7numeros")
let E2breaker = true
do {
    let E2number = parseInt(prompt("Que Numero desea apilar (ingresar 0 para Terminar)"))
    if (E2number == 0) {
        E2breaker = false
    } else {
        console.log(E2number)
    }
} while (E2breaker == true)
console.log("")

console.log("-------------------- Ejercicio 3 --------------------")
console.log("Adivinar Numero del 1 al 100")
let E3incognita = Math.floor(Math.random() * 100) + 1;
let E3intentos = 0
let E3breaker = true
do {
    let E3number = parseInt(prompt("Ingrese un número del 1 al 100"))
    E3intentos++
    if (E3number == E3incognita) {
        console.log("Felicidades, Adivinaste el número "+E3incognita+" en " + E3intentos + " Intentos")
        E3breaker = false
    } else if (E3number < E3incognita) {
        console.log("El número ingresado ("+E3number+") es menor al numero a adivinar, Vuelve a intentarlo.");
    } else {
        console.log("El número ingresado ("+E3number+") es mayor al numero a adivinar, Vuelve a intentarlo.");
    }
}while (E3breaker == true)
console.log("")

console.log("-------------------- Ejercicio 4 --------------------")
console.log("Números primos")
let E4breaker=  true


while (E4breaker == true) {
    
    let E4esPrimo = false
    let E4divisores = 0
    E4numero = parseInt(prompt("Ingrese el número que desea verificar (Ingrese 0 para terminar)"))
    if (E4numero==0){
        E4breaker=false
    }
    for (let i = 0; i <= E4numero; i++) {
        if (E4numero % i == 0) {
            E4divisores++
        }
    }

    if (E4divisores > 2) {
        E4esPrimo = false
    } else {
        E4esPrimo = true
    }

    if (E4esPrimo == false) {
        console.log(E4numero + " Es compuesto")
    } else {
        console.log(E4numero + " Es primo")
    }
}

console.log("")

console.log("-------------------- Ejercicio 5 --------------------")
console.log("Divisores")
let E5numero= parseInt(prompt("Ingrese el número al que desea sacar sus divisores"))
console.log("Los divisores de " + E5numero + " son: ")

for (let i = 1; i <= E5numero; i++){
    if (E5numero % i == 0)
    console.log(i)
}
console.log("")

console.log("-------------------- Ejercicio 6 --------------------")
console.log("Elementos del array de frutas:");
let E6frutas = ["Manzana", "Banana", "Naranja", "Uva", "Pera", "Kiwi", "Cereza", "Limón", "Fresa", "Sandía"];

for (let i = 0; i < E6frutas.length; i++) {
  console.log(E6frutas[i]);
}
console.log("")

console.log("-------------------- Ejercicio 7 --------------------")
var E7numeros = [10, 20, 30, 50, 80, 160, 250, 400, 500, 1000];

console.log("El doble de cada número del array es:");

for (let i = 0; i < E7numeros.length; i++) {
  console.log("El doble de " + E7numeros[i] + " es " + E7numeros[i] * 2);
}
console.log("")

console.log("-------------------- Ejercicio 8 --------------------")
console.log("presentación de Familiares: ")
let E8familia = [
    {
        nombre: "Samuel",
        edad: 10,
        relacion: "Hermano",
        ocupacion: "Estudiante de Primaria"
    },
    {
        nombre: "María",
        edad: 13,
        relacion: "Hermana",
        ocupacion: "Estudiante de Secundaria"
    },
    {
        nombre: "Carlos",
        edad: 38,
        relacion: "Padre",
        ocupacion: "Abogado"
    },
    {
        nombre: "Ana",
        edad: 37,
        relacion: "Madre",
        ocupacion: "Diseñadora",
    },
    {
        nombre: "Fernanda",
        edad: 62,
        relacion: "Abuela",
        ocupacion: "Profesora",
    }
]
for (i = 0; i < E8familia.length; i++) {
    console.log("Mi " + E8familia[i].relacion + " " + E8familia[i].nombre + " es " + E8familia[i].ocupacion + " y tiene " + E8familia[i].edad + " años")
}
console.log("")

console.log("-------------------- Ejercicio 9 --------------------")
console.log("")
console.log("-------------------- Ejercicio 10 --------------------")
console.log("")
console.log("-------------------- Ejercicio 11 --------------------")
console.log("")
console.log("-------------------- Ejercicio 12 --------------------")
console.log("")
console.log("-------------------- Ejercicio 13 --------------------")
console.log("")
console.log("-------------------- Ejercicio 14 --------------------")
console.log("")
console.log("-------------------- Ejercicio 15 --------------------")
console.log("")
console.log("-------------------- Ejercicio 16 --------------------")
