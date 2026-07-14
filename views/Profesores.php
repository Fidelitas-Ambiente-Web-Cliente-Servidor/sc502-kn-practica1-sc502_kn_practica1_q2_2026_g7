<?php require_once 'layout/header.php'; ?>

<link rel="stylesheet" href="css/profesores.css">

<section class="encabezado-profesores">
    <div class="container">
        <h1>Nuestro Equipo de Profesores</h1>
        <p>
            Contamos con instructores expertos en la industria tecnológica, apasionados por enseñar
            y comprometidos con el éxito de cada estudiante. Haz clic en una tarjeta para ver el
            perfil completo.
        </p>
    </div>
</section>

<section class="seccion-profesores">
    <div class="container">

        <h2 class="titulo-seccion">Conoce a nuestros instructores</h2>

        <div class="row" id="contenedor-profesores">
            <?php if (empty($profesores)): ?>
                <p class="mensaje-estado mensaje-error">No hay profesores disponibles en este momento.</p>
            <?php else: ?>
                <?php foreach ($profesores as $profesor): ?>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <a href="index.php?controller=profesores&action=show&id=<?php echo (int) $profesor['id']; ?>"
                           style="text-decoration:none; color:inherit;">
                            <div class="profesor-card" tabindex="0">
                                <img src="<?php echo htmlspecialchars($profesor['foto']); ?>"
                                     alt="Foto de <?php echo htmlspecialchars($profesor['nombre']); ?>">
                                <div class="profesor-info">
                                    <h3><?php echo htmlspecialchars($profesor['nombre']); ?></h3>
                                    <span class="especialidad"><?php echo htmlspecialchars($profesor['especialidad']); ?></span>
                                    <p><?php echo htmlspecialchars($profesor['descripcion']); ?></p>
                                </div>
                            </div>
                        </a>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>

    </div>
</section>

<section class="mision-vision">
    <div class="container">

        <h2 class="titulo-seccion">Nuestra Misión y Visión</h2>

        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="mv-card">
                    <div class="mv-icono">🎯</div>
                    <h3>Misión</h3>
                    <p>
                        Formar profesionales tecnológicos de alto nivel mediante una educación práctica,
                        actualizada y accesible. Nos comprometemos a brindar herramientas reales del mercado
                        laboral, acompañados por instructores con experiencia comprobada en la industria,
                        para que cada estudiante alcance su máximo potencial.
                    </p>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div class="mv-card">
                    <div class="mv-icono">🚀</div>
                    <h3>Visión</h3>
                    <p>
                        Ser la academia tecnológica líder en América Latina, reconocida por la calidad
                        de sus egresados y la innovación en sus métodos de enseñanza. Aspiramos a construir
                        una comunidad de aprendizaje continuo donde la tecnología sea el puente hacia
                        un futuro más inclusivo y equitativo.
                    </p>
                </div>
            </div>
        </div>

    </div>
</section>

<?php require_once 'layout/footer.php'; ?>