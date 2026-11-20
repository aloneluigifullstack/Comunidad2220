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
          Conéctate con nuestras transmisiones, encuentros y momentos de
          adoración desde cualquier lugar.
        </p>

        <a href="#transmision" className="pagina-boton">
          <FaPlayCircle /> Ver transmisión
        </a>
      </section>

      <section className="live-reproductor" id="transmision">
        <div className="live-contenedor">
          <div className="live-encabezado">
            <span className="live-indicador-1"></span>
            <h2>Comunidad 2220 en vivo</h2>
            <p>Conéctate con nosotros y comparte esta transmisión.</p>
          </div>

          <div className="live-video">
            <iframe
              src="https://www.youtube.com/embed/live_stream?channel=UCaS00LUKdksSrhPowbtR_Ug"
              title="Comunidad 2220 - Transmisión en vivo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
