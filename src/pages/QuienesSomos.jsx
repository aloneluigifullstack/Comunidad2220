export default function QuienesSomos() {
  return (
    <main className="pagina-interna pagina-quienes">
      <section className="pagina-contenido">
        <span className="pagina-etiqueta">COMUNIDAD 2220</span>
        <h1>¿Quiénes somos?</h1>
        <p>
          Somos una comunidad que crece en la fe, fortalece sus relaciones y
          trabaja unida para compartir el mensaje de Jesús.
        </p>
        <a href="#mision" className="pagina-boton">
          Conoce nuestra misión
        </a>
      </section>

      <section className="pagina-detalle" id="mision">
        <article>
          <h2>Nuestra misión</h2>
          <p>
            Fomentamos espacios de formación teológica y musical para las
            iglesias evangélicas y diversos ministerios, sirviendo también en
            las distintas áreas de labor misionera.
          </p>
        </article>

        <article>
          <h2>Nuestra visión</h2>
          <p>
            Dios es glorificado a través de una comunidad de seguidores que
            estén comprometidos con la formación bíblica, obedeciendo la
            enseñanza como verdaderos discípulos de Cristo, mostrando vidas de
            adoración genuina para la expansión del evangelio.
          </p>
        </article>
      </section>
    </main>
  );
}
