/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux'

import SectionTitle from '../../components/section-title';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';


function ListItemLink(props) {
  return <div style={{ 'textAlign': 'right' }}>
    <ListItem button component="a" {...props} />
  </div>;
}

class Profile extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item lg={12} md={12} xs={12} className={this.props.classes.centeralign}>
            <img src={this.props.data.profilepic} alt="Avatar" className={this.props.classes.avatarradius} />
          </Grid>

        </Grid>
        <Grid container justify="center">
          <Paper className={this.props.classes.paper1}>
            <Grid container>
              <Grid item lg={11} md={11} xs={10}>
              </Grid>
              <Grid item lg={1} md={1} xs={2}>
                <ListItem>
                  <ListItemIcon>
                    <ListItemLink href={this.props.data.userediturl} target="_blank">
                      <EditIcon className={this.props.classes.menuIcon} />
                    </ListItemLink>
                  </ListItemIcon>
                </ListItem>
              </Grid>

              <Grid container className={this.props.classes.section}>
                <Grid item lg={2}>

                </Grid>
                <Grid item lg={5} md={6} xs={12} className={this.props.classes.section}>
                  <SectionTitle component="h3" variant="h6">User Details</SectionTitle>

                  <Grid container spacing={1} mb={100}>
                    <Grid item md={4} xs={4} lg={4}>Username</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.username}</Grid>

                    <Grid item md={4} xs={4} lg={4}>Email</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.email}</Grid>

                    <Grid item md={4} xs={4} lg={4}>Alias</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.alias}</Grid>

                    <Grid item md={4} xs={4} lg={4}>Nickname</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.nickname}</Grid>

                    <Grid item md={4} xs={4} lg={4}>Phone</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.phone}</Grid>

                    <Grid item md={4} xs={4} lg={4}>Extension</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.extension}</Grid>

                    <Grid item md={4} xs={4} lg={4}>Fax</Grid>
                    <Grid item md={8} xs={6} lg={8}>{this.props.data.fax}</Grid>

                    <Grid item md={4} xs={4} lg={4}>Mobile</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.mobilephone}</Grid>
                  </Grid>
                </Grid>

                <Grid item lg={4} md={6} xs={12} className={this.props.classes.section}>
                  <SectionTitle component="h3" variant="h6">Address</SectionTitle>

                  <Grid container spacing={1}>
                    <Grid item md={4} xs={4} lg={4}>Street</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.street}</Grid>

                    <Grid item md={4} xs={4} lg={4}>City</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.city}</Grid>

                    <Grid item md={4} xs={4} lg={4}>State</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.state}</Grid>

                    <Grid item md={4} xs={4} lg={4}>Zipcode</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.postalcode}</Grid>

                    <Grid item md={4} xs={4} lg={4}>Country</Grid>
                    <Grid item md={8} xs={8} lg={8}>{this.props.data.country}</Grid>
                  </Grid>
                </Grid>
                <Grid item lg={1}>

                </Grid>

              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.page.profile,
    loaded: state.websocket.ordersLoaded
  }
};

export default connect(mapStateToProps)(Profile)