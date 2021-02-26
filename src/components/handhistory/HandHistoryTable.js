import React from 'react'
import './HandHistoryTable.css'
import HandHistoryTableRow from './HandHistoryTableRow'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

class HandHistoryTable extends React.Component {

 render(){
      return (
      <>
        <Paper elevation={3} style={{ display: "inline-block", width: "-webkit-fill-available" }}>
          <Table aria-label="handhistory table">
            <TableHead color="primary" style={{ backgroundColor: "#e0e0e0"}}>
              <TableRow>
                <TableCell />
                <TableCell>Date</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Stake</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Cards</TableCell>
                <TableCell align="center" style={{ paddingRight:"0px" }}>Flop</TableCell>
                <TableCell align="center" style={{ paddingRight:"0px", paddingLeft:"0px" }}>Turn</TableCell>
                <TableCell align="center" style={{ paddingRight:"0px", paddingLeft:"0px" }}>River</TableCell>
                <TableCell align="right">net won ($)</TableCell>
                <TableCell align="right">net won (BB)</TableCell>
                <TableCell>Winner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(this.props.items).map((value) => (
                <HandHistoryTableRow hand={value} />
              ))}
            </TableBody>
          </Table>
        </Paper>
      </>
      )
  }
}

export default HandHistoryTable;