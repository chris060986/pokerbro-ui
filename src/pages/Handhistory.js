import React from 'react';
import axios from 'axios';
import HandHistoryTable from '../components/handhistory/HandHistoryTable'
import HandHistoryDiagram from '../components/handhistory/HandHistoryDiagram'
import HandHistoryDatePicker from '../components/handhistory/HandHistoryDatePicker'
import { Container } from '@material-ui/core';

class Handhistory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: []
    }
  }

  createDiagramData() {
    var lastEarnings = parseFloat(0);
    return Object.values(this.state.items).reduce(function(map, value) {
      var earnings = parseFloat(value.earnings)
      earnings = lastEarnings + earnings
      lastEarnings = earnings
      map[value.timestamp] = earnings;
      return map;
     }, { });
  }

  componentDidMount() {
    axios.post("http://localhost:5984/chrissi986/_find", {
        "selector": {
           "timestamp": {
              "$gte": "2020-12-01T00:00:00.000Z",
              "$lt": "2020-12-31T00:00:00.000Z"
           }
        }
    })
    .then(jsonResponse => {
      this.setState({
        isLoaded: true,
        items: jsonResponse.data.docs
      })
    })
  }

  render() {
    return (
      <Container>
        <h1>Handhistory</h1><br/>
        <HandHistoryDatePicker />
        <HandHistoryDiagram data={this.createDiagramData()} />
        <HandHistoryTable items={this.state.items} />
      </Container>
    );
  }

}

export default Handhistory;