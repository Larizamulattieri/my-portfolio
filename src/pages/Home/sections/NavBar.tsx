import { useState } from "react";
import {
  AppBar,
  MenuItem,
  Toolbar,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const StyledNavBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 1rem",
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
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Verifica se a tela é pequena

  const toggleDrawer = (open: boolean) => () => {
    setMenuOpen(open);
  };

  const menuItems = [
    { text: "Sobre mim", action: scrollToSobreMim },
    { text: "Habilidades", action: scrollToHabilidades },
    { text: "Projetos", action: scrollToProjetos },
  ];

  return (
    <AppBar position="fixed">
      <StyledNavBar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
              <List>
                {menuItems.map((item, index) => (
                  <ListItem
                    
                    key={index} 
                    onClick={() => {
                      item.action();
                      setMenuOpen(false); 
                    }}
                  >
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          menuItems.map((item, index) => (
            <MenuItem key={index} color="primary" onClick={item.action}>
              {item.text}
            </MenuItem>
          ))
        )}
      </StyledNavBar>
    </AppBar>
  );
};

export default NavBar;
