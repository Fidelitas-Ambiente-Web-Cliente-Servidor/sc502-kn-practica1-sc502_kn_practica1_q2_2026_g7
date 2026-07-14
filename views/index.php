<?php
//todas las peticiones pasan por aqui
$controllerName = $_GET['controller'] ?? 'index';
$action = $_GET['action'] ?? 'index';

switch ($controllerName) {

    case 'profesores':
        require_once 'controllers/ProfesoresController.php';
        $controller = new ProfesoresController();
        break;

    // agreguen aqui los casos de cursos y contacto
    // case 'cursos':
    //     require_once 'controllers/CursosController.php';
    //     $controller = new CursosController();
    //     break;
    // case 'contacto':
    //     require_once 'controllers/ContactoController.php';
    //     $controller = new ContactoController();
    //     break;

    case 'index':
    default:
        require_once 'controllers/IndexController.php';
        $controller = new IndexController();
        $action = 'index';
        break;
}

if (method_exists($controller, $action)) {
    $controller->$action();
} else {
    http_response_code(404);
    echo "<h2 style='text-align:center;margin-top:60px;'>Acción no encontrada.</h2>";
}