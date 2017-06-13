import React, { Component } from 'react'
import AppCard from './AppCard'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { selectAppList, fetchAppsIfNeeded } from '../actions'
import { CardColumns, Container, Row, Col } from 'reactstrap';
import { filterApps } from '../filters/searchFilters'
import LeftNav from './LeftNav'
import RightPane from './RightPane'

class AppList extends Component {

  constructor(props) {
    super(props)
    this.renderApp = this.renderApp.bind(this);
  }

  componentWillMount() {
    this.props.fetchApps(this.props.foundations)
  }

  renderApp(app) {
    return (
      <AppCard key={app.metadata.guid} app={app} selectApp={this.props.selectApp}/>
    );
  }

  showLoading() {
    if (this.props.fetchingApps) {
      return (
        <div className="loading">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw " aria-hidden="true"></i> Loading...
        </div>
      )
    }
  }

  render() {
    const { apps } = this.props;
    var sortedApps = _.orderBy(apps, [app => app.name.toLowerCase(), status => app.status], ['asc', 'desc']);
    return (
      <Row>
        <Col md="2">
          <LeftNav/>
        </Col>
        <Col md="7">
          {this.showLoading()}
          {sortedApps.map(this.renderApp)}
          {/*
          <CardColumns>
            {sortedApps.map(this.renderApp)}
          </CardColumns> */}
        </Col>
        <Col md="3">
          <RightPane/>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetchingApps: state.apps.fetching,
    apps: filterApps(state.apps.appList, state.filters),
    foundations: state.foundations.all,
   };
}

export default connect(mapStateToProps, actions)(AppList);
