import React from 'react';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Page from '../../components/page';

import Recent from './recent';
import OpportunitiesStatusRevenues from '../charts/admin-logins';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux'

class HomeScreen extends React.Component {

  render() {
    const classes = this.props.classes;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <Page title="Dashboard" icon="dashboard">

        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12} lg={12}>
              {!this.props.loaded && <LinearProgress variant="query" />}
              {this.props.loaded &&
                <Grid container spacing={2} alignContent="center" alignItems="center" justify="center">
                  <Grid item xs={12} md={12} lg={4}>
                    <div className="cloud">
                      <div className="cloudshadow">
                      </div>
                      <div className="cloud-content">
                        <Recent title="Opportunities won today" classes={classes} value={this.props.dashboardWonToday} />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12} lg={4}>
                    <div className="cloud">
                      <div className="cloudshadow">
                      </div>
                      <div className="cloud-content">
                        <Recent title="Revenue generated today" classes={classes} value={this.props.dashboardRevenueToday} />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              }
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <div className="cloud-container">
                <div className="cloud mini"></div>
                <Paper className={fixedHeightPaper}>
                  <OpportunitiesStatusRevenues />
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Page >
    );
  }
}

const mapStateToProps = state => {
  return {
    loaded: state.websocket.dashboardLoaded,
    dashboardWonToday: state.websocket.dashboardWonToday,
    dashboardCasesClosed: state.websocket.dashboardCasesClosed,
    dashboardRevenueToday: state.websocket.dashboardRevenueToday,
  }
};

export default connect(mapStateToProps)(HomeScreen)
