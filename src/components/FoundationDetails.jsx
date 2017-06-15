import React, {Component} from 'react'
import Foundation from './Foundation'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'

class FoundationDetails extends Component {
  constructor(props) {
    super(props);
    this.renderFoundationDetails = this.renderFoundationDetails.bind(this);
  }

  renderFoundationDetails() {
    if (this.props.foundation) {
      let {min_recommended_cli_version, api_version, authorization_endpoint} = this.props.foundation.info
      return (
        <div>
          <h4>Foundation Details</h4>
          <ul>
            <li>API: {this.props.foundation.api}</li>
            <li>API version: {api_version}</li>
            <li>Recommended CLI version: {min_recommended_cli_version}</li>
            <li>Login Endpoint: {authorization_endpoint}</li>
          </ul>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    return (
        this.renderFoundationDetails()
    )
  }
}

function mapStateToProps(state) {
  return { foundation: state.foundations.selectedFoundation };
}

export default connect(mapStateToProps, actions)(FoundationDetails);
