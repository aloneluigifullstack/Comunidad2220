
export default function FormacionTeologica() {
    return (
        <main className="pagina-interna pagina-formacion">
            <section className="pagina-contenido">
                <span className="pagina-etiqueta">APRENDER · CRECER · APLICAR</span>
                <h1>Formación teológica</h1>
                <p>
                    Profundiza en las Escrituras, fortalece tus
                    fundamentos bíblicos y desarrolla una fe
                    sólida para tu vida diaria.
                </p>
                <a href="#cursos" className="pagina-boton">
                    Explorar formación
                </a>
            </section>

            <section className="pagina-detalle" id="cursos">
                <article>
                    <h2>Estudios bíblicos</h2>
                    <p>
                        Materiales y contenidos para estudiar
                        y comprender la Palabra de Dios.
                    </p>
                </article>

                <article>
                    <h2>Cursos y talleres</h2>
                    <p>
                        Un espacio para anunciar cursos,
                        programas formativos e inscripciones.
                    </p>
                </article>
            </section>
        </main>
    );
}
