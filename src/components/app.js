import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Root} from 'react-router-dom'
import Home from './Home'
import AppList from './AppList'
import AppDetail from './AppDetail'
import Navigation from './Navigation'
import LeftNav from './LeftNav'
import { Container, Row, Col } from 'reactstrap';

const App = () => (
  <Router>
    <Container>
      <Navigation/>
      <Row>
        <Col md="3">
          <LeftNav/>
        </Col>
        <Col md="9">
          <Route exact path="/" component={Home}/>
          <Route exact path="/apps" component={AppList}/>
          <Route path="/apps/:id" component={AppDetail}/>
        </Col>
      </Row>
    </Container>
  </Router>
);

export default App
