import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Root} from 'react-router-dom'
import Main from './Main'
import AppList from './AppList'
import Navigation from './Navigation'
import Example from './Example'

const App = () => (
  <Router>
    <div>
      <Navigation/>
      <Route exact path="/" component={Main}/>
      <Route path="/example" component={Example}/>
    </div>
  </Router>
);

export default App
