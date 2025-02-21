import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/imagem.jpg";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import ContactsIcon from '@mui/icons-material/Contacts';
import StyledButton from "../../../../componentes/StyledButton/StyledButton";



const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px", // Definindo o valor padrão

        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px", // Alteração para dispositivos móveis
        },

        [theme.breakpoints.up('sm')]: {
            // Aqui você pode adicionar outras estilizações para telas maiores, se necessário
        }
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        height: "auto",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} display="flex" justifyContent="center">
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} alt="Avatar" />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7} display="flex" alignItems="center" justifyContent="center" fontSize="8rem" pb={2}>
                            <div>
                                <Typography className="hero-text" color="secondary" variant="h1"  fontSize="2rem"textAlign="center"  fontWeight="250">
                                    Lariza Mulattieri
                                </Typography>
                                <Typography className="hero-text" color="secondary" variant="h2" textAlign="center" paragraph fontWeight="200">
                                    Desenvolvedora Web
                                </Typography>
                                <Grid container spacing={2} justifyContent="center" pt={3} >
                                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                        <StyledButton>
                                            <SimCardDownloadIcon />
                                            <Typography>Download CV</Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                        <StyledButton>
                                            <ContactsIcon />
                                            <Typography>Contatos</Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
};

export default Hero;
