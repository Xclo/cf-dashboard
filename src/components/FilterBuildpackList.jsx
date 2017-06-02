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
        <h4>Buildpacks&nbsp;&nbsp;<a href="#" onClick={this.toggle}>{this.renderOpenClose()}</a></h4>
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
