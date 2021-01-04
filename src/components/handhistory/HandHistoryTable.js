import React from 'react'
import './HandHistoryTable.css'

class HandHistoryTable extends React.Component {

  earningsInBB(earnings, bb){
    return (earnings/bb).toFixed(1);
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
                <td>Ah Kd</td>
                <td>2h 7c Td</td>
                <td>Ac</td>
                <td>2c</td>
                <td>{value.doc.earnings}</td>
                <td>{this.earningsInBB(value.doc.earnings, value.doc.bb)}</td>
                <td>{value.doc.winners}</td>
            </tr>
            ))}
          </tbody>
        </table>
        )
    }
}

export default HandHistoryTable;