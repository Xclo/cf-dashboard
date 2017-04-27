import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Root} from 'react-router-dom'
import Main from './Main'
import AppList from './AppList'
import AppDetail from './AppDetail'
import Navigation from './Navigation'
import Example from './Example'
import Home from './common/Home'
import About from './common/About'


const App = () => (
  <Router>
    <div className="container">
      <Navigation/>
      <Route component={Main}>
          <Route path="/example" component={Example}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
          <Route path="/app" component={AppList}/>
          {/* Parameter route*/}
          <Route path="/app/:id" component={AppDetail}/>
      </Route>
    </div>
  </Router>
);

export default App
