
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-comunidad" id="contacto">
      <div className="container">
        <div className="footer-grid">
          <a href="#inicio" className="marca footer-marca">
            <span className="marca-icono">C</span>
            <span className="marca-texto">
              COMUNIDAD
              <strong>2220</strong>
            </span>
          </a>

          <div className="footer-redes">
            <a href="https://www.facebook.com/BandaComunidad"
               target="_blank" rel="noreferrer"
               aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/"
               target="_blank" rel="noreferrer"
               aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@BandaComunidad"
               target="_blank" rel="noreferrer"
               aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/"
               target="_blank" rel="noreferrer"
               aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>

          <div className="footer-columna">
            <h3>Navegación</h3>
            <a href="#inicio">Inicio</a>
            <a href="#formacion">Formación teológica</a>
            <a href="#servicio">Capacitación y servicio</a>
            <a href="#banda">Banda Comunidad</a>
          </div>

          <div className="footer-columna">
            <h3>Contacto</h3>
            <p>
              <FaEnvelope />
              <span>Tu correo oficial</span>
            </p>
            <p>
              <FaMapMarkerAlt />
              <span>Perú</span>
            </p>
          </div>
        </div>

        <div className="footer-inferior">
          <p>
            © {new Date().getFullYear()} Comunidad 2220.
            Todos los derechos reservados.
          </p>
          <a href="#inicio">Juntos por más.</a>
        </div>
      </div>
    </footer>
  );
}