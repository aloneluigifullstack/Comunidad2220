import { FaMusic, FaYoutube, FaInstagram } from "react-icons/fa";

import "../BandaComunidad.css";

export default function BandaComunidad() {
  const baseUrl = import.meta.env.BASE_URL;

  const fondoPrincipal = `${baseUrl}images/comunidad1.jpg`;
  const fondoMusica = `${baseUrl}images/comunidad2.jpg`;

  return (
    <main className="pagina-interna pagina-banda">
      {/* HERO CON FONDO PARALLAX */}
      <section
        className="pagina-contenido banda-parallax banda-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              110deg,
              rgba(20, 10, 32, 0.88),
              rgba(20, 10, 32, 0.55)
            ),
            url("${fondoPrincipal}")
          `,
        }}
      >
        <div className="banda-contenido-interior">
          <span className="pagina-etiqueta">MÚSICA · MENSAJE · VIDA</span>

          <h1>Banda Comunidad</h1>

          <div className="mision-texto">
            <ul>
              <li>
                Utiliza dones y talentos musicales al servicio de la obra
                misionera.
              </li>

              <li>
                Reconoce la alabanza como una expresión de adoración al Dios que
                conocemos.
              </li>

              <li>
                Apoya a la iglesia local y a otros ministerios mediante la
                música y la alabanza.
              </li>

              <li>
                Enfoca la alabanza no solo en el ámbito congregacional, sino
                también como testimonio en todos los contextos culturales,
                exaltando al Señor.
              </li>
            </ul>
          </div>

          <div className="banda-acciones">
            <a href="#musica" className="pagina-boton">
              <FaMusic />
              Conoce nuestra música
            </a>

            <a
              href="https://www.youtube.com/@BandaComunidad"
              target="_blank"
              rel="noopener noreferrer"
              className="pagina-boton pagina-boton-secundario"
            >
              <FaYoutube />
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE MÚSICA CON PARALLAX */}
      <section
        className="pagina-detalle banda-parallax banda-musica"
        id="musica"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(18, 12, 28, 0.82),
              rgba(18, 12, 28, 0.88)
            ),
            url("${fondoMusica}")
          `,
        }}
      >
        <article className="banda-tarjeta">
          <FaMusic className="banda-icono-seccion" />

          <h2>Canciones y videos</h2>

          <p>
            Aquí podrás integrar videoclips, presentaciones en vivo y
            lanzamientos.
          </p>

          <a
            href="https://www.youtube.com/@BandaComunidad"
            target="_blank"
            rel="noopener noreferrer"
            className="pagina-boton"
          >
            <FaYoutube />
            Ver videos
          </a>
        </article>

        <article className="banda-tarjeta">
          <FaInstagram className="banda-icono-seccion" />

          <h2>Síguenos</h2>

          <p>
            Descubre nuestras novedades y próximas presentaciones en redes
            sociales.
          </p>

          <a
            href="https://www.instagram.com/comunidad.2220/"
            target="_blank"
            rel="noopener noreferrer"
            className="pagina-boton pagina-boton-secundario"
          >
            <FaInstagram />
            Instagram
          </a>
        </article>
      </section>
    </main>
  );
}
