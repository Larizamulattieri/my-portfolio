import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const StyledNavBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly"
});

interface NavBarProps {
  scrollToSobreMim: () => void;
  scrollToHabilidades: () => void;
  scrollToProjetos: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToSobreMim,
  scrollToHabilidades,
  scrollToProjetos,
}) => {
  return (
    <AppBar position="fixed">
      <StyledNavBar>
        <MenuItem onClick={scrollToSobreMim}>Sobre mim</MenuItem>
        <MenuItem onClick={scrollToHabilidades}>Habilidades</MenuItem>
        <MenuItem onClick={scrollToProjetos}>Projetos</MenuItem>
      </StyledNavBar>
    </AppBar>
  );
};

export default NavBar;
