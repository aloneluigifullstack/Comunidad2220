import "../Capacitacionyservicio.css";

import {
  GraduationCap,
  Users,
  HandHeart,
  Lightbulb,
  ArrowUpRight,
  HeartHandshake,
  Target,
  BookOpen,
  UserGroup,
  LibraryBig,
  Church,
  Globe,
} from "lucide-react";

export default function CapacitacionServicio() {
  return (
    <main className="pagina-cys">
      {/* =====================================
          BANNER PRINCIPAL
      ===================================== */}

      <section className="cys-hero">
        <div className="cys-fondo"></div>

        {/* Panel lateral */}

        <aside className="cys-lateral">
          <h2>CS</h2>

          <a
            href="#oportunidades"
            className="cys-flecha"
            aria-label="Explorar capacitación y servicio"
          >
            <span></span>
          </a>
        </aside>

        {/* Logo circular */}

        <div className="cys-logo-marco">
          <div className="cys-logo-circulo">
            <img
              src={`${import.meta.env.BASE_URL}images/logoblanco_comunidad.png`}
              alt="Logo Comunidad 2220"
            />
          </div>
        </div>

        {/* Texto principal */}

        <div className="cys-texto">
          <h1>
            Capacitación y servicio
          </h1>

          <a href="#oportunidades" className="cys-boton">
            Descubre cómo servir
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* =====================================
          BENEFICIOS
      ===================================== */}

      <section className="cys-contenido" id="oportunidades">
        <div className="cys-intro">
          <span className="cys-subtitulo">FORMACIÓN · COMPROMISO · ACCIÓN</span>

          <h2>Prepárate para hacer la diferencia</h2>

          <div className="cys-lista-beneficios">
            <div className="cys-beneficio">
              <span className="cys-beneficio-icono">
                <UserGroup size={22} />
              </span>

              <span className="cys-beneficio-texto">
                Aborda temas contemporáneos de índole familiar, social,
                ministerial, entre otros, a través de analistas invitados que
                los desarrollen con base en principios bíblicos.
              </span>

              <ArrowUpRight className="cys-beneficio-flecha" size={19} />
            </div>

            <div className="cys-beneficio">
              <span className="cys-beneficio-icono">
                <LibraryBig size={22} />
              </span>

              <span className="cys-beneficio-texto">
                Prepara al joven cristiano para enfrentar cualquier contexto con
                fundamentos bíblicos sólidos
              </span>

              <ArrowUpRight className="cys-beneficio-flecha" size={19} />
            </div>

            <div className="cys-beneficio">
              <span className="cys-beneficio-icono">
                <Church size={22} />
              </span>

              <span className="cys-beneficio-texto">
                Promueve el servicio en labores misioneras dentro y fuera de la
                iglesia local.
              </span>

              <ArrowUpRight className="cys-beneficio-flecha" size={19} />
            </div>

            <div className="cys-beneficio">
              <span className="cys-beneficio-icono">
                <Globe size={22} />
              </span>

              <span className="cys-beneficio-texto">
                Fomenta la expansión del evangelio a través de la participación
                activa en el ministerio
              </span>

              <ArrowUpRight className="cys-beneficio-flecha" size={19} />
            </div>
          </div>
        </div>

        {/* =====================================
            ÁREAS DE CAPACITACIÓN Y SERVICIO
        ===================================== */}

        <div className="cys-areas">
          <div className="cys-areas-encabezado">
            <span className="cys-subtitulo">SÉ PARTE DEL CAMBIO</span>

            <h2>Crece para servir</h2>

            <p>
              Encuentra espacios para aprender, aportar y construir una
              comunidad comprometida.
            </p>
          </div>

          <div className="cys-tarjetas">
            <article className="cys-tarjeta">
              <div className="cys-numero">01</div>

              <div className="cys-tarjeta-icono">
                <BookOpen size={27} />
              </div>

              <h3>Capacitaciones</h3>

              <p>
                Talleres, encuentros y espacios formativos orientados al
                liderazgo, la comunicación, el trabajo en equipo y el
                crecimiento personal.
              </p>

              <a href="#contacto" className="cys-enlace">
                Conocer más
                <ArrowUpRight size={18} />
              </a>
            </article>

            <article className="cys-tarjeta">
              <div className="cys-numero">02</div>

              <div className="cys-tarjeta-icono">
                <HeartHandshake size={27} />
              </div>

              <h3>Oportunidades de servicio</h3>

              <p>
                Participa en proyectos comunitarios, actividades solidarias y
                equipos de voluntariado para servir a los demás.
              </p>

              <a href="#contacto" className="cys-enlace">
                Quiero participar
                <ArrowUpRight size={18} />
              </a>
            </article>

            <article className="cys-tarjeta">
              <div className="cys-numero">03</div>

              <div className="cys-tarjeta-icono">
                <Target size={27} />
              </div>

              <h3>Liderazgo con propósito</h3>

              <p>
                Fortalece tus capacidades para acompañar, organizar y motivar a
                otros en iniciativas que generen un impacto positivo.
              </p>

              <a href="#contacto" className="cys-enlace">
                Explorar oportunidades
                <ArrowUpRight size={18} />
              </a>
            </article>
          </div>
        </div>

        {/* =====================================
            LLAMADO A LA ACCIÓN
        ===================================== */}

        <section className="cys-llamado" id="contacto">
          <div className="cys-llamado-icono">
            <HandHeart size={30} />
          </div>

          <div className="cys-llamado-texto">
            <span>HAY UN LUGAR PARA TI</span>

            <h2>Tu talento puede transformar vidas</h2>

            <p>
              Da el siguiente paso y descubre cómo participar en las actividades
              de Comunidad 2220.
            </p>
          </div>

          <a
            href="https://www.facebook.com/BandaComunidad"
            target="_blank"
            rel="noreferrer"
            className="cys-llamado-boton"
          >
            Conectar con la comunidad
            <ArrowUpRight size={18} />
          </a>
        </section>
      </section>
    </main>
  );
}
