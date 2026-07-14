<?php
require_once 'config/database.php';

class ProfesoresModel {

    //devuelve todos los profesores
    public function getAll() {
        $db = Database::getConnection();
        $stmt = $db->query("SELECT * FROM profesores ORDER BY id ASC");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    //devuelve un solo profesor por id
    public function getById($id) {
        $db = Database::getConnection();
        $stmt = $db->prepare("SELECT * FROM profesores WHERE id = :id LIMIT 1");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
        return $resultado ?: null;
    }
}