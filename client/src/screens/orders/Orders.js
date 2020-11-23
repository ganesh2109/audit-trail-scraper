/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SectionTitle from '../../components/section-title';

class Orders extends React.Component {

  render() {
    return (
      <React.Fragment>
        <SectionTitle>Notification Criteria</SectionTitle>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Metadata</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>Profile</TableCell>
            <TableCell>Manual Change</TableCell>
            <TableCell>Active</TableCell>
          </TableBody>
          <TableBody>
            <TableCell>Permission Set</TableCell>
            <TableCell>Manual Change</TableCell>
            <TableCell>Active</TableCell>
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