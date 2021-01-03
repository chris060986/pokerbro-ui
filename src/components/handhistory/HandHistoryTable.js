import React from 'react'

class HandHistoryTable extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            tableItems: props.items
        }
    }

    render(){
        return (
        <table>
          <tbody>
              {Object.values(this.state.tableItems).map((value) => (
                <tr key={value.doc.id}>
                  <td>{value.doc.id}</td>
                  <td>{value.doc.sb}</td>
                  <td>{value.doc.winners}</td>
                </tr>
              ))}
          </tbody>
        </table>
        )
    }
}

export default HandHistoryTable;