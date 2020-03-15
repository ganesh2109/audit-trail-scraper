import React from 'react';

import Page from '../../components/page';
import Paper from '@material-ui/core/Paper';
import useStyles from './../../styles';
import Orders from './Orders';

export default function HomeScreen() {
  const classes = useStyles();

  return (
    <Page title="Orders" icon="shopping">
      <Paper className={classes.paper}>
        <Orders />
      </Paper>
    </Page>
  );
}