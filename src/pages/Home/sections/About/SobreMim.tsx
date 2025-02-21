import { Box, Container, Typography, Grid, styled } from "@mui/material";
import { MaquinaDeEscrever } from "../../../../componentes/MaquinaDeEscrever/MaquinaDeEscrever";



const StyledSobreMim = styled('section')(({ theme }) => ({
  background: "radial-gradient( #8e43b0, #7b1fa2)", // Corrigindo a sintaxe do background
  animation: 'fadeInBackground 3s ease-out infinite',
  minHeight: '100vh', 
}));

const SobreMim = () => {
    return (
      <section id="sobre-mim">
        <StyledSobreMim>
          <Container maxWidth="lg" sx={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
            <Box>
              {}
              <Typography
                variant="h2"
                color="secondary"
                textAlign="center"
                padding="1.5em 0"
                gutterBottom
              >
                <MaquinaDeEscrever text="Sobre Mim" delay={150} />
              </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" paragraph color="secondary" border="1px solid" padding="1em" borderRadius="20px">
                  Olá, sou Lariza, uma jovem profissional com 21 anos e uma paixão por tecnologia e resolução de problemas. Desenvolvi e aprimoro constantemente habilidades em diagnóstico de problemas e automação de processos. Sou adaptável a novas situações e estou sempre disposta a aprender, seja em equipe ou de forma independente.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" paragraph color="secondary">
                  Além disso, estou mergulhando no mundo do desenvolvimento web, com foco em front-end. Tenho experiência com HTML, CSS, JavaScript e React.js, e estou sempre buscando novos desafios para aplicar meu aprendizado em projetos reais. Meu objetivo é continuar a combinar minhas habilidades técnicas com minha capacidade de inovar, criando soluções práticas e impactantes que façam a diferença nas equipes e projetos em que estou envolvida.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </StyledSobreMim> {/* Encerrando a div aqui */}
    </section>
  );
};

export default SobreMim;
