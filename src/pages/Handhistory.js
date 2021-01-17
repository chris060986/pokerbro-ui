import React from 'react';
import axios from 'axios';
import HandHistoryTable from '../components/handhistory/HandHistoryTable'
import HandHistoryDiagram from '../components/handhistory/HandHistoryDiagram'

class Handhistory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: [],
      num: 0
    }
  }

  createDiagramData() {
    var lastEarnings = parseFloat(0);
    return Object.values(this.state.items).reduce(function(map, value) {
      var earnings = parseFloat(value.doc.earnings)
      earnings = lastEarnings + earnings
      lastEarnings = earnings
      map[value.doc.timestamp] = earnings;
      return map;
     }, {});
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
    return (
      <div className='handhistory'>
        <HandHistoryDiagram data={this.createDiagramData()} />
        <HandHistoryTable items={this.state.items} />
      </div>
    );
  }

}

export default Handhistory;