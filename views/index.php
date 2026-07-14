<?php require_once 'layout/header.php'; ?>

<main class="container my-5"> <section class="cursos-destacados mb-5">
        <h2 class="titulo-seccion text-center mb-4">Cursos Destacados</h2>
        <div class="row">
    <?php foreach ($cursos as $curso): ?>
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="<?php echo htmlspecialchars($curso['imagen']); ?>" class="card-img-top img-fluid" alt="..." style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h3 class="card-title"><?php echo htmlspecialchars($curso['nombre']); ?></h3>
                    <p class="card-text"><?php echo htmlspecialchars($curso['descripcion']); ?></p>
                    
                    <a href="/practica_programada1/detalle_curso.php?id=<?php echo $curso['id']; ?>" class="btn btn-primary">
                        Ver más
                    </a>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
    </section>

    <section class="testimonios">
        <h2 class="titulo-seccion text-center mb-4">Testimonios</h2>
        <div class="row">
            <?php foreach ($testimonios as $t): ?>
                <div class="col-md-6 mb-4">
                    <div class="testimonio p-3 border rounded">
                        <img src="<?php echo htmlspecialchars($t['foto']); ?>" class="rounded-circle mb-2" width="60" alt="...">
                        <p>"<?php echo htmlspecialchars($t['texto']); ?>"</p>
                        <h4 class="h5"><?php echo htmlspecialchars($t['nombre']); ?></h4>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

</main>

<?php require_once 'layout/footer.php'; ?>