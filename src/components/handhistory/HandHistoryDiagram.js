import React from 'react'
import './HandHistoryDiagram.css'
import { LineChart } from 'react-chartkick'
import 'chart.js'
import { Paper } from '@material-ui/core';

class HandHistoryDiagram extends React.Component{

    render () {
      return (
        <Paper elevation={3} style={{ maxWidth: "1050px", minWidth: "1050px" }}>
        <div className="graph-wrapper">
          <div className='graph-div'>
            <LineChart curve={false} messages={{empty: "No data"}} colors={["#1f25af"]} data={this.props.data} />
          </div>
        </div>
        </Paper>
      ) 
    }

}

export default HandHistoryDiagram;
