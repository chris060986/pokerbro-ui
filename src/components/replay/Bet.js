import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import BetImage from './images/bet.png'

const useStyles = makeStyles((theme, props) => ({
    betwrapper: {
        display: "inline-block",
        position: "absolute",
        left: props => props.position.leftPos,
        top: props => props.position.topPos
    },
    betImage: {
        display: "block",
        width: "35px"
    },
    betSize: {
        display: "block",
        width: "35px",
        textAlign: "center",
        color: theme.palette.primary.contrastText
    }
}));

const Bet = (props) => {
    const classes = useStyles(props);

    return (
        <Box className={classes.betwrapper}>
            <img src={BetImage} alt="Bet" className={classes.betImage} />
            <Typography className={classes.betSize}>{props.betSize}</Typography>
        </Box>
    )

}
export default Bet;