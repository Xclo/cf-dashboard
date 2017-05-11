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
        <CardDeck>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Details&w=318&h=90" alt="Details" />
            <CardBlock>
              <CardTitle>Name: {this.props.app.name}</CardTitle>
            </CardBlock>
            <CardBlock>
              <CardTitle>Instance Info: </CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBlock>
            <CardBlock>
              <CardTitle>Status: </CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBlock>
            <CardBlock>
              <CardTitle>Services: </CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBlock>
          </Card>
        </CardDeck>
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
