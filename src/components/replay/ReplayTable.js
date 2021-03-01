import { Box, Button, Divider, List, ListItem, Paper, Typography } from '@material-ui/core';
import React from 'react'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton';
import pokerTableImage from "./images/pokerTable.png";
import { withStyles } from '@material-ui/core/styles';
import PlayerAvatar from "./PlayerAvatar";
import CommunityCards from "./CommunityCards";
import Pot from "./Pot";
import tableBackgoundFont from './images/pokerbroHeadline.png'

const useStyles = theme => ({
   
     handID: {
         display: "block"
     },
     replayTableRoot: {
        display: "block",
        width: "100%",
        minWidth: "1400px",
        height: "700px"
     },
     tableWrapper: {
         display: "contents",
         position: "absolute",
         height: "700px"
     },
     pokerTable: {
        display: "table",
        float: "left",
        width: "1100px", 
        minWidth:"1100px", 
        height:"600px",
        minHeight: "600px", 
        padding: "0px 5px 0px 0px",
        marginRight: "24px"
     },
     tableBackground: {
        backgroundColor: "lightgrey",
        width:"1100px", 
        height:"600px", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "1100px 600px", 
        backgroundImage: 'url(' + pokerTableImage + ')',
        display: "block",
        position: "relative"
      },
      avatarWrapper: {
        transform: "translate(-9%, 0)"
      },
      tableStats: {
        display: "table",
        width: "-webkit-fill-available",
        minWidth:"300px", 
        height: "492px", 
        minHeight: "492px",
        textAlign: "center",
        marginLeft: "24px",
        marginBottom: "8px"
      },
      tableStatsPaper: {
          height: "100%"
      },
      tableActions: {
        display: "table",
        width: "-webkit-fill-available", 
        minWidth:"300px",
        height:"200px", 
        minHeight: "200px",
        alignItems: "center",
        marginLeft: "24px"
      },
      tableActionButtonWrapper: {
        width: "255px",
        margin: "auto"
      },
      tablestateButtonWrapper: {
        width: "300px",
        margin: "auto"
      },
      tablebackgroundfont: {
          display: "inline",
          position: "absolute",
          left: "0",
          bottom: "0px",
          margin: theme.spacing(2)
      }
    });

function shiftPlayers(hero, playersList){
    while(hero.valueOf()!=playersList[0].name.valueOf()) {
        var removed = playersList.shift()
        playersList.push(removed)
    }
    return playersList
}

class ReplayTable extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
            handBackup: props.hand,
            hand: props.hand,
            pot: 0,
            players: shiftPlayers(props.hand.hero, props.hand.players),
            avatarTopPos: [],
            avatarLeftPos: [],
            test: [],
          }
        this.calcAvatarPositions(this.state.hand.players.length)
    }

    isDealer(playername){
        return (this.props.hand.button === playername);
    }

    calcAvatarPositions(numberOfPlayers){
        const radiusX = 450;
        const radiusY = 200;
        const mainHeight = 420;
        const mainWidth = 1100;
        let avatarTopPos=[];
        let avatarLeftPos=[];
        let frags = 360 / numberOfPlayers;
        for (var i = 0; i < numberOfPlayers; i++) {
            let theta = (frags / 180) * i * Math.PI;
            let posx = Math.round(radiusX * (Math.cos(theta))) + 'px';
            let posy = Math.round(radiusY * (Math.sin(theta))) + 'px';
            avatarTopPos.push(((mainHeight / 2) - parseInt(posy.slice(0, -2))) + 'px');
            avatarLeftPos.push(((mainWidth / 2) + parseInt(posx.slice(0, -2))) + 'px');
        }
        this.state.avatarLeftPos=avatarLeftPos;
        this.state.avatarTopPos=avatarTopPos;
    }

    getAvatarLeftPostition(seat){
        return this.state.avatarLeftPos[seat]
    }

    getAvatarTopPostition(seat){
        return this.state.avatarTopPos[seat]
    }

    render(){
        const { classes } = this.props;
        const hasPot = this.state.pot > 0;
        return(
            <Box className={classes.replayTableRoot} margin={5, 1} padding={3} >
                <Typography className={classes.handID} variant="h6" gutterBottom component="div">{this.state.hand.id}</Typography>
                <Box className={classes.tableWrapper}>
                    <Box className={classes.pokerTable} >
                        <Paper className={classes.tableBackground} elevation={3} >
                            <Box className={classes.avatarWrapper} >
                                {Object.values(this.state.players).map((player, index) => (
                                    <PlayerAvatar id={player.seat} player={player} tablePos={index} 
                                    leftPos={this.getAvatarLeftPostition(index)} topPos={this.getAvatarTopPostition(index)} isDealer={this.isDealer(player.name)} />
                                ))}
                            </Box>    
                            <CommunityCards board={this.state.hand.board} />
                            { hasPot ? <Pot potSize={this.state.pot} /> : <></> }
                            <Box><img src={tableBackgoundFont} alt="The Poker Bro" className={classes.tablebackgroundfont} /></Box>
                        </Paper>
                    </Box>
                    <Box className={classes.tableStats} >
                        <Paper className={classes.tableStatsPaper} elevation={3}>
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
                    <Box className={classes.tableActions} >
                        <Paper elevation={3}>
                            <Box className={classes.tableActionButtonWrapper}>
                                <IconButton color="primary" ><MdIcons.MdFastRewind size="1.5em" ></MdIcons.MdFastRewind></IconButton>
                                <IconButton color="secondary" ><RiIcons.RiRestartFill size="2em"></RiIcons.RiRestartFill></IconButton>
                                <IconButton color="primary"><MdIcons.MdFastForward size="1.5em" ></MdIcons.MdFastForward></IconButton>
                                <IconButton color="primary"><MdIcons.MdSkipNext size="1.5em"></MdIcons.MdSkipNext></IconButton>
                            </Box>
                            <Box className={classes.tablestateButtonWrapper}>
                                <Button variant="contained" size="small" color="secondary" margin={2}>Flop</Button>
                                <Button variant="contained" size="small" color="secondary" margin={2}>Turn</Button>
                                <Button variant="contained" size="small" color="secondary" margin={2}>River</Button>
                                <Button variant="contained" size="small" color="secondary" margin={2}>Showdown</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        )
    }
}
export default withStyles(useStyles)(ReplayTable);