import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaBars,
    FaTimes,
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const cerrarMenu = () => setMenuAbierto(false);

    const enlaces = [
        { texto: "Quiénes somos", href: "/quienes-somos" },
        { texto: "Congresos juveniles", href: "/congresos-juveniles" },
        { texto: "Formación teológica", href: "/formacion-teologica" },
        { texto: "Capacitación y servicio", href: "/capacitacion-servicio" },
        { texto: "Banda Comunidad", href: "/banda-comunidad" },
    ];

    return (<header className="navbar-comunidad"> <div className="navbar-contenido">

        {/* LOGO */}
        <Link
            to="/"
            className="navbar-logo"
            aria-label="Comunidad 2220 - Inicio"
            onClick={cerrarMenu}
        >
            <img
                src={`${import.meta.env.BASE_URL}images/logocomunidad1.png`}
                alt="Logo Comunidad 2220"
            />
        </Link>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
            type="button"
            className="menu-movil"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            onClick={() => setMenuAbierto(!menuAbierto)}
        >
            {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>

        {/* NAVEGACIÓN */}
        <nav
            className={`nav-enlaces ${menuAbierto ? "nav-activo" : ""
                }`}
            aria-label="Navegación principal"
        >
            {enlaces.map((enlace) => (
                <Link
                    key={enlace.href}
                    to={enlace.href}
                    onClick={cerrarMenu}
                >
                    {enlace.texto}
                </Link>
            ))}

            {/* LIVE STREAMING */}
            <Link
                to="/live-streaming"
                className="nav-live"
                onClick={cerrarMenu}
            >
                <span className="live-indicador">
                    <span className="live-punto" />
                    LIVE
                </span>

                <span className="live-texto">STREAMING</span>
            </Link>

            {/* REDES SOCIALES */}
            <div className="nav-redes">
                <a
                    href="https://www.facebook.com/BandaComunidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <FaFacebookF />
                </a>

                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                >
                    <FaTiktok />
                </a>

                <a
                    href="https://www.youtube.com/@BandaComunidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                >
                    <FaYoutube />
                </a>

            </div>
        </nav>
    </div>
    </header>


    );
}
