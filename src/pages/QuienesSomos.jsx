
export default function QuienesSomos() {
    return (
        <main className="pagina-interna pagina-quienes">
            <section className="pagina-contenido">
                <span className="pagina-etiqueta">COMUNIDAD 2220</span>
                <h1>¿Quiénes somos?</h1>
                <p>
                    Somos una comunidad que crece en la fe, fortalece
                    sus relaciones y trabaja unida para compartir el
                    mensaje de Jesús.
                </p>
                <a href="#mision" className="pagina-boton">
                    Conoce nuestra misión
                </a>
            </section>

            <section className="pagina-detalle" id="mision">
                <article>
                    <h2>Nuestra misión</h2>
                    <p>
                        Formar personas comprometidas con Dios,
                        con su comunidad y con el servicio.
                    </p>
                </article>

                <article>
                    <h2>Nuestra visión</h2>
                    <p>
                        Ser una comunidad que inspira, acompaña
                        y transforma vidas a través de la fe.
                    </p>
                </article>
            </section>
        </main>
    );
}
