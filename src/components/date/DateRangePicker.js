import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateRangePicker = (props) => {
    const [startDate, setStartDate] = useState(props.startDate);
    const [endDate, setEndDate] = useState(props.endDate);
    const onChange = dates => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      props.handler(start, end)
    };
    
    return (
        <>
          <Box>
            <DatePicker
                className="red-border"
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                shouldCloseOnSelect={false}
            >
                <Box>
                    <Button onClick={()=>props.handler(startDate, endDate)} size="small" variant="contained" color="primary" style={{ float: "right"}}>OK</Button>
                </Box>    
            </DatePicker>
          </Box>
        </>
    )
};

export default DateRangePicker;
