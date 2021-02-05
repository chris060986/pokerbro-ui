import React from 'react'
import './HandHistoryTable.css'
import Cards from './Cards'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import IconButton from '@material-ui/core/IconButton';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

class HandHistoryTable extends React.Component {

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

  render(){
      return (
      <>
        <TableContainer  >
          <Table aria-label="handhistory table">
            <TableHead color="primary" >
              <TableRow>
                <TableCell />
                <TableCell>Date</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Stake</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Cards</TableCell>
                <TableCell align="center" style={{ paddingRight:"0px" }}>Flop</TableCell>
                <TableCell align="center" style={{ paddingRight:"0px", paddingLeft:"0px" }}>Turn</TableCell>
                <TableCell align="center" style={{ paddingRight:"0px", paddingLeft:"0px" }}>River</TableCell>
                <TableCell align="right">net won ($)</TableCell>
                <TableCell align="right">net won (BB)</TableCell>
                <TableCell>Winner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {Object.values(this.props.items).map((value) => (
            <TableRow key={value.id}>
              <TableCell>
              <IconButton aria-label="Replay" color="primary">
                <AiIcons.AiOutlineDownCircle />
              </IconButton>
              </TableCell>
              <TableCell>{value.id}</TableCell>
              <TableCell>
                {Intl.DateTimeFormat('de', 
                { 
                  month: 'numeric',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric' 
                }).format(new Date(value.timestamp))}
              </TableCell>
              <TableCell>{value.sb}/{value.bb}</TableCell>
              <TableCell>{this.position(value.doc)}</TableCell>
              <TableCell><Cards cards={this.startingHand(value)}/></TableCell>
              <TableCell align="center" style={{ paddingRight:"0px" }}><Cards cards={this.flopcards(value)}/></TableCell>
              <TableCell align="center" style={{ paddingRight:"0px", paddingLeft:"0px" }}><Cards cards={this.turncard(value)}/></TableCell>
              <TableCell align="center" style={{ paddingRight:"0px", paddingLeft:"0px" }}><Cards cards={this.rivercard(value)}/></TableCell>
              <TableCell align="right">{value.earnings}</TableCell>
              <TableCell align="right">{this.earningsInBB(value.earnings, value.bb)}</TableCell>
              <TableCell>{value.winners}</TableCell>
              <IconContext.Provider value={{ color: '#f86100' }}>
              </IconContext.Provider>
          </TableRow>
          ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
      )
  }
}

export default HandHistoryTable;