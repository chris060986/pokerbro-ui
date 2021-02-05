import React from 'react'
import './HandHistoryDiagram.css'
import { LineChart } from 'react-chartkick'
import 'chart.js'

class HandHistoryDiagram extends React.Component{

    render () {
      return (
        <div className="graph-wrapper">
          <div className='graph-div'>
            <LineChart curve={false} messages={{empty: "No data"}} colors={["#1f25af"]} data={this.props.data} />
          </div>
        </div>
      ) 
    }

}

export default HandHistoryDiagram;
