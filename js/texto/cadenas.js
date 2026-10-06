function saludar(nombre) {
    return `¡Hola, ${nombre}!  Bienvenido.`;
}

function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}

function contarVocales(texto) {
    const vocales = texto.toLowerCase().match(/[aeiouáéíóú]/g);
    return vocales ? vocales.length : 0;
}

function aMayusculas(texto) {
    return texto.toUpperCase();
}

function contarPalabras(texto) {
    const textoLimpio = texto.trim();
    return textoLimpio ? textoLimpio.split(/\s+/).length : 0;
}

function esPalindromo(texto) {
    const textoNormalizado = texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

    return textoNormalizado === invertirTexto(textoNormalizado);
}