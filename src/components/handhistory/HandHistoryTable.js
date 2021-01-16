import React from 'react'
import './HandHistoryTable.css'
import Cards from './Cards'
import * as CgIcons from 'react-icons/cg';

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
    //TODO: calculate position
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
      <table className='HandHistoryTable'>
        <thead>
          <tr> 
            <td>ID</td>
            <td>Time</td>
            <td>Stake</td>
            <td>Cards</td>
            <td>Position</td>
            <td>Flop</td>
            <td>Turn</td>
            <td>River</td>
            <td>net won ($)</td>
            <td>net won (BB)</td>
            <td>Winner</td>
            <td>Replay</td>
          </tr>
        </thead>
        <tbody>
          {Object.values(this.props.items).map((value) => (
            <tr key={value.doc.id}>
              <td>{value.doc.id}</td>
              <td>
                {Intl.DateTimeFormat('de', 
                { 
                  month: 'numeric',
                  day: 'numeric', 
                  hour: 'numeric',
                  minute: 'numeric' 
                }).format(new Date(value.doc.timestamp))}
              </td>
              <td>{value.doc.sb}/{value.doc.bb}</td>
              <td><Cards cards={this.startingHand(value.doc)}/></td>
              <td>{this.position(value.doc)}</td>
              <td><Cards cards={this.flopcards(value.doc)}/></td>
              <td><Cards cards={this.turncard(value.doc)}/></td>
              <td><Cards cards={this.rivercard(value.doc)}/></td>
              <td>{value.doc.earnings}</td>
              <td>{this.earningsInBB(value.doc.earnings, value.doc.bb)}</td>
              <td>{value.doc.winners}</td>
              <td><CgIcons.CgPlayButtonO /></td>
          </tr>
          ))}
        </tbody>
      </table>
      )
  }
}

export default HandHistoryTable;