import React from 'react'
import Cards from './Cards'
import * as AiIcons from 'react-icons/ai';
import IconButton from '@material-ui/core/IconButton';
import { Box, Collapse, TableCell, TableRow, Typography } from '@material-ui/core';

class HandHistoryTableRow extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            handBackup: props.hand,
            hand: props.hand
          }
    }

    earningsInBB(earnings, bb){
        return (earnings/bb).toFixed(1);
    }

    startingHand(doc){
        const hero = doc.hero
        let starthand = []
        Object.values(doc.players).filter(value => value.name===hero).map((player) => (
        Object.values(player.hand).map(card => (
            starthand.push(card)
        ))
        ))
        return starthand
    }

    position(doc){
        return "UTG"
    }

    flopcards(doc){
        if(doc.flop){
        return Object.values(doc.flop.cards)
        } 
        return []
    }

    turncard(doc){
        if(doc.turn){
        return [doc.turn.cards[3]]
        }
        return []
    }

    rivercard(doc){
        if(doc.river){
        return [doc.river.cards[4]]
        }
        return []
    }

    toggleCollapsed(){
        this.setState(collapsed => ({
            collapsed: !this.state.collapsed
          }));
    }

    render(){
         

        return (
        <React.Fragment>
            <>  
                <TableRow key={this.state.hand.id}>
                <TableCell>
                <IconButton aria-label="Replay" color="primary" onClick={()=>this.toggleCollapsed()}>
                    {this.state.open ? <AiIcons.AiOutlineUpCircle/> : <AiIcons.AiOutlineDownCircle />}
                </IconButton>
                </TableCell>
                <TableCell>{this.state.hand.id}</TableCell>
                <TableCell>
                    {Intl.DateTimeFormat('de', 
                    { 
                    month: 'numeric',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric' 
                    }).format(new Date(this.state.hand.timestamp))}
                </TableCell>
                <TableCell>{this.state.hand.sb}/{this.state.hand.bb}</TableCell>
                <TableCell>{this.position(this.state.hand.doc)}</TableCell>
                <TableCell><Cards cards={this.startingHand(this.state.hand)}/></TableCell>
                <TableCell align="center" style={{ paddingRight:"0px" }}><Cards cards={this.flopcards(this.state.hand)}/></TableCell>
                <TableCell align="center" style={{ paddingRight:"0px", paddingLeft:"0px" }}><Cards cards={this.turncard(this.state.hand)}/></TableCell>
                <TableCell align="center" style={{ paddingRight:"0px", paddingLeft:"0px" }}><Cards cards={this.rivercard(this.state.hand)}/></TableCell>
                <TableCell align="right">{this.state.hand.earnings}</TableCell>
                <TableCell align="right">{this.earningsInBB(this.state.hand.earnings, this.state.hand.bb)}</TableCell>
                <TableCell>{this.state.hand.winners}</TableCell>
            </TableRow>
            <TableRow>
                
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, align: "center"}} colSpan={12}>
                <Collapse in={this.state.collapsed} timeout="auto" unmountOnExit>
                <Box margin={5, 1} style={{backgroundColor: "#e0e0e0", minWidth:"750px", height: "400px"}} >
                    <Typography variant="h6" gutterBottom component="div">
                    Replay Baby
                    
                    </Typography>
                </Box>
                </Collapse>
                </TableCell>
            </TableRow>
            </> 
        </React.Fragment>
        );
    }
}
export default HandHistoryTableRow;