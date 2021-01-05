import React from 'react'
import CardIcon from '../cards/CardIcon'

class Cards extends React.Component{

    constructor(props){
        super(props)
        const hasStreet = props.cards ? true : false
        this.state = { hasStreet: hasStreet}
    }

    render(){
        if(this.state.hasStreet){
            return (
            <div>
                {Object.entries(this.props.cards.cards).map(([entry, card]) =>(
                    <CardIcon key={entry} suit={card.suit} rank={card.rank}/>
                ))}
            </div>
            )
        }
        else{
            return null
        }
        
    }

}

export default Cards;