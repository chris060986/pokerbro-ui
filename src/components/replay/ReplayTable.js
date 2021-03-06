import { Box, Button, Divider, List, ListItem, Paper, Typography } from '@material-ui/core';
import React from 'react'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton';
import pokerTableImage from "./images/pokerTable.png";
import { withStyles } from '@material-ui/core/styles';
import PlayerAvatar from "./PlayerAvatar";
import CommunityCards from "./CommunityCards";
import ChipWrapper from "./ChipWrapper";
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
      chipButtonWrapper: {
          transform: "translate(-3%, 0)",
          zIndex: "-1"
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
    let playerListCopy = JSON.parse(JSON.stringify(playersList));
    const maxPlayers = playerListCopy.length > 6 ? playerListCopy.length-1 : playerListCopy.length
    while(hero.valueOf()!==playerListCopy[maxPlayers-1].name.valueOf()) {
        var removed = playerListCopy.shift()
        playerListCopy.push(removed)
    }
    return playerListCopy
}

function calcPositionOnEllipse(numberOfItems, radiusX, radiusY, mainHeight, mainWidth, thetaOffset){
    let topPos=[];
    let leftPos=[];
    let frags = 360 / numberOfItems;
    for (var i = 0; i < numberOfItems; i++) {
        let theta = (frags / 180) * i * Math.PI;
        let posx = Math.round(radiusX * (Math.cos(theta+thetaOffset))) + 'px';
        let posy = Math.round(radiusY * (Math.sin(theta+thetaOffset))) + 'px';
        topPos.push(((mainHeight / 2) - parseInt(posy.slice(0, -2))) + 'px');
        leftPos.push(((mainWidth / 2) + parseInt(posx.slice(0, -2))) + 'px');
    }
    return ({leftPos, topPos});
}

function calcAvatarPositions(numberOfPlayers){
    let pos  = calcPositionOnEllipse(numberOfPlayers, 450, 220, 450, 1100, 0)
    let avatarLeftPos = pos.leftPos
    let avatarTopPos = pos.topPos
    return({avatarLeftPos, avatarTopPos})
}

function calcBetPositions(numberOfPlayers){
    let pos  = calcPositionOnEllipse(numberOfPlayers, 320, 120, 560, 1100, 0.089)
    let betLeftPos=pos.leftPos;
    let betTopPos=pos.topPos;
    return({betLeftPos, betTopPos})
}

const Streets = {
    PREFLOP: -1,
    FLOP: 3,
    TURN: 4,
    RIVER: 5,
    SHOWDOWN: 6
}

class ReplayTable extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            hand: props.hand,
            players: shiftPlayers(props.hand.hero, props.hand.players),
            pot: 0,
            street: Streets.PREFLOP,
            preflopActionPointer: 0,
            flopActionPointer: 0,
            turnActionsPointer: 0,
            riverActionsPointer: 0,
          }
          this.avatarPositions = calcAvatarPositions(this.props.hand.players.length)
          this.betPositions = calcBetPositions(this.props.hand.players.length)
          console.log("state:")
          console.log(this.state);
    }

    resetHand = (props) =>{
        let shiftedPlayers = shiftPlayers(this.props.hand.hero, this.props.hand.players)
        this.setState({
            pot: 0,
            street: Streets.PREFLOP,
            players: shiftedPlayers
        })
    }

    setStreetTo = (newStreet) => {
        this.setState({
            street: newStreet
        })
    }

    isDealer(playerName){
        return (this.state.hand.button.valueOf()===playerName.valueOf())
    }

    getBetPosition(seat){
       let leftPos = this.betPositions.betLeftPos[seat]
       let topPos = this.betPositions.betTopPos[seat]
       return {leftPos, topPos};
    }

    getAvatarPosition(seat){
        let avatarLeftPos = this.avatarPositions.avatarLeftPos[seat]
        let avatarTopPos = this.avatarPositions.avatarTopPos[seat]
        return {avatarLeftPos, avatarTopPos}
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
                                    <PlayerAvatar id={player.seat} player={player} tablePos={index} cssPosition={this.getAvatarPosition(index)} />
                                ))}
                            </Box>
                            
                            <Box className={classes.chipButtonWrapper} > 
                                {Object.values(this.state.players).map((player, index) => (
                                    <ChipWrapper id={player.seat} position={this.getBetPosition(index)} betSize="0" isDealer={this.isDealer(player.name)} />
                                ))}
                            </Box>
                            <CommunityCards street={this.state.street} board={this.state.hand.board} />
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
                                <IconButton color="primary"><MdIcons.MdFastRewind size="1.5em" ></MdIcons.MdFastRewind></IconButton>
                                <IconButton color="secondary" onClick={() => this.resetHand()} ><RiIcons.RiRestartFill size="2em"></RiIcons.RiRestartFill></IconButton>
                                <IconButton color="primary"><MdIcons.MdFastForward size="1.5em" ></MdIcons.MdFastForward></IconButton>
                                <IconButton color="primary"><MdIcons.MdSkipNext size="1.5em"></MdIcons.MdSkipNext></IconButton>
                            </Box>
                            <Box className={classes.tablestateButtonWrapper}>
                                <Button variant="contained" size="small" color="secondary" margin={2} onClick={() => this.setStreetTo(Streets.FLOP)}>Flop</Button>
                                <Button variant="contained" size="small" color="secondary" margin={2} onClick={() => this.setStreetTo(Streets.TURN)}>Turn</Button>
                                <Button variant="contained" size="small" color="secondary" margin={2} onClick={() => this.setStreetTo(Streets.RIVER)}>River</Button>
                                <Button variant="contained" size="small" color="secondary" margin={2} onClick={() => this.setStreetTo(Streets.SHOWDOWN)}>Showdown</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        )
    }
}
export default withStyles(useStyles)(ReplayTable);