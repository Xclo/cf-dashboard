import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Card, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';

class AppCard extends Component {

  constructor(props) {
    super(props)
    this.handleSelectApp = this.handleSelectApp.bind(this);
  }

  handleSelectApp(e) {
    e.preventDefault();
    const {selectApp, app} = this.props;
    selectApp(app)
  }

  render() {
    const {app} = this.props;
    return (
      <Card>
        <CardBlock>
          <CardTitle>
            <a href="#" onClick={this.handleSelectApp}>{app.name}</a>
          </CardTitle>
          <CardText>
            Hi there
          </CardText>
        </CardBlock>
      </Card>
    );
  }
}


export default AppCard
