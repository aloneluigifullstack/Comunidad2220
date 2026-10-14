
import {
  FaBookOpen,
  FaUsers,
  FaMusic,
  FaArrowRight,
} from "react-icons/fa";

const areas = [
  {
    id: "formacion",
    titulo: "Formación teológica",
    descripcion:
      "Estudia, profundiza y aplica la Palabra de Dios en tu vida.",
    imagen: "/images/formacionteologica.jpeg",
    icono: <FaBookOpen />,
    enlace: "#eventos",
  },
  {
    id: "servicio",
    titulo: "Capacitación y servicio",
    descripcion:
      "Desarrolla tus talentos y sé parte del cambio en tu entorno.",
    imagen: "/images/capacitacion.jpg",
    icono: <FaUsers />,
    enlace: "#contacto",
  },
  {
    id: "banda",
    titulo: "Banda Comunidad",
    descripcion:
      "Música, adoración y una misión que nos une.",
    imagen: "/images/bandacomunidad.jpg",
    icono: <FaMusic />,
    enlace: "#contacto",
  },
];

export default function Section1() {
  return (
    <section className="seccion-areas" id="areas">
      <div className="container">
        <div className="areas-grid">
          {areas.map((area) => (
            <article
              className="area-card"
              id={area.id}
              key={area.id}
            >
              <div className="area-imagen">
                <img src={area.imagen} alt={area.titulo} />
                <span className="area-icono">
                  {area.icono}
                </span>
              </div>

              <div className="area-contenido">
                <h2>{area.titulo}</h2>
                <p>{area.descripcion}</p>

                <a href={area.enlace} className="area-enlace">
                  Ver más <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}