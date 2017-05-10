import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

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
      <div>
        <Card block inverse style={{ backgroundColor: '#333', borderColor: '#567' }}>
          <CardBlock>
            <CardTitle>
              <a href="#" onClick={this.handleSelectApp}>{app.name}</a>
            </CardTitle>
          </CardBlock>
        </Card>

      </div>
    );
  }
}


export default AppCard
