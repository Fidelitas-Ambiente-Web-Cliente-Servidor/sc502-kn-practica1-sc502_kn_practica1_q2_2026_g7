<?php
require_once 'config/database.php';
require_once 'models/ProfesoresModel.php';

class ProfesoresController {

    public function index() {
        $model = new ProfesoresModel();
        $profesores = $model->getAll();

        require_once 'views/profesores.php';
    }

    public function show() {
        $id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

        $model = new ProfesoresModel();
        $profesor = $model->getById($id);

        if (!$profesor) {
            http_response_code(404);
            echo "<h2 style='text-align:center;margin-top:60px;'>Profesor no encontrado.</h2>";
            return;
        }

        require_once 'views/profesor_detalle.php';
    }
}