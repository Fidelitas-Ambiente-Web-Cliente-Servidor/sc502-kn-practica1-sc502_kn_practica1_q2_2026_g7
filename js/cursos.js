const listaCursos = [
    {
        id: 1,
        titulo: "Desarrollo Web",
        descripcion: "HTML5, CSS3 y diseño responsive desde cero.",
        duracion: "8 semanas",
        precio: 150,
        categoria: "Programación",
        imagen: "https://picsum.photos/400/250?random=1"
    },
    {
        id: 2,
        titulo: "JavaScript Moderno",
        descripcion: "Domina la programación del lado del cliente y lógica avanzada.",
        duracion: "10 semanas",
        precio: 180,
        categoria: "Programación",
        imagen: "https://picsum.photos/400/250?random=2"
    },
    {
        id: 3,
        titulo: "React Framework",
        descripcion: "Crea interfaces de usuario modernas, interactivas y dinámicas.",
        duracion: "6 semanas",
        precio: 200,
        categoria: "Programación",
        imagen: "https://picsum.photos/400/250?random=4"
    },
    {
        id: 4,
        titulo: "Python Profesional",
        descripcion: "Automatización, análisis de datos y desarrollo de scripts eficientes.",
        duracion: "12 semanas",
        precio: 220,
        categoria: "Datos y Diseño",
        imagen: "https://picsum.photos/400/250?random=3"
    },
    {
        id: 5,
        titulo: "Bases de Datos SQL",
        descripcion: "Diseña, modela y administra bases de datos relacionales robustas.",
        duracion: "8 semanas",
        precio: 160,
        categoria: "Datos y Diseño",
        imagen: "https://picsum.photos/400/250?random=5"
    },
    {
        id: 6,
        titulo: "Diseño UI / UX",
        descripcion: "Aprende a diseñar interfaces y experiencias de usuario de alto impacto.",
        duracion: "6 semanas",
        precio: 140,
        categoria: "Datos y Diseño",
        imagen: "https://picsum.photos/400/250?random=6"
    }
];

const contenedorCatalogo = document.getElementById("contenedorCatalogo");
const inputBuscador = document.getElementById("inputBuscador");
const selectCategoria = document.getElementById("selectCategoria");

function renderizarCatalogo(cursosFiltrados) {
    contenedorCatalogo.innerHTML = "";

    if (cursosFiltrados.length === 0) {
        contenedorCatalogo.innerHTML = `
            <div class="col-12 text-center my-5">
                <p class="text-muted fs-5">No se encontraron cursos que coincidan con tu búsqueda.</p>
            </div>
        `;
        return;
    }

    const categorias = [...new Set(cursosFiltrados.map(c => c.categoria))];

    categorias.forEach(categoria => {
        const tituloCategoria = document.createElement("h2");
        tituloCategoria.className = "categoria-titulo mt-4 mb-4";
        tituloCategoria.textContent = categoria;
        contenedorCatalogo.appendChild(tituloCategoria);

        const filaGrid = document.createElement("div");
        filaGrid.className = "row";

        const cursosDeCategoria = Array.from(cursosFiltrados).filter(c => c.categoria === categoria);

        cursosDeCategoria.forEach(curso => {
            const columnaTarjetas = document.createElement("div");
            columnaTarjetas.className = "col-md-4 mb-4";

            columnaTarjetas.innerHTML = `
                <div class="tarjeta-curso">
                    <div class="tarjeta-imagen">
                        <img src="${curso.imagen}" alt="Curso ${curso.titulo}">
                        <span class="tarjeta-tag">${curso.categoria}</span>
                    </div>
                    <div class="tarjeta-cuerpo">
                        <h3>${curso.titulo}</h3>
                        <p class="descripcion">${curso.descripcion}</p>
                        <div class="tarjeta-detalles">
                            <p><b>Duración:</b> ${curso.duracion}</p>
                            <p><b>Precio:</b> $${curso.precio}</p>
                        </div>
                        <div class="text-end">
                            <button class="btn-curso">Ver curso</button>
                        </div>
                    </div>
                </div>
            `;
            filaGrid.appendChild(columnaTarjetas);
        });

        contenedorCatalogo.appendChild(filaGrid);
    });
}

function filtrarCursos() {
    const textoBusqueda = inputBuscador.value.toLowerCase().trim();
    const categoriaSeleccionada = selectCategoria.value;

    const resultadoFiltro = Array.from(listaCursos).filter(curso => {
        const coincideTitulo = curso.titulo.toLowerCase().includes(textoBusqueda);
        const coincideDescripcion = curso.descripcion.toLowerCase().includes(textoBusqueda);
        const coincideTexto = coincideTitulo || coincideDescripcion;
        const coincideCategoria = (categoriaSeleccionada === "Todos") || (curso.categoria === categoriaSeleccionada);

        return coincideTexto && coincideCategoria;
    });

    renderizarCatalogo(resultadoFiltro);
}

inputBuscador.addEventListener("input", filtrarCursos);
selectCategoria.addEventListener("change", filtrarCursos);

document.addEventListener("DOMContentLoaded", () => {
    renderizarCatalogo(listaCursos);
});