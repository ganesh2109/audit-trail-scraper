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
      //console.log('DATA::::'+{this.props.data});
      <React.Fragment>
        <SectionTitle>AuditTrail</SectionTitle>
        {!this.props.loaded && <CircularProgress />}
        <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
            <StyledTableCell align="left">Display</StyledTableCell>
            <StyledTableCell align="left">CreatedDate</StyledTableCell>
            <StyledTableCell align="left">Section</StyledTableCell>
            <StyledTableCell align="left">Delegate User</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.loaded && this.props.data.map(row => (
            <StyledTableRow key={row.name}>
              {row.map(column => (
                <StyledTableCell component="th" scope="row">
                  {column}
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