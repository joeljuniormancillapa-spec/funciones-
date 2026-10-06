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