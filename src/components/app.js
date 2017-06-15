import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Root} from 'react-router-dom'
import Home from './Home'
import Apps from './Apps'
import Navigation from './Navigation'
import Foundations from './Foundations'
import FoundationList from './FoundationList'
import CIServers from './CIServers'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchFoundations()
  }

  render() {
    return (
      <Router>
        <Container>
          <Navigation/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/apps" component={Apps}/>
          <Route exact path="/foundations" component={Foundations}/>
          <Route exact path="/pipelines" component={CIServers}/>
        </Container>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(App);
