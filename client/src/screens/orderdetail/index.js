import React from 'react';

import Page from '../../components/page';
import Paper from '@material-ui/core/Paper';
import useStyles from './../../styles';
import OrderDetail from './OrderDetail';
import { useParams } from 'react-router-dom'

export default function OrderDetailScreen() {
  const classes = useStyles();
  let { id } = useParams();

  return (
    <Page title="Order Detail" icon="shopping">
      <Paper className={classes.paper}>
        <OrderDetail id={id} classes={classes} />
      </Paper>
    </Page>
  );
}