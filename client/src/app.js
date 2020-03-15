import React from 'react';
import AppContainer from './app-container';
import useStyles from './styles';
import './app.css';

const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppContainer classes={classes} />
    </React.Fragment>
  );
}
export default App;


