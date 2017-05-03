import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {Link} from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


class AppDetail extends Component {
  componentDidMount() {
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

  renderAppName(app) {
    if (app === undefined) return;
    return (
      <BreadcrumbItem className="current"><span>{app.name}</span></BreadcrumbItem>
    )
  }

  render(){
    const app = this.props.app;

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/apps">Apps</Link></BreadcrumbItem>
          {this.renderAppName(app)}
        </Breadcrumb>
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
