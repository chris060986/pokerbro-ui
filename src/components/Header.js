
import * as DiIcons from 'react-icons/di';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const appBarStyle = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.secondary.dark,
    },
    icon: {
        height: "72px",
        width: "72px",
        color: theme.palette.primary.main,
    }
  }));

function Header() {
    
    const classes = appBarStyle()
    return (
      <>
        <AppBar className={classes.header} position="static">
          <Toolbar>
            <DiIcons.DiReact className={classes.icon}></DiIcons.DiReact>
            <TypoGraphy variant="h4" component="h1" color="primary" >The Poker Bro</TypoGraphy>
          </Toolbar>
        </AppBar>
      </>
    )
}

export default Header