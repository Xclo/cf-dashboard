import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'
import { Label, Form, FormGroup, Input, Collapse} from 'reactstrap';
import FilterBuildpack from './FilterBuildpack'

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
        <h4><a href="#" onClick={this.toggle}>Buildpacks</a></h4>
        <Collapse isOpen={this.state.collapse}>
          {this.renderBuildpacks()}
        </Collapse>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { filters: state.filters };
}

export default connect(mapStateToProps, actions)(FilterBuildpackList);
