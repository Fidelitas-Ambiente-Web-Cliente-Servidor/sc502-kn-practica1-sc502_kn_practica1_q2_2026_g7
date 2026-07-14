<?php

require_once 'config/database.php';

class ContactoModel
{
    private PDO $db;

    public function __construct()
    {
        $this->db = Database::getConnection();
    }

    /**
     * Guarda un nuevo mensaje de contacto.
     */
    public function create($nombre, $correo, $telefono, $asunto, $mensaje)
    {
        $sql = "INSERT INTO contacto
                (nombre, correo, telefono, asunto, mensaje)
                VALUES
                (:nombre, :correo, :telefono, :asunto, :mensaje)";

        $stmt = $this->db->prepare($sql);

        return $stmt->execute([
            ':nombre'   => $nombre,
            ':correo'   => $correo,
            ':telefono' => $telefono,
            ':asunto'   => $asunto,
            ':mensaje'  => $mensaje
        ]);
    }
}