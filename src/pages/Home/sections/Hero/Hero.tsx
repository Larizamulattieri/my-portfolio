import {Container, Grid, Typography, styled, Button} from "@mui/material";
import Avatar from "../../../../assets/images/imagem.jpg";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import ContactsIcon from '@mui/icons-material/Contacts';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        width: "100vh"
    }));

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%" // Corrigido a sintaxe
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg" >

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImg src={Avatar} alt="Avatar" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary" variant="h1" textAlign="center"> Lariza Mulattieri</Typography>
                            <Typography color="primary" variant="h2"textAlign="center"> Desenvolvdeora Web</Typography>
                           <Grid container display="flex" justifyContent="center">
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <Button>
                            <SimCardDownloadIcon/>
                            Download CV</Button>
                            </Grid>
                            <Grid item xs={12} md={4}display="flex" justifyContent="center">
                            <Button>
                            <ContactsIcon/> Contatos</Button>
                        </Grid>
                            </Grid>
                           </Grid>
                           
                            
                    </Grid>
                </Container>

            </StyledHero>
        </>
    );
};

export default Hero;
