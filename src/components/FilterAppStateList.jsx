import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'
import { Label, Form, FormGroup, Input} from 'reactstrap';
import FilterAppState from './FilterAppState'

class FilterAppStateList extends Component {
  constructor(props) {
    super(props);
    this.renderAppStates = this.renderAppStates.bind(this);
    this.toggleAppState = this.toggleAppState.bind(this);
  }

  toggleAppState() {
    this.props.toggleAppState(this.props.appState);
  }

  renderAppStates() {
    let {filters} = this.props

    return _.map(filters.availableAppStates, appState => {
      return (
        <FilterAppState key={appState}
          appState={appState}
          filters={filters}
          toggleAppState={this.props.toggleAppState}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h4>App States</h4>
        {this.renderAppStates()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { filters: state.filters };
}

export default connect(mapStateToProps, actions)(FilterAppStateList);
