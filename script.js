let imagenes = ['images/interior.jpg', 'images/exterior.jpg', 'images/accesorios.jpg'];
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
    if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z.]{2,})$/.test(email)) {
        errores.push('El email no es válido.');
    }
    if (!/^\d{3}-\d{4}-\d{3}$/.test(telefono)) {
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
    // Mostrar los errores o los datos enviados
    if (errores.length > 0) {
        // Si hay errores, mostrar un recuadro rojo con los errores
        let divErrores = document.createElement('div');
        divErrores.style.border = '2px solid red';
        divErrores.style.backgroundColor = '#f8d7da';
        divErrores.style.color = '#721c24';
        divErrores.style.padding = '10px';
        divErrores.style.marginTop = '10px';
        divErrores.style.borderRadius = '5px';

        errores.forEach(function(error) {
            let p = document.createElement('p');
            p.textContent = error;
            divErrores.appendChild(p);
        });

        resultado.appendChild(divErrores);
    } else {
        // Si todo está bien, mostrar los datos en un recuadro verde
        let divExito = document.createElement('div');
        divExito.style.border = '2px solid green';
        divExito.style.backgroundColor = '#d4edda';
        divExito.style.color = '#155724';
        divExito.style.padding = '10px';
        divExito.style.marginTop = '10px';
        divExito.style.borderRadius = '5px';

        let pExito = document.createElement('p');
        pExito.textContent = `Datos enviados correctamente: 
        Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`;
        divExito.appendChild(pExito);

        resultado.appendChild(divExito);
    }
}
