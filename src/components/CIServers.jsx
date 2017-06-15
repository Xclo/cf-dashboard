import React, { Component } from 'react'
import AppCard from './AppCard'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardColumns, Container, Row, Col } from 'reactstrap';

import CIServerList from './CIServerList'
import Pipelines from './Pipelines'

class CIServers extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row>
        <Col md="3">
          <CIServerList/>
        </Col>
        <Col md="9">
          <Pipelines/>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(CIServers);
