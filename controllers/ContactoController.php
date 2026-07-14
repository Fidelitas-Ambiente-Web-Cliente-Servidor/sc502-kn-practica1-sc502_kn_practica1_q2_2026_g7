<?php

require_once 'models/ContactoModel.php';

class ContactoController
{
    /**
     * Muestra la vista de contacto.
     */
    public function index()
    {
        require_once 'views/contacto.php';
    }

    /**
     * Guarda un nuevo mensaje enviado desde el formulario.
     */
    public function store()
    {
        if ($_SERVER["REQUEST_METHOD"] !== "POST") {
            header("Location: index.php?controller=contacto");
            exit();
        }

        // Obtener datos del formulario
        $nombre   = trim($_POST["nombre"] ?? "");
        $correo   = trim($_POST["correo"] ?? "");
        $telefono = trim($_POST["telefono"] ?? "");
        $asunto   = trim($_POST["asunto"] ?? "");
        $mensaje  = trim($_POST["mensaje"] ?? "");

        // Validación básica del servidor
        if (
            empty($nombre) ||
            empty($correo) ||
            empty($telefono) ||
            empty($asunto) ||
            empty($mensaje)
        ) {
            header("Location: index.php?controller=contacto&error=1");
            exit();
        }

        $model = new ContactoModel();

        $resultado = $model->create(
            $nombre,
            $correo,
            $telefono,
            $asunto,
            $mensaje
        );

        if ($resultado) {
            header("Location: index.php?controller=contacto&success=1");
        } else {
            header("Location: index.php?controller=contacto&error=1");
        }

        exit();
    }
}