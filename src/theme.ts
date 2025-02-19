import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#9DC08B", 
    },
    secondary: {
      main: "#3A7D44", 
    },
  },
  typography:{
    fontFamily: "Helvetica Neue"
}});

theme = responsiveFontSizes(theme);

export default theme;
