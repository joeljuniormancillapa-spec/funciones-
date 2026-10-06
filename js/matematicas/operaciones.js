function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) return "No se puede dividir entre 0";
    return a / b;
}

function obtenerMayor(a, b, c) {
    return Math.max(a, b, c);
}

function calcularPromedio(numeros) {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((acc, n) => acc + n, 0);
    return suma / numeros.length;
}

function calcularPotencia(base, exponente) {
    return base ** exponente;
}

function calcularFactorial(numero) {
    if (!Number.isInteger(numero) || numero < 0) {
        return "Ingresa un número entero igual o mayor que 0";
    }

    let resultado = 1;
    for (let factor = 2; factor <= numero; factor++) {
        resultado *= factor;
    }
    return resultado;
}