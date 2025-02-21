import React from "react";
import { Grid, Button, Typography, Card, CardContent, CardMedia, styled } from "@mui/material";
import { MaquinaDeEscrever } from "../../../../componentes/MaquinaDeEscrever/MaquinaDeEscrever";

const projetos = [
  {
    nome: "Alura Plus",
    descricao: "Projeto de plataforma de cursos com login, filmes e mais.",
    link: "https://larizamulattieri.github.io/Aluraplus/",
    imagem: "URL-da-imagem-do-projeto" 
  },
  {
    nome: "Alura Book",
    descricao: "Aplicação para controle de livros, incluindo cadastro e listagem.",
    link: "https://larizamulattieri.github.io/alurabook/",
    imagem: "URL-da-imagem-do-projeto"
  },
  {
    nome: "Jogo do Número Secreto",
    descricao: "Jogo simples onde o usuário tenta adivinhar um número aleatório.",
    link: "https://larizamulattieri.github.io/jogo-do-numero-secreto-2/",
    imagem: "URL-da-imagem-do-projeto"
  },
  {
    nome: "7 Days of Code",
    descricao: "Desafio de 7 dias, com projetos diários de programação.",
    link: "https://larizamulattieri.github.io/7-days-of-code/",
    imagem: "URL-da-imagem-do-projeto"
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
                height="140"
                image={projeto.imagem}
                alt={projeto.nome}
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
