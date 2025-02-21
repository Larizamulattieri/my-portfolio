import { useRef } from "react";
import Hero from "./sections/Hero/Hero";
import NavBar from "./sections/NavBar";
import SobreMim from "./sections/About/SobreMim";

const Home = () => {
  const sobreMimRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    if (id === "sobre-mim" && sobreMimRef.current) {
      sobreMimRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar scrollToSection={scrollToSection} />
      <Hero />
      <div ref={sobreMimRef}>
        <SobreMim />
      </div>
    </>
  );
};

export default Home;
