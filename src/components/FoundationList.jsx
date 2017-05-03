import React, {Component} from 'react'
import Foundation from './Foundation'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'

class FoundationList extends Component {
  constructor(props) {
    super(props);
    this.renderFoundations = this.renderFoundations.bind(this);
  }

  componentDidMount() {
    this.props.fetchFoundations();
  }

  renderFoundations() {
    return _.map(this.props.foundations, foundation => {
      return (
        <Foundation key={foundation.name} foundation={foundation} login={this.props.foundationLogin} logout={this.props.foundationLogout} openModal={this.props.openFoundationLoginModal} closeModal={this.props.closeFoundationLoginModal}/>
      )
    })
  }

  render() {
    return (
      <div>
        <h4>Foundations</h4>
        {this.renderFoundations()}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { foundations: state.foundations.all };
}

export default connect(mapStateToProps, actions)(FoundationList);
