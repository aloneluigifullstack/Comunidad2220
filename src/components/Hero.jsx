
import { useEffect, useState } from "react";
import "./Hero.css";


const imagenes = [
    "comunidad1.jpg",
    "comunidad2.jpg",
    "comunidad3.jpg",
    "comunidad4.jpg",
    "comunidad5.jpg",
    "comunidad6.jpg",
    "comunidad7.jpg",
    "comunidad8.jpg",
    "comunidad9.jpg",
    "comunidad10.jpg",
    "comunidad11.jpg",
    "comunidad12.jpg",
    "comunidad13.jpg",
    "comunidad14.jpeg",
    "comunidad15.jpeg",
    "comunidad16.JPG",
    "comunidad17.JPG",
    "comunidad18.JPG",
    "comunidad19.jpg",
    "comunidad20.jpg",
    "comunidad21.jpeg",
    "comunidad22.jpg",
    "comunidad23.jpg",
    "comunidad24.jpg",
    "comunidad25.jpg",
    "comunidad26.jpg",
    "comunidad27.jpg",
    "comunidad28.jpg",
    "comunidad29.jpg",
    "comunidad30.jpg",
    "comunidad31.JPG",
].map((nombre) => `${import.meta.env.BASE_URL}images/${nombre}`);


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
