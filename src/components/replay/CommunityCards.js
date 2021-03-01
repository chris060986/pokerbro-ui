import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CardIcon from '../cards/CardIcon'

const useStyles = makeStyles((theme) => ({
    communityCardWrapper: {
        display: "inline-block",
        position: "relative",
        left: "380px",
        top: "210px"
    },
    cardIconTest: {
        backgroundColor: "black",
    }
}));

const CommunityCards = (props) => {
    const classes = useStyles();
    if(props.board) {
        return (
            <>
                <Box className={classes.communityCardWrapper}>
                    <div className="community-cards">
                        {Object.values(props.board).map(card => (
                            <CardIcon suit={card.suit} rank={card.rank} />
                        ))}
                    </div>
                </Box>
            </>
        )
    }
    return(<></>)
    
}

export default CommunityCards;