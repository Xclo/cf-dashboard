import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';


class AppDetail extends Component {
  componentWillMount() {
    const {match} = this.props;
    this.props.fetchAppDetail(match.params.id);
  }

  renderAppDetails(app) {
    if (app === undefined) return;

    return (
      <ul>
        <li><strong>Buildpack</strong>: {app.appInfo.buildpack}</li>
      </ul>
    )
  }

  render(){
    const app = this.props.app;

    return (
      <div>
        <h2>App Details</h2>
        {this.renderAppDetails(app)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { app: state.appDetail.app };
}

export default withRouter(connect(mapStateToProps, actions)(AppDetail));
