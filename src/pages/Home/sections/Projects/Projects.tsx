
import { Grid, Button, Typography, Card, CardContent, CardMedia, styled } from "@mui/material";
import { MaquinaDeEscrever } from "../../../../componentes/MaquinaDeEscrever/MaquinaDeEscrever";

const projetos = [
 
  {
    nome: "Alura Book",
    descricao: "Aplicação para controle de livros, desenvolvida com HTML, CSS e JavaScript. O projeto foi baseado em um curso de HTML, CSS e Responsividade, com foco em melhorar a experiência do usuário em dispositivos móveis.",
    link: "https://larizamulattieri.github.io/alurabook/",
    imagem: "/alurabook.png"
  },
  {
    nome: "Jogo do Número Secreto",
    descricao: "Jogo simples de adivinhar um número aleatório, desenvolvido com HTML, CSS e JavaScript. O projeto foi criado como parte de um curso de Lógica de Programação, com ênfase na interação com o usuário e controle de fluxo.",
    link: "https://larizamulattieri.github.io/jogo-do-numero-secreto-2/",
    imagem: "/jogoDoNumeroSecreto.png"
  },
  {
    nome: "7 Days of Code",
    descricao: "Desafio de 7 dias com projetos diários de programação, realizado com HTML e CSS. O objetivo do desafio era aprimorar as habilidades de codificação de forma prática e rápida, criando parte do projeto a cada dia.",
    link: "https://larizamulattieri.github.io/7-days-of-code/",
    imagem: "7daysofcode.png"
  },
  {
    nome: "Alura Plus",
    descricao: "Projeto desenvolvido com HTML e CSS para iniciantes, abordando conceitos de criação de páginas e boas práticas no design de interfaces.",
    link: "https://larizamulattieri.github.io/Aluraplus/",
    imagem:"/aluraplus.png" 
  }
];

// Estilo para a seção de projetos
const StyledProjects = styled('div')(({ theme }) => ({
  background: "radial-gradient(#8e43b0, #7b1fa2)", 
  minHeight: '100vh', 
  padding: '2em'
}));

const Projetos = () => {
  return (
    <StyledProjects>
      <Typography variant="h2" align="center" gutterBottom color="#F1E3D3" fontWeight="200" padding="1.5em">
        <MaquinaDeEscrever
          text="Meus Projetos"
          cursorColor="#F1E3D3"
          typeSpeed={80}
          eraseSpeed={50}
        />
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projetos.map((projeto, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="130"
                image={projeto.imagem}
                alt={projeto.nome}
                sx={{
                  padding: '3px', // Ajuste a quantidade de espaço ao redor da imagem
                 
                }}
              />
              <CardContent>
                <Typography variant="h5">{projeto.nome}</Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {projeto.descricao}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={projeto.link}
                  target="_blank"
                  fullWidth
                >
                  Ver Projeto
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </StyledProjects>
  );
};

export default Projetos;
