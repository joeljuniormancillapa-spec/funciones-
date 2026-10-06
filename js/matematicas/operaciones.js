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