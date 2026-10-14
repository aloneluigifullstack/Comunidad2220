
import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const eventos = [
  {
    dia: "12",
    mes: "OCT",
    titulo: "Seminario Bíblico",
    categoria: "Formación teológica",
    imagen: `${import.meta.env.BASE_URL}/images/seminario.png`,
    modalidad: "Presencial",
  },
  {
    dia: "18",
    mes: "OCT",
    titulo: "Taller de liderazgo",
    categoria: "Capacitación y servicio",
    imagen: `${import.meta.env.BASE_URL}/images/liderazgo.jpg`,
    modalidad: "Presencial",
  },
  {
    dia: "25",
    mes: "OCT",
    titulo: "Noche de Adoración",
    categoria: "Banda Comunidad",
    imagen: `${import.meta.env.BASE_URL}/images/adoracion.jpg`,
    modalidad: "En vivo",
  },
];

export default function Section2() {
  const desplazar = (direccion) => {
    const carrusel = document.getElementById("carrusel-eventos");

    carrusel?.scrollBy({
      left: direccion * 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="seccion-eventos" id="eventos">
        <div className="container">
          <div className="eventos-cabecera">
            <div>
              <h2>Próximos eventos</h2>
              <p>No te pierdas lo que viene. ¡Sé parte!</p>
            </div>

            <div className="eventos-controles">
              <a href="#contacto" className="ver-todos">
                Ver todos →
              </a>

              <button
                aria-label="Eventos anteriores"
                onClick={() => desplazar(-1)}
              >
                <FaArrowLeft />
              </button>

              <button
                aria-label="Siguientes eventos"
                onClick={() => desplazar(1)}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="eventos-carrusel" id="carrusel-eventos">
            {eventos.map((evento) => (
              <article className="evento-card" key={evento.titulo}>
                <div className="evento-imagen">
                  <img src={evento.imagen} alt={evento.titulo} />

                  <div className="evento-fecha">
                    <strong>{evento.dia}</strong>
                    <span>{evento.mes}</span>
                  </div>
                </div>

                <div className="evento-contenido">
                  <h3>{evento.titulo}</h3>
                  <p>{evento.categoria}</p>

                  <span className="evento-modalidad">
                    {evento.modalidad}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion-mision">
        <div className="mision-contenido">
          <span>NUESTRA COMUNIDAD</span>
          <h2>
            Más que una iglesia,
            <br />
            <em>una familia</em>
          </h2>

          <p>
            Somos una comunidad que crece, sirve y adora.
            Te invitamos a ser parte de esta historia.
          </p>

          <a href="#contacto" className="btn-dorado">
            Conoce nuestra comunidad
          </a>
        </div>
      </section>
    </>
  );
}