

/*const profesores = [
    {
        id: 1,
        nombre: "Carlos Méndez",
        especialidad: "Desarrollo Web",
        descripcion: "Ingeniero en Sistemas con más de 10 años de experiencia en desarrollo front-end y back-end.",
        descripcionLarga: "Ingeniero en Sistemas con más de 10 años de experiencia en desarrollo front-end y back-end. Especialista en React y Node.js, ha liderado equipos de desarrollo en empresas de tecnología y disfruta enseñar buenas prácticas de programación a nuevos talentos.",
        foto: "https://picsum.photos/300/300?random=10",
        correo: "carlos.mendez@techmaster.com",
        cursosQueImparte: ["Desarrollo Web", "JavaScript Moderno", "React desde Cero"]
    },
    {
        id: 2,
        nombre: "Ana Ramírez",
        especialidad: "Ciencia de Datos",
        descripcion: "Doctora en Matemáticas Aplicadas y experta en Python, Machine Learning y análisis de datos.",
        descripcionLarga: "Doctora en Matemáticas Aplicadas y experta en Python, Machine Learning y análisis estadístico de datos a gran escala. Ha trabajado como consultora para empresas del sector financiero y le apasiona transformar datos en decisiones.",
        foto: "https://picsum.photos/300/300?random=11",
        correo: "ana.ramirez@techmaster.com",
        cursosQueImparte: ["Python Profesional", "Machine Learning", "Análisis de Datos"]
    },
    {
        id: 3,
        nombre: "Luis Torres",
        especialidad: "Ciberseguridad",
        descripcion: "Certificado en CEH y CISSP con 8 años de experiencia en seguridad de redes.",
        descripcionLarga: "Certificado en CEH y CISSP con 8 años de experiencia en seguridad de redes, ethical hacking y protección de infraestructuras críticas. Ha participado en auditorías de seguridad para entidades gubernamentales y privadas.",
        foto: "https://picsum.photos/300/300?random=12",
        correo: "luis.torres@techmaster.com",
        cursosQueImparte: ["Ciberseguridad Básica", "Ethical Hacking", "Seguridad en Redes"]
    },
    {
        id: 4,
        nombre: "Sofía Vargas",
        especialidad: "Diseño UX/UI",
        descripcion: "Diseñadora con experiencia en startups y grandes empresas, experta en Figma.",
        descripcionLarga: "Diseñadora con experiencia en startups y grandes empresas. Experta en Figma, investigación de usuarios y diseño de interfaces centradas en la experiencia del usuario final. Cree firmemente en el diseño accesible para todos.",
        foto: "https://picsum.photos/300/300?random=13",
        correo: "sofia.vargas@techmaster.com",
        cursosQueImparte: ["Fundamentos de UX/UI", "Diseño con Figma", "Prototipado Web"]
    },
    {
        id: 5,
        nombre: "Roberto Chaves",
        especialidad: "Cloud Computing",
        descripcion: "Arquitecto de soluciones certificado en AWS y Azure.",
        descripcionLarga: "Arquitecto de soluciones certificado en AWS y Azure. Lidera proyectos de migración a la nube para empresas de tecnología a nivel latinoamericano y enseña con un enfoque totalmente práctico y orientado a proyectos reales.",
        foto: "https://picsum.photos/300/300?random=14",
        correo: "roberto.chaves@techmaster.com",
        cursosQueImparte: ["Fundamentos de la Nube", "AWS Práctico", "Arquitectura Cloud"]
    },
    {
        id: 6,
        nombre: "Valeria Mora",
        especialidad: "Inteligencia Artificial",
        descripcion: "Investigadora en IA con publicaciones internacionales en redes neuronales.",
        descripcionLarga: "Investigadora en IA con publicaciones internacionales. Especializada en redes neuronales, procesamiento de lenguaje natural y visión por computadora. Combina la teoría con proyectos aplicados en cada una de sus clases.",
        foto: "https://picsum.photos/300/300?random=15",
        correo: "valeria.mora@techmaster.com",
        cursosQueImparte: ["Introducción a la IA", "Redes Neuronales", "Procesamiento de Lenguaje Natural"]
    }
];


document.addEventListener("DOMContentLoaded", function () {

    const contenedorProfesores = document.getElementById("contenedor-profesores");
    const modal = document.getElementById("modal-profesor");
    const modalContenido = document.getElementById("modal-contenido");
    const btnCerrarModal = document.getElementById("btn-cerrar-modal");

    // Elementos internos del modal donde entra la info
    const modalFoto = document.getElementById("modal-foto");
    const modalNombre = document.getElementById("modal-nombre");
    const modalEspecialidad = document.getElementById("modal-especialidad");
    const modalDescripcion = document.getElementById("modal-descripcion");
    const modalCursos = document.getElementById("modal-cursos");
    const modalCorreo = document.getElementById("modal-correo");


    function renderizarProfesores() {

        if (!profesores || profesores.length === 0) {
            contenedorProfesores.innerHTML =
                '<p class="mensaje-estado mensaje-error">No hay profesores disponibles en este momento.</p>';
            return;
        }

        let htmlTarjetas = "";

        profesores.forEach(function (profesor) {
            htmlTarjetas += `
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="profesor-card" data-id-profesor="${profesor.id}" tabindex="0">
                        <img src="${profesor.foto}" alt="Foto de ${profesor.nombre}">
                        <div class="profesor-info">
                            <h3>${profesor.nombre}</h3>
                            <span class="especialidad">${profesor.especialidad}</span>
                            <p>${profesor.descripcion}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        // se mete todo el HTML generado dentro del contenedor
        contenedorProfesores.innerHTML = htmlTarjetas;

        asignarEventosTarjetas();
    }

    function asignarEventosTarjetas() {
        const tarjetas = document.querySelectorAll(".profesor-card");

        tarjetas.forEach(function (tarjeta) {
            tarjeta.addEventListener("click", function () {
                const idSeleccionado = Number(tarjeta.getAttribute("data-id-profesor"));
                abrirModalProfesor(idSeleccionado);
            });

            tarjeta.addEventListener("keypress", function (evento) {
                if (evento.key === "Enter") {
                    const idSeleccionado = Number(tarjeta.getAttribute("data-id-profesor"));
                    abrirModalProfesor(idSeleccionado);
                }
            });
        });
    }


    function abrirModalProfesor(id) {
        const profesor = profesores.find(function (p) {
            return p.id === id;
        });

        if (!profesor) {
            mostrarMensajeError("No se encontró la información de este profesor.");
            return;
        }

        // se llenan los campos del modal con los datos del profe
        modalFoto.src = profesor.foto;
        modalFoto.alt = "Foto de " + profesor.nombre;
        modalNombre.textContent = profesor.nombre;
        modalEspecialidad.textContent = profesor.especialidad;
        modalDescripcion.textContent = profesor.descripcionLarga;
        modalCorreo.textContent = profesor.correo;
        modalCorreo.href = "mailto:" + profesor.correo;

        modalCursos.innerHTML = "";
        profesor.cursosQueImparte.forEach(function (curso) {
            const item = document.createElement("li");
            item.textContent = curso;
            modalCursos.appendChild(item);
        });

        modal.setAttribute("data-estado", "abierto");

        // Se bloquea el scroll del body mientras el modal está abierto
        document.body.style.overflow = "hidden";
    }


    function cerrarModalProfesor() {
        modal.setAttribute("data-estado", "cerrado");
        document.body.style.overflow = "auto";
    }

    function mostrarMensajeError(texto) {
        const mensaje = document.createElement("p");
        mensaje.className = "mensaje-estado mensaje-error";
        mensaje.textContent = texto;
        contenedorProfesores.prepend(mensaje);

        setTimeout(function () {
            mensaje.remove();
        }, 4000);
    }

    btnCerrarModal.addEventListener("click", cerrarModalProfesor);

    modal.addEventListener("click", function (evento) {
        if (evento.target === modal) {
            cerrarModalProfesor();
        }
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && modal.getAttribute("data-estado") === "abierto") {
            cerrarModalProfesor();
        }
    });

    renderizarProfesores();

});