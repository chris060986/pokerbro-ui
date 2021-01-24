import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './HandHistoryDatePicker.css'

const MyDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date().setDate(new Date().getDate()-1));
    const [endDate, setEndDate] = useState(new Date());
    const CustomButtonInput = ({ value, onClick }) => (
        <button className="button-input" onClick={onClick}>
          {value}
        </button>
      );
    return (
        <>
        <div className='datepicker-sub-div'>
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            customInput={<CustomButtonInput />}
            timeInputLabel="Time:"
            dateFormat="dd-MM-yyyy hh:mm aa"
            showTimeInput
            popperClassName="some-custom-class"
            popperPlacement="top-end"
            popperModifiers={{
                offset: {
                  enabled: true,
                  offset: "-50px, 5px"
                },
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                  boundariesElement: "viewport"
                }
              }}
        />
        </div>
        <div className='datepicker-sub-div'>
        <DatePicker
            customInput={<CustomButtonInput />}
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            timeInputLabel="Time:"
            dateFormat="dd-MM-yyyy hh:mm aa"
            showTimeInput
            popperModifiers={{
                offset: {
                  enabled: true,
                  offset: "-100px, 5px"
                },
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                  boundariesElement: "viewport"
                }
              }}
        />
        </div>
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