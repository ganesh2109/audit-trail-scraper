import React from 'react';
import Chart from 'react-google-charts';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux'
import SectionTitle from '../../components/section-title';

class AdminLogins extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SectionTitle>Admin Logins</SectionTitle>
        {!this.props.loaded && <CircularProgress />}
        {this.props.loaded && <Chart
          width={this.props.chart.width}
          height={this.props.chart.height}
          chartType={this.props.chart.chartType}
          loader={<div>Loading Chart</div>}
          data={this.props.data}
          options={this.props.chart.options}
        />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.websocket.opportunityStatusRevenue,
    loaded: state.websocket.opportunityStatusRevenueLoaded,
    chart: state.websocket.opportunityStatusRevenueChart
  }
};


export default connect(mapStateToProps)(AdminLogins)