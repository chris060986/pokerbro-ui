import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonImage from './images/dealer.png'

const useStyles = makeStyles((theme, props) => ({
    dealerButton: {
        display: "inline-block",
        width: "37px",
        height: "24px",
        position: "absolute",
        top: props => props.position.topPos,
        left: props => props.position.leftPos,

    }
  }));

const DealerButton  = (props) => {
    const classes = useStyles(props);
    console.log(props.position)

    return (
        <>
            <img src={ButtonImage} alt="Button" className={classes.dealerButton}/>
        </>
    )
}
export default DealerButton;