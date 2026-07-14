<?php
require_once 'config/database.php';

class IndexModel {

    public function getAll() {
        $db = Database::getConnection();
        $stmt = $db->query("SELECT * FROM cursos_destacados");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAllTestimonios() {
        $db = Database::getConnection();
        $stmt = $db->query("SELECT * FROM testimonios");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}