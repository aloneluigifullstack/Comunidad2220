
export default function CapacitacionServicio() {
    return (
        <main className="pagina-interna pagina-servicio">
            <section className="pagina-contenido">
                <span className="pagina-etiqueta">PREPARARSE PARA SERVIR</span>
                <h1>Capacitación y servicio</h1>
                <p>
                    Descubre tus talentos, desarrolla nuevas
                    habilidades y participa en iniciativas
                    que benefician a tu comunidad.
                </p>
                <a href="#oportunidades" className="pagina-boton">
                    Conoce las oportunidades
                </a>
            </section>

            <section className="pagina-detalle" id="oportunidades">
                <article>
                    <h2>Capacitaciones</h2>
                    <p>
                        Talleres de liderazgo, trabajo en equipo
                        y desarrollo de habilidades.
                    </p>
                </article>

                <article>
                    <h2>Oportunidades de servicio</h2>
                    <p>
                        Espacios para conocer proyectos,
                        equipos de voluntariado y actividades.
                    </p>
                </article>
            </section>
        </main>
    );
}
