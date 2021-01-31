import React from 'react';
import axios from 'axios';
import HandHistoryTable from '../components/handhistory/HandHistoryTable'
import HandHistoryDiagram from '../components/handhistory/HandHistoryDiagram'
import HandHistoryDatePicker from '../components/handhistory/HandHistoryDatePicker'
import { Box, Toolbar } from '@material-ui/core';

class Handhistory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: [],
      startDate: new Date().setDate(new Date().getDate()-1),
      endDate: new Date(),
    }
    this.dateHandler = this.dateHandler.bind(this)
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

  dateHandler(newStartDate, newEndDate){
    console.log("toplevel handler")
    console.log(newStartDate)
    console.log(newEndDate)
    if(newStartDate!=null){
      this.setState({
        startDate: new Date(newStartDate)
      });
    }
    if(newEndDate!=null){
      this.setState({
        endDate: new Date(newEndDate)
      });
    }
  }

  render() {
    return (
      <div style={{with: "100%"}}>
      <Box >
        <Toolbar style={{ float: "right"}}><HandHistoryDatePicker startDate={this.state.startDate} endDate={this.state.endDate} changeHandler={this.dateHandler}/></Toolbar>
        <h1>Handhistory</h1><br/>
        <HandHistoryDiagram data={this.createDiagramData()} />
        <HandHistoryTable items={this.state.items} />
      </Box>
      </div>
    );
  }

}

export default Handhistory;