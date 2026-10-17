import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  const rutas = {
    inicio: "/",
    formacion: "/formacion-teologica",
    capacitacion: "/capacitacion-servicio",
    banda: "/banda-comunidad",
  };

  return (
    <footer className="footer-comunidad" id="contacto">
      <div className="container">
        <div className="footer-grid">
          {/* MARCA */}
          <div className="footer-identidad">
            <Link
              to={rutas.inicio}
              className="marca footer-marca"
              aria-label="Comunidad 2220 - Inicio"
            >
              <span className="marca-icono" aria-hidden="true" />

              <span className="marca-texto">
                COMUNIDAD
                <strong>2220</strong>
              </span>
            </Link>

            <div className="footer-redes">
              <a
                href="https://www.facebook.com/BandaComunidad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Comunidad 2220"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/comunidad.2220/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Comunidad 2220"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@BandaComunidad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube de Comunidad 2220"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.tiktok.com/@comunidad2220"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de Comunidad 2220"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <nav
            className="footer-columna"
            aria-label="Navegación del pie de página"
          >
            <h3>Navegación</h3>

            <Link to={rutas.inicio}>Inicio</Link>

            <Link to={rutas.formacion}>Formación teológica</Link>

            <Link to={rutas.capacitacion}>Capacitación y servicio</Link>

            <Link to={rutas.banda}>Banda Comunidad</Link>
          </nav>

          {/* CONTACTO */}
          <div className="footer-columna">
            <h3>Contacto</h3>

            <a
              className="footer-contacto"
              href="mailto:contacto@comunidad2220.com"
            >
              <FaEnvelope aria-hidden="true" />
              <span>Escríbenos</span>
            </a>

            <p className="footer-contacto">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Perú</span>
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-inferior">
          <p>
            © {new Date().getFullYear()} Comunidad 2220. Todos los derechos
            reservados.
          </p>

          <Link to={rutas.inicio} className="footer-volver">
            Volver al inicio ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
