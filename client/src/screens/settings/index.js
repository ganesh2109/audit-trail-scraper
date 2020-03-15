import React from 'react';
import Page from '../../components/page';
import Profile from './Profile';
import useStyles from './../../styles';

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();

  return (
    <Page title="Profile" icon="profile">
      <Profile classes={classes} />
    </Page >
  );
}