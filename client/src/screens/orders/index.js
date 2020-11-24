import React from 'react';

import Page from '../../components/page';
import Paper from '@material-ui/core/Paper';
import useStyles from './../../styles';
import Orders from './Orders';
import NotificationRisk from './NotificationRisk';

export default function HomeScreen() {
  const classes = useStyles();

  return (
    <Page title="Notify!!" icon="notifications">
      <Paper className={classes.paper}>
        <Orders />
      </Paper>
      <br/>
      <Paper className={classes.paper}>
        <NotificationRisk />
      </Paper>
    </Page>
  );
}