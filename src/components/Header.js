import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import headline from './Headline.png';
import PokerBroIcon from './PokerBroIcon.png';

const appBarStyle = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.primary,
        zIndex: theme.zIndex.drawer + 1,
    },
    icon: {
        height: "64px",
        width: "64px",
        color: theme.palette.primary.contrastText,
        marginRight: theme.spacing(2),
        padding: theme.spacing(1)
        
    }
  }));

function Header() {
    
    const classes = appBarStyle()
    return (
      <>
        <AppBar className={classes.header} position="fixed">
          <Toolbar>
            <img src={PokerBroIcon} alt="The Poker Bro Icon" className={classes.icon} />
            <img src={headline} alt="The Poker Bro" />
          </Toolbar>
        </AppBar>
      </>
    )
}

export default Header