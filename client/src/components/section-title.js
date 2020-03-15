import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function SectionTitle(props) {
  const component = props.component ? props.component : 'h2';
  const variant = props.variant ? props.variant : 'h6';

  return (
    <Typography component={component} variant={variant} color="primary" gutterBottom className={props.className}>
      {props.children}
    </Typography>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node,
};