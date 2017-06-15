import React, { Component } from 'react'
import AppCard from './AppCard'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { selectAppList, fetchAppsIfNeeded } from '../actions'
import { CardColumns, Container, Row, Col } from 'reactstrap';

import FoundationList from './FoundationList'
import FoundationDetails from './FoundationDetails'

class Foundations extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row>
        <Col md="3">
          <FoundationList/>
        </Col>
        <Col md="9">
          <FoundationDetails/>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(Foundations);
