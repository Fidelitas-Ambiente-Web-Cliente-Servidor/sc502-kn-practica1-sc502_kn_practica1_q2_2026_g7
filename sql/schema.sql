-- Crear base de datos
CREATE DATABASE IF NOT EXISTS techmaster_db;
USE techmaster_db;

-- 1. Tabla Cursos destacados
CREATE TABLE IF NOT EXISTS `cursos_destacados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  `imagen` varchar(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. La DATA
INSERT INTO `cursos` (`id`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 'Desarrollo Web', 'HTML5, CSS3 y diseño responsive desde cero.', 'https://bartolo.org/media/image/perfil/course/maquetacion.jpg'),
(2, 'JavaScript Moderno', 'Domina la programación del lado del cliente.', 'https://static-media.hotmart.com/d-7ptUpHPFF_qO9xDFgOW68D7LA=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/4b35fbc7-353c-4995-839a-205bd409b1ce/JavascriptbySoyHorizonte.jpg?w=920'),
(3, 'Python Profesional', 'Automatización, análisis de datos y desarrollo.', 'https://codigofacilito.com/assets/premium/benefits/logos/python-2e4ec7956a9f3c1952360e9f623e676df69b56a8e003ce195eda5d32da6eb5f4.png');

-- 3. Tabla de Testimonios
CREATE TABLE IF NOT EXISTS `testimonios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `texto` text NOT NULL,
  `foto` varchar(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Tabla Contacto

CREATE TABLE contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    asunto VARCHAR(100) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. La DATA
INSERT INTO `testimonios` (`id`, `nombre`, `texto`, `foto`) VALUES
(1, 'María Rodríguez', 'Gracias a TechMaster conseguí mi primer empleo.', 'https://site.com/images/maria.jpg'),
(2, 'Carlos Jiménez', 'Los cursos son prácticos y los profesores expertos.', 'https://');

-- Datos de prueba para la tabla de contacto

INSERT INTO contacto (nombre, correo, telefono, asunto, mensaje) VALUES
('Carlos Mora','carlos@gmail.com','88881111','Información','Quiero conocer más acerca de los cursos que ofrecen.'),
('María López','maria@gmail.com','88882222','Horarios','Necesito información sobre los horarios disponibles.'),
('José Rodríguez','jose@gmail.com','88883333','Matrícula','¿Cuál es el proceso para matricular un curso?'),
('Ana Fernández','ana@gmail.com','88884444','Certificaciones','¿Los cursos cuentan con certificado oficial?'),
('Luis Sánchez','luis@gmail.com','88885555','Consulta','Estoy interesado en los programas de desarrollo web.');


--tabla profesores
CREATE TABLE IF NOT EXISTS `profesores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `especialidad` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `descripcion_larga` text NOT NULL,
  `foto` varchar(255),
  `correo` varchar(150) NOT NULL,
  `cursos_imparte` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--datos de prueba que ya existian en js
INSERT INTO `profesores` (`id`, `nombre`, `especialidad`, `descripcion`, `descripcion_larga`, `foto`, `correo`, `cursos_imparte`) VALUES
(1, 'Carlos Méndez', 'Desarrollo Web',
 'Ingeniero en Sistemas con más de 10 años de experiencia en desarrollo front-end y back-end.',
 'Ingeniero en Sistemas con más de 10 años de experiencia en desarrollo front-end y back-end. Especialista en React y Node.js, ha liderado equipos de desarrollo en empresas de tecnología y disfruta enseñar buenas prácticas de programación a nuevos talentos.',
 'https://picsum.photos/300/300?random=10', 'carlos.mendez@techmaster.com',
 'Desarrollo Web, JavaScript Moderno, React desde Cero'),

(2, 'Ana Ramírez', 'Ciencia de Datos',
 'Doctora en Matemáticas Aplicadas y experta en Python, Machine Learning y análisis de datos.',
 'Doctora en Matemáticas Aplicadas y experta en Python, Machine Learning y análisis estadístico de datos a gran escala. Ha trabajado como consultora para empresas del sector financiero y le apasiona transformar datos en decisiones.',
 'https://picsum.photos/300/300?random=11', 'ana.ramirez@techmaster.com',
 'Python Profesional, Machine Learning, Análisis de Datos'),

(3, 'Luis Torres', 'Ciberseguridad',
 'Certificado en CEH y CISSP con 8 años de experiencia en seguridad de redes.',
 'Certificado en CEH y CISSP con 8 años de experiencia en seguridad de redes, ethical hacking y protección de infraestructuras críticas. Ha participado en auditorías de seguridad para entidades gubernamentales y privadas.',
 'https://picsum.photos/300/300?random=12', 'luis.torres@techmaster.com',
 'Ciberseguridad Básica, Ethical Hacking, Seguridad en Redes'),

(4, 'Sofía Vargas', 'Diseño UX/UI',
 'Diseñadora con experiencia en startups y grandes empresas, experta en Figma.',
 'Diseñadora con experiencia en startups y grandes empresas. Experta en Figma, investigación de usuarios y diseño de interfaces centradas en la experiencia del usuario final. Cree firmemente en el diseño accesible para todos.',
 'https://picsum.photos/300/300?random=13', 'sofia.vargas@techmaster.com',
 'Fundamentos de UX/UI, Diseño con Figma, Prototipado Web'),

(5, 'Roberto Chaves', 'Cloud Computing',
 'Arquitecto de soluciones certificado en AWS y Azure.',
 'Arquitecto de soluciones certificado en AWS y Azure. Lidera proyectos de migración a la nube para empresas de tecnología a nivel latinoamericano y enseña con un enfoque totalmente práctico y orientado a proyectos reales.',
 'https://picsum.photos/300/300?random=14', 'roberto.chaves@techmaster.com',
 'Fundamentos de la Nube, AWS Práctico, Arquitectura Cloud'),

(6, 'Valeria Mora', 'Inteligencia Artificial',
 'Investigadora en IA con publicaciones internacionales en redes neuronales.',
 'Investigadora en IA con publicaciones internacionales. Especializada en redes neuronales, procesamiento de lenguaje natural y visión por computadora. Combina la teoría con proyectos aplicados en cada una de sus clases.',
 'https://picsum.photos/300/300?random=15', 'valeria.mora@techmaster.com',
 'Introducción a la IA, Redes Neuronales, Procesamiento de Lenguaje Natural');