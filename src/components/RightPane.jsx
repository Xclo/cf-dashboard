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
    this.renderService = this.renderService.bind(this);
  }

  renderService(service) {

    return (
      <li key={service.name}>
        {service.name} - {service.service}/{service.plan}
      </li>
    )
  }

  render() {
    if (this.props.app) {
      console.log(this.props.app)
      return (
        <div>
          <br/>
          <h3>Details</h3>
          <br/>
          <div><h4>{this.props.app.name}</h4></div>
          <div>Status: {this.props.app.status.status}</div>
          <div>{this.props.app.details.instances}/{this.props.app.details.running_instances} instances running</div>
          <div>{this.props.app.details.memory}GB memory</div>
          <div>Services</div>
          <ul>
            {this.props.app.details.bound_services.map(this.renderService)}
          </ul>
          <div>last updated: {this.props.app.details.package_updated_at}</div>
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
