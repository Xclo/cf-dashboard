import React, { Component } from 'react'
import AppCard from './AppCard'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { selectAppList, fetchAppsIfNeeded } from '../actions'
import { CardColumns, Container, Row, Col } from 'reactstrap';

import LeftNav from './LeftNav'
import RightPane from './RightPane'
import AppList from './AppList'
import SortBy from './SortBy'

class Apps extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchApps(this.props.foundations)
  }

  render() {
    return (
      <Row>
        <Col md="2">
          <LeftNav/>
        </Col>
        <Col md="7">
          <SortBy updateSort={this.props.updateSort}/>
          <AppList/>
        </Col>
        <Col md="3">
          <RightPane/>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    foundations: state.foundations.all,
   };
}

export default connect(mapStateToProps, actions)(Apps);
