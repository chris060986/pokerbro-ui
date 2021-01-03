import React from 'react';
import axios from 'axios';
import HandHistoryTable from '../components/handhistory/HandHistoryTable'

class Handhistory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: [],
      num: 0
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5984/chrissi986/_all_docs?include_docs=true")
    .then(jsonResponse => {
      console.log(jsonResponse)
      this.setState({
        isLoaded: true,
        items: jsonResponse.data.rows,
        num: jsonResponse.data.total_rows
      })
    })
  }

  render() {
    //TODO: Handhistory table is not using state. Refactor that state update is recognized
    return (
      <div className='handhistory'>
        <h1>Handhistory</h1>
        <span>HandHistoryTable has{this.state.num} items </span>
        <HandHistoryTable items={this.state.items} />
        <table>
          <tbody>
              {Object.values(this.state.items).map((value) => (
                <tr key={value.doc.id}>
                  <td>{value.doc.id}</td>
                  <td>{value.doc.sb}</td>
                  <td>{value.doc.winners}</td>
                </tr>
              ))}
          </tbody>
          
        </table>
      </div>
    );
  }

}

export default Handhistory;