import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import BetImage from './images/bet.png'
import ButtonImage from './images/dealer.png'

const useStyles = makeStyles((theme, props) => ({
    chipWrapper: {
        display: "inline-block",
        position: "absolute",
        left: props => props.position.leftPos,
        top: props => props.position.topPos
    },
    betwrapper: {
        display: "inline-block",
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
    },
    dealerButton: {
        display: "inline-block",
        width: "37px",
        height: "24px"
    }
}));

const ChipWrapper = (props) => {
    const classes = useStyles(props);
    const leftPos = parseInt(props.position.leftPos.slice(0, -2))

    const showDealerButtonLeft = (props.isDealer && leftPos < 750)
    const showDealerButtonRight = (props.isDealer && leftPos >= 750)
    
    return (
        <Box className={classes.chipWrapper}>
            {showDealerButtonLeft ? <img src={ButtonImage} alt="Button" className={classes.dealerButton}/> : <></> }
            <Box className={classes.betwrapper}>
                <img src={BetImage} alt="Bet" className={classes.betImage} />
                <Typography className={classes.betSize}>{props.betSize}</Typography>
            </Box>
            {showDealerButtonRight ? <img src={ButtonImage} alt="Button" className={classes.dealerButton}/> : <></> }
        </Box>
    )

}
export default ChipWrapper;