import { Avatar, Box, Container, Divider, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardIcon from '../cards/CardIcon';
import dealerButton from './images/dealer.png';

const useStyles = makeStyles((theme, props) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        top: "-5px",
        left: "-12px"
      },
    seatbox: {
        position: "absolute",
        left: props => props.leftPos,
        top: props => props.topPos,
    },  
    avatarPaper:{
        position: "absolute",
        width: "175px",
        minWidth: "175px",
        height: "45px",
        maxHeight: "45px",
        display: "flex",        
        backgroundColor: "#fafafa"
    },
    avatar: {
        height: theme.spacing(5),
        witdh: theme.spacing(8),
    },
    typoSpan: {
        display: "block",
        textAlign: "center",
        marginTop: "3px",
        paddingLeft: "8px",
        whiteSpace: "nowrap",
        overflow: "hidden"
    },
    playerName: {
        fontSize: "0.875rem",
        display: "block",
        wordWrap: "break-word",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    stack: {
        fontSize: "0.75rem",
        display: "block"
    },
    dealerButton: {
      display: "inline-block",
      width: "37px",
      height: "24px"
    }
  }));

const PlayerAvatar = (props) => {
    const classes = useStyles(props);

    let card1 = <CardIcon suit="EXTRA" rank="JK" />;
    let card2 = <CardIcon suit="EXTRA" rank="JK" />;
    if (props.player.hand){
        card1 = <CardIcon suit={props.player.hand[1].suit} rank={props.player.hand[1].rank} />
        card2 = <CardIcon suit={props.player.hand[2].suit} rank={props.player.hand[2].rank} />
    }

    return (
        <>
            <Box className={classes.seatbox} >
                <div className="avatar-cards">
                {card1} {card2}
                {props.isDealer ? <img src={dealerButton} alt="Dealer" className={classes.dealerButton} /> : <></> }
                </div>
                <Paper className={classes.avatarPaper} elevation={3} >
                    <Avatar className={classes.large}>{props.player.name.charAt(0)}</Avatar>
                    <Container className={classes.typoSpan}>
                        <Typography className={classes.playerName}>{props.player.name}</Typography>
                        <Divider />
                        <Typography className={classes.stack}>{props.player.stack}</Typography>
                    </Container>
                </Paper>
                
            </Box>
        </>
    )
}
export default PlayerAvatar;