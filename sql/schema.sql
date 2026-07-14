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