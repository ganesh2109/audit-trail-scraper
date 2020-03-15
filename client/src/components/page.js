import React from 'react';
import { setPageTitle, setPageIcon } from '../actions/page';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import useStyles from '../styles';

const Page = (props) => {
  // Update the page title
  props.setPageTitle(props.title);
  props.setPageIcon(props.icon);

  // Render the page
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {props.children}
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  setPageTitle: title => {
    dispatch(setPageTitle(title));
  },
  setPageIcon: icon => {
    dispatch(setPageIcon(icon));
  },
});

export default connect(null, mapDispatchToProps)(Page);
