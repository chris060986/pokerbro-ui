import { Box, Button, Divider, List, ListItem, Paper, Typography } from '@material-ui/core';
import React from 'react'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton';
import pokerTableImage from "../pokerTable.png";
import { withStyles } from '@material-ui/core/styles';
import PlayerAvatar from "./PlayerAvatar";

const useStyles = theme => ({
    tableBackground: {
       backgroundColor: "grey",
       width:"1100", 
       height:"600px", 
       backgroundRepeat: "no-repeat", 
       backgroundSize: "1100px 600px", 
       backgroundImage: 'url(' + pokerTableImage + ')',
       display: "flex",
       position: "relativ",
     },
});

function shiftPlayers(hero, playersList){
    while(hero.valueOf()!=playersList[0].name.valueOf()) {
        var removed = playersList.shift()
        playersList.push(removed)
    }
    console.log(playersList)
    return playersList
}

class ReplayTable extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
            handBackup: props.hand,
            hand: props.hand,
            players: shiftPlayers(props.hand.hero, props.hand.players)
          }
    }

    render(){
        const { classes } = this.props;
        return(
            <Box margin={5, 1} padding={3} style={{ minWidth:"900px", height: "700px",  display: "flow-root"}} >
                <Typography variant="h6" gutterBottom component="div">{this.state.hand.id}</Typography>
                <Box style={{ width: "70%", minWidth:"600px", height:"600px", float: "left", padding: "0px 5px 0px 0px"}} >
                    <Paper className={classes.tableBackground} elevation={3} >
                    {Object.values(this.state.players).map((player, index) => (
                                <PlayerAvatar id={player.seat} player={player} tablePos={index} style={{ position: "absolute" }}/>
                            ))}
                    </Paper>
                </Box>
                <Box style={{ width: "30%", height:"400px", minWidth:"300px", float: "left", textAlign: "center"}} >
                    <Paper elevation={3}>
                        <Typography variant="h6" gutterBottom component="div">Statistics</Typography>
                        <List >
                            {Object.values(this.state.players).map(player => (
                                <>
                                <ListItem>{player.name}</ListItem>
                                <Divider />
                                </>
                            ))}
                            
                        </List>
                    </Paper>
                </Box>
                <Box style={{ width: "30%", height:"200px", minWidth:"300px", float: "left", display: "flex", alignItems: "center"}} >
                    <Paper elevation={3}>
                        <div style={{margin: "auto"}}>
                        <IconButton color="primary" ><MdIcons.MdFastRewind size="1.5em" ></MdIcons.MdFastRewind></IconButton>
                        <IconButton color="secondary" ><RiIcons.RiRestartFill size="2em"></RiIcons.RiRestartFill></IconButton>
                        <IconButton color="primary"><MdIcons.MdFastForward size="1.5em" ></MdIcons.MdFastForward></IconButton>
                        <IconButton color="primary"><MdIcons.MdSkipNext size="1.5em"></MdIcons.MdSkipNext></IconButton>
                        <div>
                        <Button variant="contained" size="small" color="secondary" margin={2}>Flop</Button>
                        <Button variant="contained" size="small" color="secondary" margin={2}>Turn</Button>
                        <Button variant="contained" size="small" color="secondary" margin={2}>River</Button>
                        <Button variant="contained" size="small" color="secondary" margin={2}>Showdown</Button>
                        </div>
                        </div>
                    </Paper>
                </Box>
            </Box>
        )
    }
}
export default withStyles(useStyles)(ReplayTable);