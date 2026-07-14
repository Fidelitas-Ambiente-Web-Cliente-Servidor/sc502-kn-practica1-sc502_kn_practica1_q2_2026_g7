/*
// 1. Datos de los cursos
const cursos = [
    {
        nombre: "Desarrollo Web",
        descripcion: "HTML5, CSS3 y diseño responsive desde cero.",
        categoria: "Programación",
        imagen: "https://bartolo.org/media/image/perfil/course/maquetacion.jpg"
    },
    {
        nombre: "JavaScript Moderno",
        descripcion: "Domina la programación del lado del cliente.",
        categoria: "Programación",
        imagen: "https://static-media.hotmart.com/d-7ptUpHPFF_qO9xDFgOW68D7LA=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/4b35fbc7-353c-4995-839a-205bd409b1ce/JavascriptbySoyHorizonte.jpg?w=920"
    },
    {
        nombre: "Python Profesional",
        descripcion: "Automatización, análisis de datos y desarrollo.",
        categoria: "Data Science",
        imagen: "https://codigofacilito.com/assets/premium/benefits/logos/python-2e4ec7956a9f3c1952360e9f623e676df69b56a8e003ce195eda5d32da6eb5f4.png"
    }
];

// 2. Datos de los testimonios
const testimonios = [
    {
        nombre: "María Rodríguez",
        texto: "Gracias a TechMaster conseguí mi primer empleo como desarrollador web.",
        foto: "https://i.pravatar.cc/100?img=23"
    },
    {
        nombre: "Carlos Jiménez",
        texto: "Los cursos son prácticos y los profesores tienen amplia experiencia.",
        foto: "https://i.pravatar.cc/100?img=11"
    }
];

// 3. Función para renderizar los cursos en el DOM
function renderizarCursos() {
    const contenedor = document.getElementById("contenedor-cursos");
    if (!contenedor) return; // Seguridad: verificar si el elemento existe

    cursos.forEach(curso => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        const card = document.createElement("div");
        card.className = "curso-card";

        // Creamos los elementos internos de la tarjeta
        const img = document.createElement("img");
        img.src = curso.imagen;
        img.alt = curso.nombre;

        const h3 = document.createElement("h3");
        h3.textContent = curso.nombre;

        const p = document.createElement("p");
        p.textContent = curso.descripcion;

        const btn = document.createElement("button");
        btn.textContent = "Ver más";

        // Estructuramos la jerarquía DOM
        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(btn);
        col.appendChild(card);

        contenedor.appendChild(col);
    });
}

// 4. Función para renderizar los testimonios en el DOM
function renderizarTestimonios() {
    const contenedor = document.getElementById("contenedor-testimonios");
    if (!contenedor) return;

    testimonios.forEach(t => {
        const col = document.createElement("div");
        col.className = "col-md-6 mb-4";

        const div = document.createElement("div");
        div.className = "testimonio";

        // Usamos template literals para inyectar la estructura
        div.innerHTML = `
            <img src="${t.foto}" alt="${t.nombre}" class="testimonio-img">
            <p>"${t.texto}"</p>
            <h4>${t.nombre}</h4>
        `;

        col.appendChild(div);
        contenedor.appendChild(col);
    });
}

// 5. Inicializar al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    renderizarCursos();
    renderizarTestimonios();
});
*/