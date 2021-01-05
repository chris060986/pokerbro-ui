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
    console.log(starthand)
    return starthand
  }

  flopcards(doc){
    if(doc.flop){
      return Object.values(doc.flop.cards)
    } 
    return null
  }

  turncard(doc){
    if(doc.turn){
      return [doc.turn.cards[3]]
    }
    return null
  }

  rivercard(doc){
    if(doc.river){
      return [doc.river.cards[4]]
    }
    return null
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
                { year: 'numeric',
                  month: 'numeric',
                  day: 'numeric', 
                  hour: 'numeric',
                  minute: 'numeric' 
                }).format(new Date(value.doc.timestamp))}
              </td>
              <td>{value.doc.sb}/{value.doc.bb}</td>
              <td><Cards cards={this.startingHand(value.doc)}/></td>
              
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