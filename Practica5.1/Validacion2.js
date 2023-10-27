document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('validacionForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        validarCodigoPostal();
        validarNumeroEntero();
        validarNumeroReal();
        validarTelefono();
        validarTelefonoInternacional();
        validarFecha();
        validarEmail();
        validarDNI();
        validarURL();
        validarTarjetaCredito();
    });

    function mostrarError(input, mensaje) {
        const errorElement = document.getElementById(input.id + 'Error');
        errorElement.textContent = mensaje;
        input.classList.add('is-invalid');
    }

    function limpiarError(input) {
        const errorElement = document.getElementById(input.id + 'Error');
        errorElement.textContent = '';
        input.classList.remove('is-invalid');
    }

    function validarCodigoPostal() {
        const input = document.getElementById('codigoPostal');
        const codigoPostalRegex = /^[0-9]{5}$/;

        if (!codigoPostalRegex.test(input.value)) {
            mostrarError(input, 'Código Postal inválido (debe ser de 5 dígitos).');
        } else {
            limpiarError(input);
        }
    }

    function validarNumeroEntero() {
        const input = document.getElementById('numeroEntero');
        const numeroEnteroRegex = /^-?\d+$/;

        if (!numeroEnteroRegex.test(input.value)) {
            mostrarError(input, 'Número entero inválido.');
        } else {
            limpiarError(input);
        }
    }

    function validarNumeroReal() {
        const input = document.getElementById('numeroReal');
        const numeroRealRegex = /^-?\d+(\.\d+)?$/;

        if (!numeroRealRegex.test(input.value)) {
            mostrarError(input, 'Número real inválido.');
        } else {
            limpiarError(input);
        }
    }

    function validarTelefono() {
        const input = document.getElementById('telefono');
        const telefonoRegex = /^\d{9}$/;

        if (!telefonoRegex.test(input.value)) {
            mostrarError(input, 'Número de teléfono inválido (9 dígitos).');
        } else {
            limpiarError(input);
        }
    }

    function validarTelefonoInternacional() {
        const input = document.getElementById('telefonoInternacional');
        const telefonoInternacionalRegex = /^\+\d{1,4}\s?\d{6,14}$/;

        if (!telefonoInternacionalRegex.test(input.value)) {
            mostrarError(input, 'Número de teléfono internacional inválido.');
        } else {
            limpiarError(input);
        }
    }

    function validarFecha() {
        const input = document.getElementById('fecha');
        const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (!fechaRegex.test(input.value)) {
            mostrarError(input, 'Fecha inválida (YYYY-MM-DD).');
        } else {
            limpiarError(input);
        }
    }

    function validarEmail() {
        const input = document.getElementById('email');
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(input.value)) {
            mostrarError(input, 'Email inválido.');
        } else {
            limpiarError(input);
        }
    }

    function validarDNI() {
        const input = document.getElementById('dni');
        const dniRegex = /^\d{8}[A-Za-z]$/;

        if (!dniRegex.test(input.value)) {
            mostrarError(input, 'DNI inválido (8 dígitos seguidos de una letra).');
        } else {
            limpiarError(input);
        }
    }

    function validarURL() {
        const input = document.getElementById('url');
        const urlRegex = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

        if (!urlRegex.test(input.value)) {
            mostrarError(input, 'URL inválida.');
        } else {
            limpiarError(input);
        }
    }

    function validarTarjetaCredito() {
        const input = document.getElementById('tarjetaCredito');
        const tarjetaCreditoRegex = /^\d{13,16}$/;

        if (!tarjetaCreditoRegex.test(input.value)) {
            mostrarError(input, 'Tarjeta de Crédito inválida (entre 13 y 16 dígitos).');
        } else {
            limpiarError(input);
        }
    }
});
