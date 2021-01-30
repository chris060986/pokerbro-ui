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

  render() {
    const { calenderVisible }= this.state;
    return (
      <>
      <div className="date-range-component-div" style={{ float: "right"}}>
        <TextField
          id="input-with-icon-textfield"
          size="small"
          onClick={() => this.setState({ calenderVisible: !calenderVisible })}
          value={this.getLabel()}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="secondary-dark" >
                  <BsIcons.BsCalendar  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div>
        { calenderVisible ? <DateRangePicker  /> : null } 
        </div>
      </div>
      </>
    ) 
    }
}

export default HandHistoryDatePicker;