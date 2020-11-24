import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Notifications from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Face from '@material-ui/icons/Face';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';


import { Link } from 'react-router-dom'

class MainListItems extends React.Component {
  render() {
    return (
      <div>
        <ListItem button component={Link} to="/" onClick={this.props.onSelected}>
          <ListItemIcon>
            <DashboardIcon className={this.props.classes.menuIcon} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/NotificationRules" onClick={this.props.onSelected}>
          <ListItemIcon>
            <Notifications className={this.props.classes.menuIcon} />
          </ListItemIcon>
          <ListItemText primary="Notify!" onClick={this.props.onSelected} />
        </ListItem>
      </div>
    );
  }
}

class SettingsListItems extends React.Component {
  render() {
    return (
      <div>
        <ListItem button component={Link} to="/profile" onClick={this.props.onSelected}>
          <ListItemIcon>
            <Face className={this.props.classes.menuIcon} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component="a" href="/return" target="_blank">
          <ListItemIcon>
            <KeyboardReturnIcon className={this.props.classes.menuIcon} />
          </ListItemIcon>
          <ListItemText primary="Salesforce" />
        </ListItem>
        <ListItem button component="a" href="/auth/saml/logout">
          <ListItemIcon>
            <ExitToAppIcon className={this.props.classes.menuIcon} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </div>
    );
  }
}

export { MainListItems, SettingsListItems }
