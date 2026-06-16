// CONTACTO.JS


// Elementos del DOM y formulario

const formulario = document.getElementById("formContacto");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("btnEnviar");
const mensajeExito = document.getElementById("mensajeExito");


// Funciones de validacion
// Nombre: minimo 5 caracteres y solo letras

function validarNombre() {

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre.value.trim().length < 5) {
        mostrarError(
            nombre,
            "errorNombre",
            "El nombre debe tener al menos 5 caracteres."
        );
        return false;
    }

    if (!regex.test(nombre.value.trim())) {
        mostrarError(
            nombre,
            "errorNombre",
            "Solo se permiten letras y espacios."
        );
        return false;
    }

    mostrarValido(nombre, "errorNombre");
    return true;
}

// Correo

function validarCorreo() {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(correo.value.trim())) {

        mostrarError(
            correo,
            "errorCorreo",
            "Ingrese un correo electrónico válido."
        );

        return false;
    }

    mostrarValido(correo, "errorCorreo");
    return true;
}

// Telefono

function validarTelefono() {

    const regex = /^[0-9]+$/;

    if (!regex.test(telefono.value.trim())) {

        mostrarError(
            telefono,
            "errorTelefono",
            "El teléfono debe contener solo números."
        );

        return false;
    }

    if (telefono.value.trim().length < 8) {

        mostrarError(
            telefono,
            "errorTelefono",
            "Debe contener mínimo 8 dígitos."
        );

        return false;
    }

    mostrarValido(telefono, "errorTelefono");
    return true;
}

// Asunto

function validarAsunto() {

    if (asunto.value.trim().length < 3) {

        mostrarError(
            asunto,
            "errorAsunto",
            "El asunto debe tener mínimo 3 caracteres."
        );

        return false;
    }

    mostrarValido(asunto, "errorAsunto");
    return true;
}

// Mensaje

function validarMensaje() {

    if (mensaje.value.trim().length < 20) {

        mostrarError(
            mensaje,
            "errorMensaje",
            "El mensaje debe tener mínimo 20 caracteres."
        );

        return false;
    }

    mostrarValido(mensaje, "errorMensaje");
    return true;
}

// Funcion auxiliar para validar campos y mostrar errores o validaciones

function mostrarError(campo, idError, texto) {

    document.getElementById(idError).textContent = texto;

    campo.classList.remove("campo-valido");
    campo.classList.add("campo-invalido");
}

function mostrarValido(campo, idError) {

    document.getElementById(idError).textContent = "";

    campo.classList.remove("campo-invalido");
    campo.classList.add("campo-valido");
}

// Habilita o deshabilita el boton de enviar dependiendo de la info en el formulario

function validarFormularioCompleto() {

    const formularioValido =
        validarNombre() &&
        validarCorreo() &&
        validarTelefono() &&
        validarAsunto() &&
        validarMensaje();

    btnEnviar.disabled = !formularioValido;
}


// Se valida el formulario completo antes de enviar.


nombre.addEventListener("input", validarFormularioCompleto);
correo.addEventListener("input", validarFormularioCompleto);
telefono.addEventListener("input", validarFormularioCompleto);
asunto.addEventListener("input", validarFormularioCompleto);
mensaje.addEventListener("input", validarFormularioCompleto);


// Se envia el formulario y se muestra un mensaje, ademas se limpia el formulario y se deshabilita el boton de enviar hasta que se vuelva a llenar correctamente


formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    mensajeExito.style.display = "block";

    mensajeExito.textContent =
        "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.";

    formulario.reset();

    btnEnviar.disabled = true;

    document
        .querySelectorAll(".form-control")
        .forEach(campo => {

            campo.classList.remove(
                "campo-valido",
                "campo-invalido"
            );
        });

});
