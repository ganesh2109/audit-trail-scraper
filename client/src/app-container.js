import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { loadProfile, openDrawer, closeDrawer } from './actions/page';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Notifications from '@material-ui/icons/Notifications';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Face from '@material-ui/icons/Face';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { MainListItems, SettingsListItems } from './listItems';

import { Route, Switch } from 'react-router-dom'

import HomeScreen from './screens/home';
import OrdersScreen from './screens/orders';
import SettingsScreen from './screens/settings';
import NotFoundScreen from './screens/404';
import OrderDetailScreen from './screens/orderdetail';

const calcIsSmall = () => {
  return window.innerWidth < 500;
}

class AppContainer extends React.Component {

  static propTypes = {
    pageTitle: PropTypes.string,
    history: PropTypes.object,
  }

  constructor(props) {
    super(props);
    const isSmall = calcIsSmall();
    this.state = {
      isSmall: isSmall,
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.props.loadProfile();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let isSmall = calcIsSmall();
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      isSmall: isSmall
    });

    if (isSmall) {
      this.props.closeDrawer();
    }
  }

  setOpen(open) {
    if (open) {
      this.props.openDrawer();
    } else {
      this.props.closeDrawer();
    }
  }

  handleDrawerOpen = () => {
    this.setOpen(true);
  }

  handleDrawerClose = () => {
    this.setOpen(false);
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.handleRouteChange();
    }
  }

  handleRouteChange() {
    let isSmall = calcIsSmall();

    if (isSmall) {
      this.setOpen(false);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, this.props.drawerOpen && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(classes.menuButton, this.props.drawerOpen && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            {!this.state.isSmall && this.props.pageIcon === 'dashboard' && <DashboardIcon className={classes.pageIcon} />}
            {!this.state.isSmall && this.props.pageIcon === 'notifications' && <Notifications className={classes.pageIcon} />}
            {!this.state.isSmall && this.props.pageIcon === 'profile' && <Face className={classes.pageIcon} />}
            {!this.state.isSmall && this.props.pageIcon === 'salesforce' && <KeyboardReturnIcon className={classes.pageIcon} />}

            <Typography component="h1" variant="h6" color="inherit" className={classes.title}>
              {this.props.pageTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant={!this.state.isSmall ? 'permanent' : 'temporary'}
          classes={{
            paper: clsx(classes.backgroundblack, classes.drawerPaper, !this.props.drawerOpen && classes.drawerPaperClose),
          }}
          open={this.props.drawerOpen}
          onClose={this.handleDrawerClose}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon className={classes.backgroundblack} />
            </IconButton>
          </div>
          <List>
            <MainListItems classes={classes} />
          </List>
          <Divider />
          <List>
            <SettingsListItems classes={classes} />
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />

          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/orders/:id" component={OrderDetailScreen} />
            <Route path="/NotificationRules" component={OrdersScreen} />
            <Route path="/profile" component={SettingsScreen} />
            <Route path="/return" />
            <Route component={NotFoundScreen} />
          </Switch>

        </main>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    pageTitle: state.page.title,
    pageIcon: state.page.icon,
    profile: state.page.profile,
    drawerOpen: state.page.drawerOpen,
    location: state.router.location,
  }
};

const mapDispatchToProps = dispatch => ({
  loadProfile: () => dispatch(loadProfile()),
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
