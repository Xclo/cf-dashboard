import React, { Component } from 'react'
import AppCard from './AppCard'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { selectAppList, fetchAppsIfNeeded } from '../actions'
import { Card, CardGroup, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { filterApps } from '../filters/searchFilters'


class AppList extends Component {

  constructor(props) {
    super(props)
    this.renderApp = this.renderApp.bind(this);
  }

  componentWillMount() {
    _.values(this.props.foundations).forEach((foundation) => {
      if (foundation.auth) {
          this.props.fetchApps(foundation.api)
      }
    });
  }

  renderApp(app) {
    return (
      <AppCard key={app.metadata.guid} app={app} selectApp={this.props.selectApp}/>
    );
  }

  render() {
    const { apps } = this.props;
    var sortedApps = _.orderBy(apps, [app => app.name.toLowerCase(), status => app.status], ['asc', 'desc']);
    return (
      <div>
        <CardGroup>
          {sortedApps.map(this.renderApp)}
        </CardGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    apps: filterApps(state.apps.appList, state.filters),
    foundations: state.foundations.all,
   };
}

export default connect(mapStateToProps, actions)(AppList);
