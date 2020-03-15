import React from 'react';
import SectionTitle from '../../components/section-title';
import Grid from '@material-ui/core/Grid';

export default function Deposits(props) {
  return (
    <React.Fragment>
      <Grid container justify="center" spacing={2} direction="row">
        <Grid item>
          <p className={props.classes.cloudTitle}>
            {props.value}
          </p>
          <SectionTitle>{props.title}</SectionTitle>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}