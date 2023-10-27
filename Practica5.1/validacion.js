document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('altaCuentaForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            // Si el formulario es válido, puedes enviar los datos al servidor o realizar otras acciones
            alert('Formulario válido. Datos enviados al servidor.');
        } else {
            // Si el formulario no es válido, muestra los mensajes de error debajo de los campos.
            const campos = form.querySelectorAll('.form-control[required]');
            campos.forEach((campo) => {
                if (!campo.checkValidity()) {
                    mostrarError(campo);
                } else {
                    ocultarError(campo);
                }
            });
        }
    });

    // Función para mostrar un mensaje de error debajo de un campo
    const mostrarError = (campo) => {
        campo.classList.add('is-invalid');
        const mensajeError = campo.nextElementSibling;
        mensajeError.style.display = 'block';
    };

    // Función para ocultar el mensaje de error de un campo
    const ocultarError = (campo) => {
        campo.classList.remove('is-invalid');
        const mensajeError = campo.nextElementSibling;
        mensajeError.style.display = 'none';
    };

    // Función para seleccionar/deseleccionar todos los checkboxes
    const selectAllCheckboxes = (selectAll) => {
        const checkboxes = document.querySelectorAll('.form-check-input');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = selectAll;
        });
    };

    // Botón para seleccionar todos los checkboxes
    const selectAllBtn = document.getElementById('selectAllBtn');
    selectAllBtn.addEventListener('click', function () {
        selectAllCheckboxes(true);
    });

    // Botón para deseleccionar todos los checkboxes
    const deselectAllBtn = document.getElementById('deselectAllBtn');
    deselectAllBtn.addEventListener('click', function () {
        selectAllCheckboxes(false);
    });

    // Agrega un evento de cambio a los campos para ocultar el mensaje de error cuando se corrige el campo
    const campos = form.querySelectorAll('.form-control[required]');
    campos.forEach((campo) => {
        campo.addEventListener('input', function () {
            if (campo.checkValidity()) {
                ocultarError(campo);
            }
        });
    });
});

