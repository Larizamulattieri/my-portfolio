import { useRef } from "react";
import Hero from "./sections/Hero/Hero";
import NavBar from "./sections/NavBar";
import SobreMim from "./sections/About/SobreMim";
import Habilidades from "./sections/Habilidades/Habilidades";
import Projects from "./sections/Projects/Projects";
import Footer from "../Home/sections/footer"

const Home = () => {
  const sobreMimRef = useRef<HTMLDivElement>(null);
  const habilidadesRef = useRef<HTMLDivElement>(null);
  const projetosRef = useRef<HTMLDivElement>(null);  

  const scrollToSobreMim = () => {
    if (sobreMimRef.current) {
      sobreMimRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHabilidades = () => {
    if (habilidadesRef.current) {
      habilidadesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjetos = () => {
    if (projetosRef.current) {
      projetosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar
        scrollToSobreMim={scrollToSobreMim}
        scrollToHabilidades={scrollToHabilidades}
        scrollToProjetos={scrollToProjetos}
      />
      <Hero />
      <div ref={sobreMimRef}>
        <SobreMim />
      </div>
      <div ref={habilidadesRef}>
        <Habilidades />
      </div>
      <div ref={projetosRef}>
        <Projects/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
