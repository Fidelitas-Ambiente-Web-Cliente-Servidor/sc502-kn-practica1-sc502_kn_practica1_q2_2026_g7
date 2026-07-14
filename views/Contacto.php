<?php require_once 'views/layout/header.php'; ?>

<section class="contacto-header">

    <div class="container">

        <h1>Contáctanos</h1>

        <p>
            Estamos listos para ayudarte. Completa el siguiente formulario y
            nuestro equipo se pondrá en contacto contigo.
        </p>

    </div>

</section>


<section class="contacto-contenedor">

    <div class="container">

        <?php if(isset($_GET["success"])): ?>

            <div class="alert alert-success">

                ¡Tu mensaje fue enviado correctamente!

            </div>

        <?php endif; ?>


        <?php if(isset($_GET["error"])): ?>

            <div class="alert alert-danger">

                Ocurrió un error al enviar el formulario.

            </div>

        <?php endif; ?>


        <div class="row">

            <!-- FORMULARIO -->

            <div class="col-lg-7 mb-4">

                <div class="contacto-box">

                    <h2>Envíanos un mensaje</h2>

                    <form
                        id="formContacto"
                        method="POST"
                        action="index.php?controller=contacto&action=store">

                        <div class="mb-3">

                            <label class="form-label">

                                Nombre Completo

                            </label>

                            <input
                                type="text"
                                class="form-control"
                                id="nombre"
                                name="nombre">

                            <small
                                id="errorNombre"
                                class="mensaje-error"></small>

                        </div>


                        <div class="mb-3">

                            <label class="form-label">

                                Correo Electrónico

                            </label>

                            <input
                                type="email"
                                class="form-control"
                                id="correo"
                                name="correo">

                            <small
                                id="errorCorreo"
                                class="mensaje-error"></small>

                        </div>


                        <div class="mb-3">

                            <label class="form-label">

                                Teléfono

                            </label>

                            <input
                                type="text"
                                class="form-control"
                                id="telefono"
                                name="telefono">

                            <small
                                id="errorTelefono"
                                class="mensaje-error"></small>

                        </div>


                        <div class="mb-3">

                            <label class="form-label">

                                Asunto

                            </label>

                            <input
                                type="text"
                                class="form-control"
                                id="asunto"
                                name="asunto">

                            <small
                                id="errorAsunto"
                                class="mensaje-error"></small>

                        </div>


                        <div class="mb-3">

                            <label class="form-label">

                                Mensaje

                            </label>

                            <textarea
                                class="form-control"
                                rows="5"
                                id="mensaje"
                                name="mensaje"></textarea>

                            <small
                                id="errorMensaje"
                                class="mensaje-error"></small>

                        </div>


                        <button
                            type="submit"
                            class="btn-contacto"
                            id="btnEnviar"
                            disabled>

                            Enviar Mensaje

                        </button>

                    </form>

                </div>

            </div>

            <!-- INFORMACIÓN -->

            <div class="col-lg-5">

                <div class="contacto-box info-contacto">

                    <h2>Información</h2>

                    <p>

                        📍 San José, Costa Rica

                    </p>

                    <p>

                        📞 +506 2222-2222

                    </p>

                    <p>

                        ✉ contacto@novaacademy.com

                    </p>

                </div>

            </div>

        </div>


        <!-- MAPA -->

        <div class="mapa-contacto mt-5">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy">

            </iframe>

        </div>

    </div>

</section>

<script src="js/contacto.js"></script>

<?php require_once 'views/layout/footer.php'; ?>