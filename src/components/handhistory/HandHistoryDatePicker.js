import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as BsIcons from 'react-icons/bs';
import DateRangePicker from '../date/DateRangePicker'

class HandHistoryDatePicker extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      calenderVisible: false,
    }
    this.handler = this.handler.bind(this)
  }

  getLabel(){
    return Intl.DateTimeFormat('de', 
    { 
      year: 'numeric',
      month: 'numeric',
      day: 'numeric' 
    }).format(this.props.startDate) + " - " + Intl.DateTimeFormat('de', 
    { 
      year: 'numeric',
      month: 'numeric',
      day: 'numeric' 
    }).format(this.props.endDate);
  }

  handler(newStartDate, newEndDate){
    console.log("handler1")
    if(newStartDate!=null && newEndDate!=null){
      this.setState({
        calenderVisible: false,
      })
      this.props.changeHandler(newStartDate, newEndDate)
    }
  }

  render() {
    const { calenderVisible } = this.state;
    return (
      <>
      <div className="date-range-component-div" style={{ float: "right", minWidth: "250px", minHeight: "500px", marginRight: "20px"}}>
        <TextField
          id="input-with-icon-textfield"
          size="small"
          onClick={() => this.setState({ calenderVisible: !calenderVisible })}
          value={this.getLabel()}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton >
                  <BsIcons.BsCalendar />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div hidden={!calenderVisible}>
          <DateRangePicker handler={this.handler} /> 
        </div>
      </div>
      </>
    ) 
    }
}

export default HandHistoryDatePicker;