import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock } from 'reactstrap';
 import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class PipelineDetails extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.pipeline) {
      console.log(this.props.pipeline)
      return (
        <div>
          <br/>
          <h3>Pipeline Details</h3>
          <br/>
          <div><h4>{this.props.pipeline.name}</h4></div>
          <div>Status: {this.props.pipeline.status}</div>
          <div># of Jobs</div>
          <div>last run</div>
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
    pipeline: state.pipelineDetail.pipeline
   };
}

export default connect(mapStateToProps, actions)(PipelineDetails);
