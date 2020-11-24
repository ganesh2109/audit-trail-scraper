/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SectionTitle from '../../components/section-title';

class NotificationActions extends React.Component {

  render() {
    return (
      <React.Fragment>
        <SectionTitle>Notification Delivery</SectionTitle>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Devlivery Type</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>Teams Message</TableCell>
            <TableCell>Active</TableCell>
          </TableBody>
          <TableBody>
            <TableCell>Email</TableCell>
            <TableCell>Inactive</TableCell>
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

export default connect(mapStateToProps)(NotificationActions)