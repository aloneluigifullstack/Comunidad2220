import "../FormacionTeologica.css";
import {
  BookOpen,
  Sprout,
  Users,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function FormacionTeologica() {
  return (
    <main className="pagina-formacion">
      {/* Diseño principal FT */}
      <section className="formacion-hero">
        {/* Fondo decorativo */}
        <div className="formacion-fondo"></div>

        {/* Panel lateral FT */}
        <aside className="formacion-lateral">
          <h2>FT</h2>

          <a
            href="#cursos"
            className="formacion-flecha"
            aria-label="Explorar formación teológica"
          >
            <span></span>
          </a>
        </aside>

        {/* Círculo central con logo */}
        <div className="formacion-logo-marco">
          <div className="formacion-logo-circulo">
            <img
              src={`${import.meta.env.BASE_URL}images/logocomunidad.png`}
              alt="Logo Comunidad 2220"
            />
          </div>
        </div>

        {/* Texto principal */}
        <div className="formacion-texto">
          <br></br>

          <h1>Formación teológica</h1>

          <a href="#cursos" className="formacion-boton">
            Explorar formación
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* Sección de contenidos */}
      <section className="formacion-cursos" id="cursos">
        <div className="formacion-cursos-intro">
          <span className="formacion-subtitulo">
            FORMACIÓN Y CRECIMIENTO ESPIRITUAL
          </span>

          <h2>Crece en la Palabra</h2>

          <div className="formacion-lista-beneficios">
            <div className="formacion-beneficio">
              <span className="beneficio-icono">
                <BookOpen size={22} />
              </span>
              <span className="beneficio-texto">
                Fomenta el interés por el estudio de la Palabra de Dios.
              </span>
              <ArrowUpRight className="beneficio-flecha" size={19} />
            </div>

            <div className="formacion-beneficio">
              <span className="beneficio-icono">
                <Sprout size={22} />
              </span>
              <span className="beneficio-texto">
                Impulsa el crecimiento en carácter y madurez a través del
                conocimiento profundo de las Escrituras.
              </span>
              <ArrowUpRight className="beneficio-flecha" size={19} />
            </div>

            <div className="formacion-beneficio">
              <span className="beneficio-icono">
                <Users size={22} />
              </span>
              <span className="beneficio-texto">
                Conecta con estudiantes, maestros de seminarios y organizaciones
                ministeriales.
              </span>
              <ArrowUpRight className="beneficio-flecha" size={19} />
            </div>

            <div className="formacion-beneficio">
              <span className="beneficio-icono">
                <MessageCircle size={22} />
              </span>
              <span className="beneficio-texto">
                Comparte enseñanzas teológicas y experiencias ministeriales
                relacionadas con la doctrina.
              </span>
              <ArrowUpRight className="beneficio-flecha" size={19} />
            </div>
          </div>
        </div>

        <div className="formacion-tarjetas">
          <article className="formacion-tarjeta">
            <div className="formacion-numero">01</div>

            <h2>Estudios bíblicos</h2>

            <p>
              Materiales y contenidos para estudiar y comprender la Palabra de
              Dios.
            </p>

            <a href="#contacto" aria-label="Consultar estudios bíblicos">
              Conocer más <span>→</span>
            </a>
          </article>

          <article className="formacion-tarjeta">
            <div className="formacion-numero">02</div>

            <h2>Cursos y talleres</h2>

            <p>
              Un espacio para anunciar cursos, programas formativos e
              inscripciones.
            </p>

            <a href="#contacto" aria-label="Consultar cursos y talleres">
              Conocer más <span>→</span>
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
