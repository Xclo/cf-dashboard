import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

import FoundationList from './FoundationList'
import FoundationDetails from './FoundationDetails'

export default () => {
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
