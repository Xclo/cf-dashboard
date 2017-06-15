import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'
import { Collapse } from 'reactstrap';
import FilterAppState from './FilterAppState'
import { filterApps } from '../filters/searchFilters'

class FilterAppStateList extends Component {
  constructor(props) {
    super(props);
    this.renderAppStates = this.renderAppStates.bind(this);
    this.toggleAppState = this.toggleAppState.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggleAppState() {
    this.props.toggleAppState(this.props.appState);
  }

  toggle(e) {
    e.preventDefault()
    this.setState({ collapse: !this.state.collapse });
  }

  renderAppStates() {
    let {filters, apps} = this.props

    return _.map(filters.availableAppStates, appState => {
      let appCount = _.filter(apps, {state: appState}).length
      return (
        <FilterAppState key={appState}
          appState={appState}
          filters={filters}
          appCount={appCount}
          toggleAppState={this.props.toggleAppState}
        />
      )
    })
  }

  renderOpenClose() {
    if (this.state.collapse === false) {
      return (
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      )
    } else {
      return (
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      )
    }
  }

  render() {
    return (
      <div>
        <h4><a href="#" onClick={this.toggle}>App States&nbsp;&nbsp;{this.renderOpenClose()}</a></h4>
        <Collapse isOpen={this.state.collapse}>
          {this.renderAppStates()}
        </Collapse>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters,
    apps: filterApps(state.apps.appList, state.filters)
  };
}

export default connect(mapStateToProps, actions)(FilterAppStateList);
