import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Root} from 'react-router-dom'
import Main from './Main'
import AppList from './AppList'
import AppDetail from './AppDetail'
import Navigation from './Navigation'
import Example from './Example'
import {Row, Col} from 'pui-react-grids'
import LeftNav from './LeftNav'
import Home from './common/Home'
import About from './common/About'

const App = () => (
  <Router>
    <div className="container">
      <Navigation/>
      <Row>
        <Col md={6}>
          <LeftNav/>
        </Col>
        <Col md={18}>
          <Route exact path="/" component={Main}/>
          <Route path="/example" component={Example}/>
          <Route path="/apps" component={AppList}/>
          <Route path="/apps/:id" component={AppDetail}/>
        </Col>
      </Row>
    </div>
  </Router>
);

export default App
