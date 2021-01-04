import React from 'react'

class Cards extends React.Component{

    constructor(props){
        super(props)
        const hasStreet = props.cards ? true : false
        if(hasStreet){
            console.log(props.cards.cards)
        }
        this.state = { hasStreet: hasStreet}
    }

    render(){
        if(this.state.hasStreet){
            return (
            <div>
                {Object.values(this.props.cards.cards).map(card =>(
                    <span>{card.rank}{card.suit}</span>
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