import { Avatar, Box, Container, Divider, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardIcon from '../cards/CardIcon'

const useStyles = makeStyles((theme) => ({
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
    seatbox0: {
        position: "relative",
        left: "500px",
        top: "400px"
    },
    seatbox1: {
        position: "relative",
        left: "730px",
        top: "400px"
    },
    seatbox2: {
        position: "relative",
        left: "880px",
        top: "330px"
    },
    seatbox3: {
        position: "relative",
        left: "880px",
        top: "200px"
    },
    seatbox4: {
        position: "relative",
        left: "650px",
        top: "120px"
    },
    seatbox5: {
        position: "relative",
        left: "350px",
        top: "120px"
    },
    seatbox6: {
        position: "relative",
        left: "170px",
        top: "200px"
    },
    seatbox7: {
        position: "relative",
        left: "170px",
        top: "330px"
    },
    seatbox8: {
        position: "relative",
        left: "290px",
        top: "400px"
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
    }
  }));

function getClassName(classes, seat){
    if(seat===0) return classes.seatbox0;
    if(seat===1) return classes.seatbox1;
    if(seat===2) return classes.seatbox2;
    if(seat===3) return classes.seatbox3;
    if(seat===4) return classes.seatbox4;
    if(seat===5) return classes.seatbox5;
    if(seat===6) return classes.seatbox6;
    if(seat===7) return classes.seatbox7;
    if(seat===8) return classes.seatbox8;
}

const PlayerAvatar = (props) => {
    console.log(props.player.seat)
    console.log(props.player.name)
    console.log(props.tablePos)
    console.log(props.player)
    const classes = useStyles();
    const seatboxname = getClassName(classes, props.tablePos)

    let card1 = <CardIcon suit="EXTRA" rank="JK" />;
    let card2 = <CardIcon suit="EXTRA" rank="JK" />;
    if (props.player.hand){
        card1 = <CardIcon suit={props.player.hand[1].suit} rank={props.player.hand[1].rank} />
        card2 = <CardIcon suit={props.player.hand[2].suit} rank={props.player.hand[2].rank} />
    }

    return (
        <>
            <Box className={seatboxname} >
                <div className="avatar-cards">
                {card1} {card2}
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