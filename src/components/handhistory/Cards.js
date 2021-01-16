import React from 'react'
import CardIcon from '../cards/CardIcon'

class Cards extends React.Component{

    render(){
        return (
        <div>
            {Object.entries(this.props.cards).map(([index, value]) =>(
                <CardIcon key={index} rank={value.rank} suit={value.suit} />
            ))}
        </div>
        )
    }
}

export default Cards;