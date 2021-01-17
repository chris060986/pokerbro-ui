import React from 'react'
import './HandHistoryDiagram.css'
import { LineChart } from 'react-chartkick'
import 'chart.js'

class HandHistoryDiagram extends React.Component{

    render () {
      return (
        <div className='graph-div'>
          <LineChart curve={false} data={this.props.data} />
        </div>
      ) 
    }

}

export default HandHistoryDiagram;
