
import { Box, Typography, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#7b1fa2", color: "#F1E3D3", padding: "3em 0" }}>
      <Grid container spacing={2} justifyContent="center" direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h6" align="center">
            Desenvolvido por Lariza Mulattieri
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center" paragraph border="1px solid" borderRadius="30px" padding="1em"> 
            Este portfólio foi desenvolvido utilizando as seguintes tecnologias:
            <br />
            <strong>React.js, TypeScript, Material UI, HTML, CSS</strong>
          </Typography>
        </Grid>
        <Grid item>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">
            <Link href="https://www.linkedin.com/in/lariza-mulattieri-7a1a65235/" target="_blank" color="inherit" sx={{ marginRight: "1em" }}  border="1px solid" borderRadius="1em" padding="0.5em">
              LinkedIn
            </Link>
            <Link href="https://github.com/Larizamulattieri" target="_blank" color="inherit" border="1px solid" borderRadius="1em" padding="6.5px 13px">
              GitHub
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center" color="textSecondary">
            &copy; {new Date().getFullYear()} Lariza Mulattieri. Todos os direitos reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
