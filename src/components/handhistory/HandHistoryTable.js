import React from 'react'
import './HandHistoryTable.css'
import HandHistoryTableRow from './HandHistoryTableRow'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

class HandHistoryTable extends React.Component {

 render(){
      return (
      <>
        <TableContainer  >
          <Table aria-label="handhistory table">
            <TableHead color="primary" >
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
        </TableContainer>
      </>
      )
  }
}

export default HandHistoryTable;