import React, { Component } from 'react'
import AppCard from './AppCard'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { filterApps } from '../filters/searchFilters'

class AppList extends Component {

  constructor(props) {
    super(props)
    this.renderApp = this.renderApp.bind(this);
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
    const { apps, filters } = this.props;
    let sortedApps = [];
    if (filters.sortBy === 'name-asc') {
      sortedApps = _.orderBy(apps, [app => app.name.toLowerCase(), status => app.status], ['asc', 'desc']);
    } else if (filters.sortBy === 'name-desc') {
      sortedApps = _.orderBy(apps, [app => app.name.toLowerCase(), status => app.status], ['desc', 'desc']);
    }

    return (
      <div>
        {this.showLoading()}
        {sortedApps.map(this.renderApp)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetchingApps: state.apps.fetching,
    apps: filterApps(state.apps.appList, state.filters),
    filters: state.filters,
    foundations: state.foundations.all,
   };
}

export default connect(mapStateToProps, actions)(AppList);
