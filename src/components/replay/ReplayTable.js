import { Box, Button, Divider, List, ListItem, Paper, Typography } from '@material-ui/core';
import React from 'react'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton';
import pokerTableImage from "./images/pokerTable.png";
import { withStyles } from '@material-ui/core/styles';
import PlayerAvatar from "./PlayerAvatar";
import CommunityCards from "./CommunityCards";
import DealerButton from "./DealerButton";
import Bet from "./Bet";
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
      dealerButtonWrapper: {
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
    const maxPlayers = playersList.length > 6 ? playersList.length-1 : playersList.length
    while(hero.valueOf()!=playersList[maxPlayers-1].name.valueOf()) {
        var removed = playersList.shift()
        playersList.push(removed)
    }
    return playersList
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

function calcDealerButtonPositions(numberOfPlayers){
    let pos  = calcPositionOnEllipse(numberOfPlayers, 340, 130, 570, 1090, -0.089)
    let buttonLeftPos=pos.leftPos;
    let buttonTopPos=pos.topPos;
    return({buttonLeftPos, buttonTopPos})
}

function calcBetPositions(numberOfPlayers){
    let pos  = calcPositionOnEllipse(numberOfPlayers, 320, 120, 560, 1100, 0.089)
    let betLeftPos=pos.leftPos;
    let betTopPos=pos.topPos;
    return({betLeftPos, betTopPos})
}

class ReplayTable extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
            handBackup: props.hand,
            hand: props.hand,
            pot: 5,
            players: shiftPlayers(props.hand.hero, props.hand.players),
            avatarTopPos: calcAvatarPositions(props.hand.players.length).avatarTopPos,
            avatarLeftPos: calcAvatarPositions(props.hand.players.length).avatarLeftPos,
            dealerPositions: calcDealerButtonPositions(props.hand.players.length),
            betPositions: calcBetPositions(props.hand.players.length)
          }
    }

    getDealerSeat(){
        console.log(this.state.players)
        for(var i =0; i<this.state.players.length; i++){
            console.log("button: " + this.props.hand.button.valueOf())
            console.log(this.state.players[i].name.valueOf())
            if(this.props.hand.button.valueOf()===this.state.players[i].name.valueOf()) {
                console.log("dealer: " + this.state.players[i].seat)
                return this.state.players[i].seat
            }
        }
    }

    getDealerPosition(seat){
        let leftPos = this.state.dealerPositions.buttonLeftPos[seat]
        let topPos = this.state.dealerPositions.buttonTopPos[seat]
        return {leftPos, topPos};
    }

    getBetPosition(seat){
       let leftPos = this.state.betPositions.betLeftPos[seat]
       let topPos = this.state.betPositions.betTopPos[seat]
       return {leftPos, topPos};
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
        /*<DealerButton position={this.getDealerPosition(0)}  />
        <DealerButton position={this.getDealerPosition(1)}  />
        <DealerButton position={this.getDealerPosition(2)}  />
        <DealerButton position={this.getDealerPosition(3)}  />
        <DealerButton position={this.getDealerPosition(4)}  />
        <DealerButton position={this.getDealerPosition(5)}  />
        <DealerButton position={this.getDealerPosition(6)}  />
        <DealerButton position={this.getDealerPosition(7)}  />
        <DealerButton position={this.getDealerPosition(8)}  />
         <DealerButton position={this.getDealerPosition(this.getDealerSeat())} />*/
        return(
            <Box className={classes.replayTableRoot} margin={5, 1} padding={3} >
                <Typography className={classes.handID} variant="h6" gutterBottom component="div">{this.state.hand.id}</Typography>
                <Box className={classes.tableWrapper}>
                    <Box className={classes.pokerTable} >
                        <Paper className={classes.tableBackground} elevation={3} >
                            <Box className={classes.avatarWrapper} >
                                {Object.values(this.state.players).map((player, index) => (
                                    <PlayerAvatar id={player.seat} player={player} tablePos={index} 
                                    leftPos={this.getAvatarLeftPostition(index)} topPos={this.getAvatarTopPostition(index)} />
                                ))}
                            </Box>
                            <Box className={classes.dealerButtonWrapper} > 
                            <DealerButton position={this.getDealerPosition(0)}  />
                            <DealerButton position={this.getDealerPosition(1)}  />
                            <DealerButton position={this.getDealerPosition(2)}  />
                            <DealerButton position={this.getDealerPosition(3)}  />
                            <DealerButton position={this.getDealerPosition(4)}  />
                            <DealerButton position={this.getDealerPosition(5)}  />
                            <DealerButton position={this.getDealerPosition(6)}  />
                            <DealerButton position={this.getDealerPosition(7)}  />
                            <DealerButton position={this.getDealerPosition(8)}  />
                            </Box>
                            <Box className={classes.dealerButtonWrapper} > 
                                {Object.values(this.state.players).map((player, index) => (
                                    <Bet id={player.seat} position={this.getBetPosition(index)} betSize="5" />
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