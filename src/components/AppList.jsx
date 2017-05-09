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
    this.props.fetchApps();
  }

  renderApp(app) {
    return (
      <AppCard key={app.guid} app={app}/>
    );
  }

  render() {
    const { apps } = this.props;
    return (
      <div>
        <div>
          <CardGroup>
            {apps.map(this.renderApp)}
          </CardGroup>
        </div>
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
