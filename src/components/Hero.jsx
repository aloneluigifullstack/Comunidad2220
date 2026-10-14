
import { useEffect, useState } from "react";
import "./Hero.css";

const imagenes = [
    "/images/comunidad1.jpg",
    "/images/comunidad2.jpg",
    "/images/comunidad3.jpg",
    "/images/comunidad4.jpg",
    "/images/comunidad5.jpg",
     "/images/comunidad6.jpg",
    "/images/comunidad7.jpg",
    "/images/comunidad8.jpg",
    "/images/comunidad9.jpg",
    "/images/comunidad10.jpg",
     "/images/comunidad11.jpg",
    "/images/comunidad12.jpg",
    "/images/comunidad13.jpg",
    "/images/comunidad14.jpeg",
    "/images/comunidad15.jpeg",
     "/images/comunidad16.JPG",
    "/images/comunidad17.JPG",
    "/images/comunidad18.JPG",
    "/images/comunidad19.jpg",
    "/images/comunidad20.jpg",
     "/images/comunidad21.jpeg",
    "/images/comunidad22.jpg",
    "/images/comunidad23.jpg",
    "/images/comunidad24.jpg",
    "/images/comunidad25.jpg",
     "/images/comunidad26.jpg",
    "/images/comunidad27.jpg",
    "/images/comunidad28.jpg",
    "/images/comunidad29.jpg",
    "/images/comunidad30.jpg",
    "/images/comunidad31.JPG",
];

export default function Hero() {
    const [imagenActual, setImagenActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setImagenActual((actual) => (actual + 1) % imagenes.length);
        }, 5000);

        return () => clearInterval(intervalo);


    }, []);

    return (<section className="hero" id="inicio">
        {/* Carrusel de imágenes */} <div className="hero-carrusel">
            {imagenes.map((imagen, index) => (
                <div
                    key={imagen}
                    className={`hero-slide ${index === imagenActual ? "activo" : ""
                        }`}
                    style={{ backgroundImage: `url("${imagen}")` }}
                    aria-hidden={index !== imagenActual}
                />
            ))} </div>

    
        {/* Capa oscura para mejorar la lectura */}
        <div className="hero-overlay" />

        {/* Contenido centrado */}
        <div className="hero-contenido">
            <span className="hero-etiqueta">COMUNIDAD 2220</span>

            <h1>
                Jesús, el que da testimonio de que estas palabras son ciertas, 
                <br />
                dice: «Sí, vengo pronto».<span> Así sea. ¡Ven, Señor Jesús!</span>
                <br />
                Ap. 22 : 20
            </h1>
          

            <div className="hero-botones">
                <a href="#formacion" className="btn-dorado">
                    Conoce más
                </a>

                <a href="#contacto" className="btn-outline-dorado">
                    Únete
                </a>
            </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className="hero-puntos">
            {imagenes.map((_, index) => (
                <button
                    key={index}
                    type="button"
                    className={`hero-punto ${index === imagenActual ? "activo" : ""
                        }`}
                    onClick={() => setImagenActual(index)}
                    aria-label={`Mostrar imagen ${index + 1}`}
                    aria-current={index === imagenActual ? "true" : undefined}
                />
            ))}
        </div>

        <div className="hero-indicador">
            <span />
            FORMACIÓN · SERVICIO · ADORACIÓN
        </div>
    </section>


    );
}
