import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6250e2',
      main: '#1f25af',
      dark: '#00007e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff81a0',
      main: '#f64c72',
      dark: '#be0047',
      contrastText: '#000',
    },
  },
  overrides: {
    MuiDrawer: {
        paper: {
            //theme.
            backgroundColor: "#fafafa",
    }},
    
  }
});

export default theme;