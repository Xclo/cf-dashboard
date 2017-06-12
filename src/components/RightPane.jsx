import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock } from 'reactstrap';
 import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class RightPane extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.app) {
      return (
        <div>
          <br/>
          <h3>Details</h3>
          <br/>
          <div><h4>{this.props.app.name}</h4></div>
          <div>Status: {this.props.app.status.status}</div>
        </div>

      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    app: state.appDetail.app
   };
}

export default connect(mapStateToProps, actions)(RightPane);
