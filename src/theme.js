import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f86100',
    },
    secondary: {
      main: '#848482',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#b4b4b1',
    },
  },
  overrides: {
    MuiDrawer: {
        paper: {
            //theme.
            backgroundColor: "#b4b4b1",
    }},
    
  }
});

export default theme;