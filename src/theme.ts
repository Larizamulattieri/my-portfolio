import { createTheme, responsiveFontSizes} from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#7b1fa2', 
    },
    secondary: {
      main: '#c5e1a5', 
    },
  },
  typography: {
    fontFamily:  "IBM Plex Sans, serif", 
  },});

theme = responsiveFontSizes(theme);

export default theme;
