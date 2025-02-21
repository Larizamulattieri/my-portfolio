import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const StyledNavBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly",
});

const NavBar = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => {
  return (
    <AppBar position="fixed">
      <StyledNavBar>
        <MenuItem onClick={() => scrollToSection("sobre-mim")}>Sobre mim</MenuItem>
        <MenuItem onClick={() => scrollToSection("habilidades")}>Habilidades</MenuItem>
        <MenuItem onClick={() => scrollToSection("projetos")}>Projetos</MenuItem>
      </StyledNavBar>
    </AppBar>
  );
};

export default NavBar;
