
export default function CongresosJuveniles() {
    return (
        <main className="pagina-interna pagina-congresos">
            <section className="pagina-contenido">
                <span className="pagina-etiqueta">JUVENTUD · FE · PROPÓSITO</span>
                <h1>Congresos juveniles</h1>
                <p>
                    Encuentros para jóvenes que desean crecer
                    espiritualmente, descubrir sus talentos y
                    compartir experiencias que marcan sus vidas.
                </p>
                <a href="#proximos-congresos" className="pagina-boton">
                    Ver próximos congresos
                </a>
            </section>

            <section className="pagina-detalle" id="proximos-congresos">
                <article>
                    <h2>Próximos encuentros</h2>
                    <p>
                        Aquí podrás publicar fechas, lugares,
                        inscripciones y programas de cada congreso.
                    </p>
                </article>

                <article>
                    <h2>Vive la experiencia</h2>
                    <p>
                        Música, enseñanza, compañerismo y actividades
                        para fortalecer la fe de cada participante.
                    </p>
                </article>
            </section>
        </main>
    );
}
