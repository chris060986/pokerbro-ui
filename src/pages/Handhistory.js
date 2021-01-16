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
        <HandHistoryTable items={this.state.items} />
      </div>
    );
  }

}

export default Handhistory;