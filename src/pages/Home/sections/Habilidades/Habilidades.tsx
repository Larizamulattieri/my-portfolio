import { useState } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import { MaquinaDeEscrever } from "../../../../componentes/MaquinaDeEscrever/MaquinaDeEscrever";


const habilidades = [
  { nome: "HTML", descricao: "Conhecimento em HTML para criar páginas web estruturadas."},
  { nome: "CSS", descricao: "Uso de CSS para estilizar e criar layouts responsivos." },
  { nome: "JavaScript", descricao: "Conhecimento em JavaScript para adicionar interatividade às páginas." },
  { nome: "React", descricao: "Experiência com React para construir interfaces dinâmicas." },
  { nome: "TypeScript", descricao: "Uso de TypeScript para adicionar tipagem estática ao JavaScript." },
  { nome: "Em progresso", descricao: "Aprendizado contínuo de novas tecnologias e práticas." }
];

const Habilidades = () => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % habilidades.length);
  };

  const prevCard = () => {
    setIndex((prevIndex) => (prevIndex - 1 + habilidades.length) % habilidades.length);
  };

  return (
    <section id="habilidades">
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" sx={{ background: "radial-gradient(#8e43b0, #7b1fa2)" }}>
      <div>
        <Typography
          variant="h2"
          color="secondary"
          textAlign="center"
          padding="1.2em 0"
          gutterBottom
          fontWeight="200"
        >
          <MaquinaDeEscrever text="Minhas Habilidades" delay={50} />
        </Typography>
      </div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Box sx={{
            width: "300px",
            height: "250px",
            backgroundColor: "#9d7cce",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "40px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            transition: "transform 0.5s ease-in-out",
            transform: `scale(${1.1})`,
            padding: "2em"
          }}>
            <Typography variant="h5" color="primary" fontWeight="700">{habilidades[index].nome}</Typography>
            <Typography variant="body2" color="#F1E3D3" textAlign="center" padding="1em" fontWeight="500">{habilidades[index].descricao}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box padding="2em" mt={3}>
        <Button onClick={prevCard} variant="contained" color="primary" sx={{ mx: 1 }}>Prev</Button>
        <Button onClick={nextCard} variant="contained" color="primary" sx={{ mx: 1 }}>Next</Button>
      </Box>
    </Box>
    </section>
  );
};

export default Habilidades;
