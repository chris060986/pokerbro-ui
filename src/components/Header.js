
import * as DiIcons from 'react-icons/di';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const appBarStyle = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.primary,
        zIndex: theme.zIndex.drawer + 1,
    },
    icon: {
        height: "64px",
        width: "64px",
        color: theme.palette.primary.contrastText,
    }
  }));

function Header() {
    
    const classes = appBarStyle()
    return (
      <>
        <AppBar className={classes.header} position="fixed">
          <Toolbar>
            <DiIcons.DiReact className={classes.icon}></DiIcons.DiReact>
            <TypoGraphy variant="h4" component="h1" color="primary-contrastText" >The Poker Bro</TypoGraphy>
          </Toolbar>
        </AppBar>
      </>
    )
}

export default Header