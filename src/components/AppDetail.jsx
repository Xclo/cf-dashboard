import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {BreadcrumbList, ListItem} from 'pui-react-lists'
import {Link} from 'react-router-dom'


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
      <ListItem className="current"><span>{app.name}</span></ListItem>
    )
  }

  render(){
    const app = this.props.app;

    return (
      <div>
        <BreadcrumbList>
          <ListItem><Link to="/">Home</Link></ListItem>
          <ListItem><Link to="/apps">Apps</Link></ListItem>
          {this.renderAppName(app)}
        </BreadcrumbList>
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
