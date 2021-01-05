import React from 'react'
import { CardIcons } from './CardIconData'

class CardIcon extends React.Component {

    constructor(props){
        super(props)
        console.log(props.suit)
        console.log(props.rank)
    }

    getCardIconData(suit, rank) {
          return CardIcons[suit][rank]
      }

    render(){
        return (<div className="card-icon-wrapper">{this.getCardIconData(this.props.suit, this.props.rank)}</div>)
    }
}

export default CardIcon;