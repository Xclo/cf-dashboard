import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Root} from 'react-router-dom'
import Home from './Home'
import AppList from './AppList'
import AppDetail from './AppDetail'
import Navigation from './Navigation'
import {Row, Col} from 'pui-react-grids'
import LeftNav from './LeftNav'

const App = () => (
  <Router>
    <div className="container">
      <Navigation/>
      <Row>
        <Col md={6}>
          <LeftNav/>
        </Col>
        <Col md={18}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/apps" component={AppList}/>
          <Route path="/apps/:id" component={AppDetail}/>
        </Col>
      </Row>
    </div>
  </Router>
);

export default App
