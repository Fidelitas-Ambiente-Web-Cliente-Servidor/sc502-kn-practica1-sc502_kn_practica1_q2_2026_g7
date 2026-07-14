<?php
require_once 'config/database.php';
require_once 'models/IndexModel.php';

class IndexController {
    public function index() {
    $model = new IndexModel();
    $cursos = $model->getAll(); 
    $testimonios = $model->getAllTestimonios();
    
    require_once 'views/index.php'; 
}
}