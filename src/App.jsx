
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";

import QuienesSomos from "./pages/QuienesSomos";
import CongresosJuveniles from "./pages/CongresosJuveniles";
import FormacionTeologica from "./pages/FormacionTeologica";
import CapacitacionServicio from "./pages/CapacitacionServicio";
import BandaComunidad from "./pages/BandaComunidad";
import LiveStreaming from "./pages/LiveStreaming";

import "./App.css";

function Home() {
  return (
    <main>
      <Hero />
      <Section1 />
      <Section2 />
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/quienes-somos"
          element={<QuienesSomos />}
        />

        <Route
          path="/congresos-juveniles"
          element={<CongresosJuveniles />}
        />

        <Route
          path="/formacion-teologica"
          element={<FormacionTeologica />}
        />

        <Route
          path="/capacitacion-servicio"
          element={<CapacitacionServicio />}
        />

        <Route
          path="/banda-comunidad"
          element={<BandaComunidad />}
        />

        <Route
          path="/live-streaming"
          element={<LiveStreaming />}
        />

        <Route
          path="*"
          element={
            <main className="pagina-interna pagina-live">
              <section className="pagina-contenido">
                <h1>Página no encontrada</h1>
                <p>La página que buscas no existe.</p>
                <a href="/" className="pagina-boton">
                  Volver al inicio
                </a>
              </section>
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
