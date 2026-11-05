import { useState, useEffect } from "react";

import "../FormacionTeologica.css";

import {
  BookOpen,
  Sprout,
  Users,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function FormacionTeologica() {
  // =====================================
  // FOTOGRAFÍAS EXTERNAS
  // =====================================

  const fotografias = [
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/cbcbc473-7e42-45de-b7a3-74f6e6f4667f.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/4c513545-bcf8-45da-b673-061f687a2431.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/ab83e7d0-2947-42ec-8a80-332aff057990.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/7bca8858-1528-47bb-80e7-d9f0a10056ae.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/37dec7b9-3f82-4aa1-b032-4bb8f32bd5a4.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/17b0afe1-c3c0-40e1-a05d-843c5ea316dd.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/71dd46e5-2b58-442a-b8b2-67f56f29965b.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/ec4c5ff1-8ea2-4f62-bc59-2c506336fd23.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/c96675c5-5e73-480a-8114-94dd4413c75a.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/8a199303-264c-45da-b2ca-2bad82223ef6.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/c0801537-4fdf-4d6d-8d9f-54d44379467d.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/137208cd-ed4f-4ee6-b56d-ff32b24ca119.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/e066912a-1031-4d47-aa3b-d4c4b0d3c47a.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/603a2267-60cc-4dad-8799-aa376c094207.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/38b54666-a42e-40f4-b97e-40f391897ad3.jpg",
  ];

  // =====================================
  // DESCRIPCIONES POR GRUPOS
  // =====================================

  const descripciones = [
    {
      inicio: 0,
      fin: 6,
      texto:
        "Jóvenes líderes de 4 iglesias de diferentes denominaciones evangélicas se unieron para intercambiar púlpitos, es decir compartir un tema bíblico. El enfoque central fue el llamado de Samuel y su ejemplo de integridad ante un pueblo que vivía alejado de Dios",
    },
    {
      inicio: 7,
      fin: 11,
      texto:
        "Impulsamos el aprendizaje del método hermenéutico para el estudio de la biblia (estudio bíblico inductivo). Nuestro objetivo fue que los jóvenes puedan tener herramientas para escudriñar las escrituras de una manera seria y profunda, así formar su carácter en la palabra de Dios",
    },
     {
      inicio: 12,
      fin: 14,
      texto:
        "Invitamos a expositores a desarrollar pequeños tópicos de cursos teológicos, lo hacemos de manera virtual y presencial. En esta ocasión se desarrolló el curso de APOLOGÉTICA presencialmente en una iglesia local.",
    },
  ];

  // =====================================
  // ESTADOS DEL CARRUSEL
  // =====================================

  const [fotoActual, setFotoActual] = useState(0);

  const grupoActual = descripciones.find(
    (grupo) => fotoActual >= grupo.inicio && fotoActual <= grupo.fin,
  );

  // =====================================
  // NAVEGACIÓN
  // =====================================

  const siguienteFoto = () => {
    setFotoActual((actual) => (actual + 1) % fotografias.length);
  };

  const anteriorFoto = () => {
    setFotoActual(
      (actual) => (actual - 1 + fotografias.length) % fotografias.length,
    );
  };

  // =====================================
  // REPRODUCCIÓN AUTOMÁTICA
  // =====================================

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFotoActual((actual) => (actual + 1) % fotografias.length);
    }, 7000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="pagina-formacion">
      {/* DISEÑO PRINCIPAL FT */}

      <section className="formacion-hero">
        <div className="formacion-fondo"></div>

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

        <div className="formacion-logo-marco">
          <div className="formacion-logo-circulo">
            <img
              src={`${import.meta.env.BASE_URL}images/logocomunidad.png`}
              alt="Logo Comunidad 2220"
            />
          </div>
        </div>

        <div className="formacion-texto">
          <br />

          <h1>Formación teológica</h1>

          <a href="#cursos" className="formacion-boton">
            Explorar formación
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* SECCIÓN DE CONTENIDOS */}

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

        {/* =================================
            CARRUSEL DE FOTOGRAFÍAS
        ================================= */}

        <section className="ft-galeria" id="ft-galeria">
          <div className="ft-galeria-encabezado">
            <span>FORMACIÓN Y APRENDIZAJE</span>

            <h2>Galería de experiencias</h2>

            <p>
              Conoce nuestras actividades, encuentros y espacios de formación
              teológica.
            </p>
          </div>

          <div className="ft-carrusel">
            {/* IMAGEN PRINCIPAL */}

            <div className="ft-carrusel-imagen">
              <img
                key={fotoActual}
                src={fotografias[fotoActual]}
                alt={`Formación teológica ${fotoActual + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0.2";
                }}
              />

              {/* BOTÓN ANTERIOR */}

              <button
                className="ft-flecha ft-anterior"
                onClick={anteriorFoto}
                aria-label="Fotografía anterior"
              >
                &#10094;
              </button>

              {/* BOTÓN SIGUIENTE */}

              <button
                className="ft-flecha ft-siguiente"
                onClick={siguienteFoto}
                aria-label="Fotografía siguiente"
              >
                &#10095;
              </button>

              {/* CONTADOR */}

              <div className="ft-contador">
                {String(fotoActual + 1).padStart(2, "0")}
                {" / "}
                {String(fotografias.length).padStart(2, "0")}
              </div>
            </div>

            {/* INDICADORES */}

            <div className="ft-indicadores">
              {fotografias.map((foto, index) => (
                <button
                  key={index}
                  className={fotoActual === index ? "activo" : ""}
                  onClick={() => setFotoActual(index)}
                  aria-label={`Ver fotografía ${index + 1}`}
                  aria-current={fotoActual === index ? "true" : undefined}
                />
              ))}
            </div>

            {/* DESCRIPCIÓN DINÁMICA POR GRUPOS */}

            <div className="ft-descripcion" key={grupoActual?.titulo}>
              <span className="ft-descripcion-linea"></span>

              <h3>{grupoActual?.titulo}</h3>

              <p>{grupoActual?.texto}</p>
            </div>
          </div>
        </section>

        {/* TARJETAS */}

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
