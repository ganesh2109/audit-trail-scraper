import React from 'react';
//import Chart from 'react-google-charts';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux'
import SectionTitle from '../../components/section-title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import WarningIcon from '@material-ui/icons/Warning';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

class AuditTrail extends React.Component {
  
  render() {
    return (
      
      <React.Fragment>
        <SectionTitle>AuditTrail</SectionTitle><br></br>
        Filter <input type="text"></input> <button type="submit">Filter Audit Trail</button><br></br><br></br>
        {!this.props.loaded && <CircularProgress />}
        <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell align="left">Display</StyledTableCell>
            <StyledTableCell align="left">CreatedDate</StyledTableCell>
            <StyledTableCell align="left">Section</StyledTableCell>
            <StyledTableCell align="left">Delegate User</StyledTableCell>
            <StyledTableCell align="left">Severity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.loaded && this.props.data.map(row => (
            <StyledTableRow key={row.name}>
              {row.map(column => (
                <StyledTableCell component="th" scope="row">
                  {column}<br></br>
                  {column === 'High' && <WarningIcon color="error" />}
                  {column === 'Low' && <WarningIcon color="primary" />}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>        
      </React.Fragment>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.websocket.audittrail,
    loaded: state.websocket.audittrailLoaded
  }
};


export default connect(mapStateToProps)(AuditTrail)