import { FaBullseye, FaEye, FaArrowRight } from "react-icons/fa";

export default function QuienesSomos() {
  return (
    <main className="pagina-interna pagina-quienes">
      <section className="pagina-contenido-mision">
        <span className="pagina-etiqueta">COMUNIDAD 2220</span>
        <h1>¿Quiénes somos?</h1>
        <p>
          Somos una comunidad que crece en la fe, fortalece sus relaciones y
          trabaja unida para compartir el mensaje de Jesús.
        </p>
        <a href="#mision" className="pagina-boton">
          Conoce nuestra misión y visión
        </a>
      </section>

      <section className="pagina-detalle mision-vision" id="mision">
        {/* TARJETA: MISIÓN */}
        <article className="mv-card mv-mision">
          <div className="mv-card-cabecera">
            <span className="mv-icono">
              <FaBullseye />
            </span>

            <span className="mv-etiqueta">NUESTRO PROPÓSITO</span>
          </div>

          <h2>Nuestra misión</h2>

          <div className="mv-linea" />

          <p>
            Fomentamos espacios de formación teológica y musical para las
            iglesias evangélicas y diversos ministerios, sirviendo también en
            las distintas áreas de labor misionera.
          </p>

          <span className="mv-numero"></span>

          <a href="#contacto" className="mv-enlace">
            Conoce nuestra comunidad <FaArrowRight />
          </a>
        </article>

        {/* TARJETA: VISIÓN */}
        <article className="mv-card mv-vision">
          <div className="mv-card-cabecera">
            <span className="mv-icono">
              <FaEye />
            </span>

            <span className="mv-etiqueta">NUESTRO FUTURO</span>
          </div>

          <h2>Nuestra visión</h2>

          <div className="mv-linea" />

          <p>
            Dios es glorificado a través de una comunidad de seguidores que
            estén comprometidos con la formación bíblica, obedeciendo la
            enseñanza como verdaderos discípulos de Cristo, mostrando vidas de
            adoración genuina para la expansión del evangelio.
          </p>

          <span className="mv-numero"></span>

          <a href="#contacto" className="mv-enlace">
            Sé parte de la misión <FaArrowRight />
          </a>
        </article>
      </section>
    </main>
  );
}
