/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SectionTitle from '../../components/section-title';

class NotificationRisk extends React.Component {

  render() {
    return (
      <React.Fragment>
        <SectionTitle>Notification Severity Level</SectionTitle>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Section</TableCell>
              <TableCell>Severity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>Manage Users</TableCell>
            <TableCell>High</TableCell>
          </TableBody>
          <TableBody>
            <TableCell>Named Credentials</TableCell>
            <TableCell>High</TableCell>
          </TableBody>
          <TableBody>
            <TableCell>Apex Class</TableCell>
            <TableCell>Medium</TableCell>
          </TableBody>
          <TableBody>
            <TableCell>Session Settings</TableCell>
            <TableCell>High</TableCell>
          </TableBody>
          <TableBody>
            <TableCell>Page</TableCell>
            <TableCell>Low</TableCell>
          </TableBody>
          <TableBody>
            <TableCell>Certificate and Key Management</TableCell>
            <TableCell>High</TableCell>
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

export default connect(mapStateToProps)(NotificationRisk)