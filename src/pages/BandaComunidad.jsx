import { FaMusic, FaYoutube, FaInstagram } from "react-icons/fa";

export default function BandaComunidad() {
  return (
    <main className="pagina-interna pagina-banda">
      <section className="pagina-contenido">
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
              Apoya a la iglesia local y a otros ministerios mediante la música
              y la alabanza.
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
            <FaMusic /> Conoce nuestra música
          </a>

          <a
            href="https://www.youtube.com/@BandaComunidad"
            target="_blank"
            rel="noreferrer"
            className="pagina-boton pagina-boton-secundario"
          >
            <FaYoutube /> YouTube
          </a>
        </div>
      </section>

      <section className="pagina-detalle" id="musica">
        <article>
          <h2>Canciones y videos</h2>
          <p>
            Aquí podrás integrar videoclips, presentaciones en vivo y
            lanzamientos.
          </p>
        </article>

        <article>
          <h2>Síguenos</h2>
          <p>
            Descubre nuestras novedades y próximas presentaciones en redes
            sociales.
          </p>
          <a
            href="https://www.instagram.com/comunidad.2220/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </article>
      </section>
    </main>
  );
}
