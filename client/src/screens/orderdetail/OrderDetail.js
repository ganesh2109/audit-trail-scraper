/* eslint-disable no-script-url */
import React from 'react';
import { connect } from 'react-redux'
import { loadOrder } from '../../actions/page';
import SectionTitle from '../../components/section-title';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom'

class OrderDetail extends React.Component {

  componentDidMount() {
    this.props.loadOrder(this.props.id);
  }

  render() {
    return (
      <React.Fragment>
        {!this.props.loaded && <CircularProgress />}
        {this.props.loaded &&
          <React.Fragment>
            <div class="section-spacing">
              <Grid container>
                <Grid item xs={2}>
                  <Button
                    color="inherit"
                    to="/orders"
                    component={Link}
                    startIcon={<ArrowBackIosIcon />}
                  >
                    Back
                  </Button>
                </Grid>
              </Grid>
            </div>

            <div class="section-spacing">
              <SectionTitle>Order details</SectionTitle>

              <Grid container spacing={1} mb={100}>
                <Grid item md={4} xs={5}>Name</Grid>
                <Grid item md={8} xs={6}>{this.props.order.detail.name}</Grid>

                <Grid item md={4} xs={5}>Description</Grid>
                <Grid item md={8} xs={6}>{this.props.order.detail.description}</Grid>

                <Grid item md={4} xs={5}>Status</Grid>
                <Grid item md={8} xs={6}>{this.props.order.detail.status}</Grid>
              </Grid>
            </div>

            <Grid container className={this.props.classes.section}>
              <SectionTitle>Order product details</SectionTitle>

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.order.products.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.page.order,
    loaded: state.page.orderLoaded,
  }
};

const mapDispatchToProps = dispatch => ({
  loadOrder: orderId => dispatch(loadOrder(orderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail)