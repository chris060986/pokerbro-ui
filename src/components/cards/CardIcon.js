import React from 'react'
import { CardIcons } from './CardIconData'

class CardIcon extends React.Component {

    getCardIconData(suit, rank) {
          return CardIcons[suit][rank]
      }

    render(){
        return (<div className="card-icon-wrapper">{this.getCardIconData(this.props.suit, this.props.rank)}</div>)
    }
}

export default CardIcon;