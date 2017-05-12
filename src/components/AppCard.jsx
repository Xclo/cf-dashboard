import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Card, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

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

  appStatus() {
    const {app} = this.props;
    if (app.state === 'Started') {
      return 'started'
    } else if (app.state === 'Stopped') {
      return 'stopped'
    }
  }

  render() {
    const {app} = this.props;
    return (
      <Card className={this.appStatus()}>
        <CardBlock>
          <CardTitle>
            <a href="#" onClick={this.handleSelectApp}>{app.name}</a>
          </CardTitle>
          <CardText>
            Hi there
          </CardText>
          <div>{app.state}</div>
          <div>{app.buildpack}</div>
          <div><a href={app.route} target="_blank">{app.route}</a></div>
        </CardBlock>
      </Card>
    );
  }
}


export default AppCard
