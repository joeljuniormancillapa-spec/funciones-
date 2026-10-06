const formulario = document.getElementById("calculadora-formulario");
const campoListaNumeros = document.getElementById("lista-numeros");
const listaResultados = document.getElementById("resultados");

campoListaNumeros.addEventListener("input", () => {
    campoListaNumeros.setCustomValidity("");
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const datos = new FormData(formulario);
    const numeroA = Number(datos.get("numeroA"));
    const numeroB = Number(datos.get("numeroB"));
    const edad = Number(datos.get("edad"));
    const anioNacimiento = Number(datos.get("anioNacimiento"));
    const nombre = datos.get("nombre").trim();
    const texto = datos.get("texto").trim();
    const numeroParidad = Number(datos.get("numeroParidad"));
    const numeroC = Number(datos.get("numeroC"));
    const numeros = datos.get("listaNumeros").split(",").map((numero) => Number(numero.trim()));
    const fechaNacimiento = datos.get("fechaNacimiento");
    const longitudId = Number(datos.get("longitudId"));

    if (!numeros.length || numeros.some((numero) => !Number.isFinite(numero))) {
        campoListaNumeros.setCustomValidity("Escribe números separados por comas.");
        campoListaNumeros.reportValidity();
        return;
    }
    campoListaNumeros.setCustomValidity("");

    const resultados = [
        `Suma: ${sumar(numeroA, numeroB)}`,
        `Resta: ${restar(numeroA, numeroB)}`,
        `Multiplicación: ${multiplicar(numeroA, numeroB)}`,
        `División: ${dividir(numeroA, numeroB)}`,
        `Edad actual aproximada: ${verEdad(anioNacimiento)} años`,
        `Mayor de edad: ${esMayorDeEdad(edad).trim()}`,
        `Saludo: ${saludar(nombre)}`,
        `Texto al revés: ${invertirTexto(texto)}`,
        `Vocales en el texto: ${contarVocales(texto)}`,
        `Par o impar: ${esPar(numeroParidad)}`,
        `Número mayor: ${obtenerMayor(numeroA, numeroB, numeroC)}`,
        `Promedio: ${calcularPromedio(numeros)}`,
        `Días desde la fecha indicada: ${diasVividos(fechaNacimiento)}`,
        `ID generado: ${generarID(longitudId)}`,
        `Texto en mayúsculas: ${aMayusculas(texto)}`,
        `Potencia (${numeroA} elevado a ${numeroB}): ${calcularPotencia(numeroA, numeroB)}`,
        `Factorial de ${numeroA}: ${calcularFactorial(numeroA)}`,
        `Palabras en el texto: ${contarPalabras(texto)}`,
        `¿El texto es palíndromo?: ${esPalindromo(texto) ? "Sí" : "No"}`
    ];

    console.group("Resultados de las funciones");
    listaResultados.replaceChildren();
    resultados.forEach((resultado) => {
        console.log(resultado);
        const elemento = document.createElement("li");
        elemento.textContent = resultado;
        listaResultados.appendChild(elemento);
    });
    console.groupEnd();
});

formulario.requestSubmit();