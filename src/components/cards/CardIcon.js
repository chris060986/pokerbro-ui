import React from 'react'
import { CardIcons } from './CardIconData'

class CardIcon extends React.Component {

    getCardIconData(suit, rank) {
        // How to do?
        //console.log(CardIcons[suit][rank])
        //return CardIcons[suit][rank]
        console.log(rank)
        console.log()
        return CardIcons[suit][rank]
      }

    render(){
        return (<div>{this.getCardIconData(this.props.suit, this.props.rank)}</div>)
    }
}

export default CardIcon;