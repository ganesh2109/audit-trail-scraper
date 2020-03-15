/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SectionTitle from '../../components/section-title';
import { Link } from 'react-router-dom'

class Orders extends React.Component {

  render() {
    return (
      <React.Fragment>
        <SectionTitle>Recent Orders</SectionTitle>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map(row => (
              <TableRow key={row.id}>
                <TableCell><Link to={'/orders/' + row.sfid}>{row.name}</Link></TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.websocket.orders,
    loaded: state.websocket.ordersLoaded
  }
};

export default connect(mapStateToProps)(Orders)