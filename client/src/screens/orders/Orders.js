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
            <TableCell>Changed profile for user ([a-zA-Z0-9\\s])* from ([a-zA-Z0-9\\s])* to ([a-zA-Z0-9\\s])*</TableCell>
            <TableCell>Active</TableCell>
          </TableBody>
          <TableBody>
            <TableCell>Permission Set</TableCell>
            <TableCell>Changed permission set for user ([a-zA-Z0-9\\s])* from ([a-zA-Z0-9\\s])* to ([a-zA-Z0-9\\s])*</TableCell>
            <TableCell>Inactive</TableCell>
          </TableBody>
          <TableBody>
            <TableCell>Named Credential</TableCell>
            <TableCell>Password changed for named credential ([a-zA-Z0-9\\s])*</TableCell>
            <TableCell>Inactive</TableCell>
          </TableBody>          
          <TableBody>
            <TableCell>Permission Set</TableCell>
            <TableCell>Changed permission set for user ([a-zA-Z0-9\\s])* from ([a-zA-Z0-9\\s])* to ([a-zA-Z0-9\\s])*</TableCell>
            <TableCell>Inactive</TableCell>
          </TableBody>          
          <TableBody>
            <TableCell>Permission Set</TableCell>
            <TableCell>Changed permission set for user ([a-zA-Z0-9\\s])* from ([a-zA-Z0-9\\s])* to ([a-zA-Z0-9\\s])*</TableCell>
            <TableCell>Inactive</TableCell>
          </TableBody>          
          <TableBody>
            <TableCell>Permission Set</TableCell>
            <TableCell>Changed permission set for user ([a-zA-Z0-9\\s])* from ([a-zA-Z0-9\\s])* to ([a-zA-Z0-9\\s])*</TableCell>
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

export default connect(mapStateToProps)(Orders)