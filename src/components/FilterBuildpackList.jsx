import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'
import { Label, Form, FormGroup, Input, Collapse} from 'reactstrap';
import FilterBuildpack from './FilterBuildpack'
import { filterApps } from '../filters/searchFilters'

class FilterBuildpackList extends Component {
  constructor(props) {
    super(props);
    this.renderBuildpacks = this.renderBuildpacks.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle(e) {
    e.preventDefault()
    this.setState({ collapse: !this.state.collapse });
  }

  renderBuildpacks() {
    let {filters, apps} = this.props

    return _.map(filters.availableBuildpacks, buildpack => {
      let appCount = _.filter(apps, {buildpack: buildpack}).length
      return (
        <FilterBuildpack key={buildpack}
          buildpack={buildpack}
          filters={filters}
          appCount={appCount}
          toggleBuildpack={this.props.toggleBuildpack}
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
        <h4><a href="#" onClick={this.toggle}>Buildpacks&nbsp;&nbsp;{this.renderOpenClose()}</a></h4>
        <Collapse isOpen={this.state.collapse}>
          {this.renderBuildpacks()}
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

export default connect(mapStateToProps, actions)(FilterBuildpackList);
