import "../Capacitacionyservicio.css";
import { useState, useEffect } from "react";

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
  // =====================================
  // CARRUSEL DE CAPACITACIÓN Y SERVICIO
  // =====================================

  const fotografiasCYS = [
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/aaa6d5cf-3abf-4dd1-89af-4c602f67681c.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/47f2eabf-3d22-41f6-8030-ef5f39f425f7.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/0869d16c-1fd3-42a0-b90d-c62f867350dc.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/066a757a-2457-42e4-9b4c-ae9eba680909.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/1a287b27-1835-407b-abda-40c3ffbab94a.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/f2d1cd83-a6fa-4d8a-8379-75a701bbb4ce.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/b8259b93-3f69-4ffc-95a7-f845a6311e52.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/d7762a39-8d75-401d-be09-5c403ea343da.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/af644dbb-90bc-444b-b690-ecbb9285f818.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/2fdbd105-cd3c-4c0e-bb32-287426ebb9dd.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/3aa5528d-2157-495f-9137-23bd094ce4de.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/1a17ee9e-bdcd-41d2-a2de-fbd9ea0cd6e4.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/761a07fa-611e-465a-ab68-cc029e5544d8.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/016b497c-7f2a-4687-89e6-4e276a174dee.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/b2d18184-c0b0-4153-8531-b11b2019de5b.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/808d943e-e3ff-4aa4-b4c8-181c78ac18aa.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/5733c7e4-2b5e-4c39-9a13-f5404d704c6a.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/24f84bcc-b6e9-4c71-bdc4-76fae47214db.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/cd2f92fd-64b9-4865-8989-630c4867c503.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/a8d13e25-3f30-4a86-89f1-31387264df40.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/d5a7ea12-30de-408b-a5ca-79712d78cf3e.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/6c6b6253-7949-49a8-83f5-b24ca662eded.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/bb7e3cc1-400b-46a5-ae93-c6b1e9426966.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/b27e5252-53c5-4791-9198-d90bebc06b53.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/efa15a29-ade7-4523-86f2-72db25d5ab8d.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/6b12d9b9-49c2-470f-b74a-3b56e6f77987.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/f7498f46-0e49-4377-a71f-e5de4583480e.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/3cd3c3ec-c80b-457e-859b-50055f0e3533.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/e1127902-c654-47af-bc3b-b801dd70344f.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/77580da0-51b4-44a8-a591-b303ed02be0f.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/39807c74-a93d-4e66-aa3f-627df123ffd8.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/3f02b48b-3731-443a-b0cd-1f131e55b87e.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/7a8bc2eb-1096-472c-9b3e-54d1e2bfa3df.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/6c1ca6e9-fbde-4039-a5f8-f2b91ef10eff.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/a923b345-9775-40b3-880e-6c53f0801be5.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/24d2dde1-a1ec-447c-a54a-7884c1570599.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/0d6afaf9-f3c0-40d3-87d4-809e28d6e1c0.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/3daaaf63-fe7c-4f23-8743-5a906d8fd9db.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/79163747-4f36-4ca7-91d8-28cb996ef4d2.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/19f3c2a2-8877-453d-a7d5-9b081574ca04.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/a3ad0db4-087e-4589-af31-eec13b5e7607.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/929bd8ca-d313-4d8b-8832-53820970bb44.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/bc6879d3-1eb2-427b-8b61-85fcfab18ce8.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/fe867236-4560-4c2d-9b5a-640421a990ae.jpg",
    "https://thumbs-us-east-1.myalbum.io/photo/1k0/4c6de4fb-b216-4c91-beec-9d7599a0de6e.jpg",
  ];

  // DESCRIPCIONES POR GRUPOS

  const descripcionesCYS = [
    {
      inicio: 0,
      fin: 6,
      texto:
        "Se desarrolló la confraternidad de jóvenes denominada: Jóvenes misioneros frente a un mundo de cristal, donde se habló sobre el humanismo, también sobre la centralidad del hombre alejado de Dios. También se abordó temas sobre la sexualidad y pureza del creyente.",
    },
    {
      inicio: 7,
      fin: 20,
      texto:
        "Cada año por la gracia de Dios podemos realizar una chocolatada evangelística usando nuestros dones y capacidades para compartir la palabra de Dios a través de títeres, coreografías, dinámicas, etc. También repartimos una sabrosa chocolatada con panetones y juegos para los niños que están acompañados por sus padres.",
    },
    {
      inicio: 21,
      fin: 29,
      texto:
        "Invitamos a organizaciones misioneras a exponer un poco de la labor que ellos están llevando a cabo: Organizaciones como JUCUM (Juventud con una misión), CBU UNU (Comunidad bíblica universitaria- UNU) CBU UNIA (Comunidad bíblica Universitaria-UNIA), Corazones en acción, y Misión suiza en el Perú participaron. Deseamos que los jóvenes se involucren en la obra del Señor.",
    },
    {
      inicio: 30,
      fin: 39,
      texto:
        "Los viajes misioneros son una bendición para que los jóvenes puedan experimentar en la práctica el servicio y amor al prójimo. En esta ocasión viajamos a una etnia shipiba en la CCNN Nuevo Saposoa. Realizamos una chocolatada, repartiendo panetones y juegos para los niños. Apoyamos en las prédicas y en la alabanza en la iglesia local, y repartimos folletos evangelísticos en el pueblo.",
    },
    {
      inicio: 40,
      fin: 44,
      texto:
        "En cumplimiento del mandamiento del Señor también realizamos visita al hospital de Yarinacocha. Creemos que las personas están sensibles al evangelio en estos lugares. Además, que es una expresión del amor de Dios también amar al prójimo. El objetivo es que los jóvenes puedan experimentar en la práctica los dones que el Señor les entregó como la compasión, la bondad, el servicio, etc.",
    },
  ];

  // ESTADO DE LA FOTOGRAFÍA

  const [fotoActualCYS, setFotoActualCYS] = useState(0);

  // IDENTIFICAR DESCRIPCIÓN ACTUAL

  const grupoActualCYS = descripcionesCYS.find(
    (grupo) => fotoActualCYS >= grupo.inicio && fotoActualCYS <= grupo.fin,
  );

  // SIGUIENTE FOTOGRAFÍA

  const siguienteFotoCYS = () => {
    setFotoActualCYS((actual) => (actual + 1) % fotografiasCYS.length);
  };

  // FOTOGRAFÍA ANTERIOR

  const anteriorFotoCYS = () => {
    setFotoActualCYS(
      (actual) => (actual - 1 + fotografiasCYS.length) % fotografiasCYS.length,
    );
  };

  // REPRODUCCIÓN AUTOMÁTICA

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFotoActualCYS((actual) => (actual + 1) % fotografiasCYS.length);
    }, 7000);

    return () => clearInterval(intervalo);
  }, []);

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
              src={`${import.meta.env.BASE_URL}images/logocomunidad.png`}
              alt="Logo Comunidad 2220"
            />
          </div>
        </div>

        {/* Texto principal */}

        <div className="cys-texto">
          <h1>Capacitación y servicio</h1>

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
      GALERÍA DE CAPACITACIÓN Y SERVICIO
  ===================================== */}

        <section className="cys-galeria" id="cys-galeria">
          {/* ENCABEZADO */}

          <div className="cys-galeria-encabezado">
            <span>EXPERIENCIAS · APRENDIZAJE · SERVICIO</span>

            <h2>Momentos que transforman</h2>

            <p>
              Compartimos experiencias de formación, compromiso y servicio que
              fortalecen nuestra comunidad.
            </p>
          </div>

          {/* CONTENEDOR DEL CARRUSEL */}

          <div className="cys-carrusel">
            {/* FOTOGRAFÍA */}

            <div className="cys-carrusel-imagen">
              <img
                key={fotoActualCYS}
                src={fotografiasCYS[fotoActualCYS]}
                alt={`Capacitación y servicio ${fotoActualCYS + 1}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0.2";
                }}
              />

              {/* ANTERIOR */}

              <button
                className="cys-flecha-car cys-anterior"
                onClick={anteriorFotoCYS}
                aria-label="Fotografía anterior"
              >
                &#10094;
              </button>

              {/* SIGUIENTE */}

              <button
                className="cys-flecha-car cys-siguiente"
                onClick={siguienteFotoCYS}
                aria-label="Fotografía siguiente"
              >
                &#10095;
              </button>

              {/* CONTADOR */}

              <div className="cys-contador">
                {String(fotoActualCYS + 1).padStart(2, "0")}
                {" / "}
                {String(fotografiasCYS.length).padStart(2, "0")}
              </div>
            </div>

            {/* INDICADORES */}

            <div className="cys-indicadores">
              {fotografiasCYS.map((foto, index) => (
                <button
                  key={index}
                  className={fotoActualCYS === index ? "activo" : ""}
                  onClick={() => setFotoActualCYS(index)}
                  aria-label={`Ver fotografía ${index + 1}`}
                  aria-current={fotoActualCYS === index ? "true" : undefined}
                />
              ))}
            </div>

            {/* DESCRIPCIÓN POR GRUPOS */}

            <div className="cys-descripcion" key={grupoActualCYS?.titulo}>
              <span className="cys-descripcion-linea"></span>

              <h3>{grupoActualCYS?.titulo}</h3>

              <p>{grupoActualCYS?.texto}</p>
            </div>
          </div>
        </section>

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
