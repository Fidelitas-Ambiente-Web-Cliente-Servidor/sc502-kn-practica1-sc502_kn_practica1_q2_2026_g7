<?php require_once 'layout/header.php'; ?>

<link rel="stylesheet" href="css/profesores.css">

<section class="seccion-profesores">
    <div class="container">

        <a href="index.php?controller=profesores&action=index" class="btn btn-outline-primary mb-4">
            &larr; Volver a Profesores
        </a>

        <div class="modal-contenido" style="max-width:700px; margin:0 auto; transform:none; box-shadow:0 2px 10px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">

            <div class="modal-header-profesor">
                <img id="modal-foto" src="<?php echo htmlspecialchars($profesor['foto']); ?>"
                     alt="Foto de <?php echo htmlspecialchars($profesor['nombre']); ?>">
                <div>
                    <h3><?php echo htmlspecialchars($profesor['nombre']); ?></h3>
                    <span class="especialidad"><?php echo htmlspecialchars($profesor['especialidad']); ?></span>
                </div>
            </div>

            <div class="modal-body-profesor">
                <p><?php echo htmlspecialchars($profesor['descripcion_larga']); ?></p>

                <h4>Cursos que imparte</h4>
                <ul>
                    <?php foreach (explode(',', $profesor['cursos_imparte']) as $curso): ?>
                        <li><?php echo htmlspecialchars(trim($curso)); ?></li>
                    <?php endforeach; ?>
                </ul>

                <h4>Contacto</h4>
                <p>
                    <a href="mailto:<?php echo htmlspecialchars($profesor['correo']); ?>">
                        <?php echo htmlspecialchars($profesor['correo']); ?>
                    </a>
                </p>
            </div>

        </div>

    </div>
</section>

<?php require_once 'layout/footer.php'; ?>