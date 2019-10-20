import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // useNextVariants: true,
    fontFamily: "\"Montserrat\", sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontweight: 800,
    }


  },
  palette: {
    primary: {
      light: '#64d8cb',
      main: '#26a69a',
      dark: '#00766c',
    },
    secondary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
    }
  },
});

export default theme;