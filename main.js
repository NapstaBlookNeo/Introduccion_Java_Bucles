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
    let E4numero = parseInt(prompt("Ingrese el número que desea verificar (Ingrese 0 para terminar)"))
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
console.log("duplicar números")
let E7numeros = [10, 20, 30, 50, 80, 160, 250, 400, 500, 1000];

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
console.log("Números pares")
let E9numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < E9numeros.length;i++){
    if(E9numeros[i] % 2 == 0){
        console.log(E9numeros[i])
    }
}
console.log("")

console.log("-------------------- Ejercicio 10 --------------------")
console.log("Suma de números pares e impares")
let E10pares = 0
let E10impares = 0
let E10numero = 5
do{
E10numero = parseInt(prompt("Ingrese el número que desea sumar (ingresar 0 para terminar)"))
if (E10numero % 2 == 0){
    E10pares = E10numero+ E10pares
}else{
    E10impares = E10numero+ E10impares
}
console.log("----------------------------------------")
console.log("suma total de numeros pares: " + E10pares)
console.log("suma total de numeros pares: " + E10impares)
}while(E10numero!=0)
console.log("")

console.log("-------------------- Ejercicio 11 --------------------")
console.log("Número más grande")
let E11numeros = [10, 7, 30, 65, 16, 20, 19, 28, 37, 5];
let E11numeroMayor = 0
for(let i = 0; i < E11numeros.length;i++){
    if(E11numeros[i] > E11numeroMayor){
        E11numeroMayor = E11numeros[i]
    }
}
console.log("El número mayor es: " + E11numeroMayor)
console.log("")

console.log("-------------------- Ejercicio 12 --------------------")
console.log("Número más chico")
let E12numeros = [10, 7, 30, 65, 16, 20, 19, 28, 37, 5];
let E12numeroMenor =  Number.MAX_SAFE_INTEGER
for(let i = 0; i < E12numeros.length;i++){
    if(E12numeros[i] < E12numeroMenor){
        E12numeroMenor = E12numeros[i]
    }
}
console.log("El número más chico es: " + E12numeroMenor)
console.log("")

console.log("-------------------- Ejercicio 13 --------------------")
console.log("Piedra papel o tijera")
E13jugador1 = prompt("Inirese el nombre del Jugador 1")
E13jugador2 = prompt("Ingrese el nombre del Jugador 2")
E13empate = true
do{
E13manoJugador1 = prompt(E13jugador1 + " porfavor ingrese su mano (Piedra, Papel, Tijera)").toLowerCase()
E13manoJugador2 = prompt(E13jugador2 + " porfavor ingrese su mano (Piedra, Papel, Tijera)").toLowerCase()
if (E13manoJugador1 == "piedra" && E13manoJugador2 == "tijera" || E13manoJugador1 == "papel" && E13manoJugador2 == "piedra" || E13manoJugador1 == "tijera" && E13manoJugador2 == "papel"){
    console.log(E13jugador1 + " ha ganado con " + E13manoJugador1 + " a " + E13manoJugador2 + " de " + E13jugador2)
    E13empate = false
}else if (E13manoJugador2 == "piedra" && E13manoJugador1 == "tijera" || E13manoJugador2 == "papel" && E13manoJugador1 == "piedra" || E13manoJugador2 == "tijera" && E13manoJugador1 == "papel"){
    console.log(E13jugador2 + " ha ganado con " + E13manoJugador2 + " a " + E13manoJugador1 + " de " + E13jugador1)
    E13empate = false
}else if (E13manoJugador1==E13manoJugador2){
    console.log("ambos jugadores han empatado con " + E13manoJugador2 + " Se juega nuevamente")
    E13empate = true
}
}while(E13empate == true)
console.log("")

console.log("-------------------- Ejercicio 14 --------------------")
console.log("Estrellas")
E14numero = parseInt(prompt("Cuantas estrellas desea que tenga la última linea"))
let E14estrellas = ""

for(let i = 0; i < E14numero; i++){
    E14estrellas = E14estrellas + "☆ "
    console.log(E14estrellas)
}
console.log("")

console.log("-------------------- Ejercicio 15 --------------------")
console.log("Estrellas")
E15numero = parseInt(prompt("Cuantas estrellas desea que tenga la primera linea"))


for(let i = E15numero; i > 0; i--){
    let E15estrellas = ""
    for (let j = i; j > 0; j--){
    E15estrellas = E15estrellas + " ☆"
    }
    console.log(E15estrellas)
}
console.log("")

console.log("-------------------- Ejercicio 16 --------------------")
let E16numeros = [100, 50, 80, 20, 70, 30, 10, 60, 40, 90];
console.log("Orden original: " + E16numeros)

for (let i = 0; i < E16numeros.length; i++) {
    for (let j = 0; j < E16numeros.length; j++) {
        if (E16numeros[j] > E16numeros[j + 1]) {
            E16numeros[j] = E16numeros[j] + E16numeros[j + 1];
            E16numeros[j + 1] = E16numeros[j] - E16numeros[j + 1];
            E16numeros[j] = E16numeros[j] - E16numeros[j + 1];
        }
    }
}

console.log("Orden organizado: " + E16numeros);
