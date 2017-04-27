import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Root} from 'react-router-dom'
import Main from './Main'
import AppList from './AppList'
import Navigation from './Navigation'
import Example from './Example'
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
          <Route exact path="/" component={Main}/>
          <Route path="/example" component={Example}/>
        </Col>
      </Row>
    </div>
  </Router>
);

export default App
