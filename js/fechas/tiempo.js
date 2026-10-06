function verEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimiento;
}

function diasVividos(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    const diferencia = hoy - nacimiento;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24));
}