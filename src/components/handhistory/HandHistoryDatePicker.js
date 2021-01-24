import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date().setDate(new Date().getDate()-1));
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </>
    );
  };

class HandHistoryDatePicker extends React.Component {
    
    render () {
        return (
          <div className='datepicker-div'>
            <MyDatePicker />
          </div>
        ) 
      }
}

export default HandHistoryDatePicker;