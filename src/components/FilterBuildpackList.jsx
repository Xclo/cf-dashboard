import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'
import { Label, Form, FormGroup, Input} from 'reactstrap';
import FilterBuildpack from './FilterBuildpack'

class FilterBuildpackList extends Component {
  constructor(props) {
    super(props);
    this.renderBuildpacks = this.renderBuildpacks.bind(this);
  }

  renderBuildpacks() {
    let {filters} = this.props

    return _.map(filters.availableBuildpacks, buildpack => {
      return (
        <FilterBuildpack key={buildpack}
          buildpack={buildpack}
          filters={filters}
          toggleBuildpack={this.props.toggleBuildpack}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h4>Buildpacks</h4>
        {this.renderBuildpacks()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { filters: state.filters };
}

export default connect(mapStateToProps, actions)(FilterBuildpackList);
