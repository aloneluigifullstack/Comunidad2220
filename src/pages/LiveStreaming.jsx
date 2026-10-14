
import { FaPlayCircle, FaBroadcastTower } from "react-icons/fa";

export default function LiveStreaming() {
    return (
        <main className="pagina-interna pagina-live">
            <section className="pagina-contenido">
                <span className="pagina-etiqueta live-etiqueta">
                    <FaBroadcastTower /> TRANSMISIÓN EN VIVO
                </span>

                <h1>Live Streaming</h1>
                <p>
                    Conéctate con nuestras transmisiones,
                    encuentros y momentos de adoración desde
                    cualquier lugar.
                </p>

                <a href="#transmision" className="pagina-boton">
                    <FaPlayCircle /> Ver transmisión
                </a>
            </section>

            <section className="live-reproductor" id="transmision">
                <div className="live-placeholder">
                    <FaPlayCircle />
                    <h2>Comunidad 2220 en vivo</h2>
                    <p>
                        El reproductor aparecerá aquí cuando
                        se configure el enlace oficial.
                    </p>
                </div>
            </section>
        </main>
    );
}
