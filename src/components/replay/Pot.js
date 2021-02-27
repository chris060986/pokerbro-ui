import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import pot from './images/pot.png';

const useStyles = makeStyles((theme) => ({
    pot:{
        backgroundColor: "green",
        display: "inline",
        position: "relative",
        left: "500px",
        top: "-480px"
    },
    potPicture: {
        display: "block",
        height: "50px",
        width: "50px"
    },
    potText: {
        display: "block",
        width: "50px",
        textAlign: "center",
        color: theme.palette.primary.contrastText
    }
}));


const Pot = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.pot}>
            <img src={pot} alt="pot" className={classes.potPicture} />
            <Typography className={classes.potText}>{props.potSize}</Typography>
        </Box>
    )
}
export default Pot;