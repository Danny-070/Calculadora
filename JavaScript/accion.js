//Función matemática para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false; // Números menores o iguales a 1 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si tiene otro divisor, no es primo
    }
    return true; // Si no encontró divisores, es primo
}

//Función principal que se ejecuta al presionar el botón
function calcular() {
    // Datos
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let CR = document.getElementById("resultado");

    //Verificación si las cajas están vacías
    if (isNaN(n1) || isNaN(n2)) {
        CR.innerHTML = "Por favor, ingresa los dos números.";
        return;
    }

    //---LÓGICA DE MAYOR O MENOR---
    let mensajeComparacion = "";
    if (n1 > n2) {
        mensajeComparacion = `El número <b>${n1}</b> es mayor que <b>${n2}</b>.`;
    } else if (n1 < n2) {
        mensajeComparacion = `El número <b>${n1}</b> es menor que <b>${n2}</b>.`;
    } else {
        mensajeComparacion = `Ambos números son iguales (<b>${n1}</b>).`;
    }

    // ---LÓGICA DE NÚMEROS PRIMOS---
    let mensajePrimo1 = esPrimo(n1) ? `El número <b>${n1}</b> es primo.` : `El número <b>${n1}</b> NO es primo.`;
    let mensajePrimo2 = esPrimo(n2) ? `El número <b>${n2}</b> es primo.` : `El número <b>${n2}</b> NO es primo.`;

    // ---MOSTRAR RESULTADOS---
    CR.innerHTML = `
        <p><b>Comparación:</b> ${mensajeComparacion}</p>
        <p><b>Primer número:</b> ${mensajePrimo1}</p>
        <p><b>Segundo número:</b> ${mensajePrimo2}</p>
    `;
}