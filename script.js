let imagenes = ['interior.jpg', 'exterior.jpg', 'accesorios.jpg'];
let indiceActual = 0;

function mostrarImagen() {
    document.getElementById('imagenCarousel').src = imagenes[indiceActual];
}

function siguienteImagen() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen();
}

function anteriorImagen() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
}

mostrarImagen();

function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;

    let errores = [];

    if (nombre.length === 0) {
        errores.push('El nombre es obligatorio.');
    }
    if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
        errores.push('El email no es válido.');
    }
    if (!/^\d{4}-\d{3}-\d{3}$/.test(telefono)) {
        errores.push('El teléfono no tiene el formato correcto.');
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (errores.length > 0) {
        errores.forEach(error => {
            let p = document.createElement('p');
            p.textContent = error;
            resultado.appendChild(p);
        });
    } else {
        let p = document.createElement('p');
        p.textContent = `Datos enviados: Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`;
        resultado.appendChild(p);
    }
}
