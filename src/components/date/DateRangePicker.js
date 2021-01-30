import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function DateRangePicker() {
    const [startDate, setStartDate] = useState(new Date().setDate(new Date().getDate()-1));
    const [endDate, setEndDate] = useState(new Date());
    const onChange = dates => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
    const handleCalendarClose = () => console.log("Calendar closed");
    
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
                onCalendarClose={handleCalendarClose}
            >
                <Box>
                    <Button size="small" variant="contained" color="primary" style={{ float: "right"}}>OK</Button>
                </Box>    
            </DatePicker>
          </Box>
        </>
    )
};
