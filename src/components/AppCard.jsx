import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

class AppCard extends Component {
  render() {
    const app = this.props.app;
    return (
      <div>
        <Card block inverse style={{ backgroundColor: '#333', borderColor: '#567' }}>
          <CardBlock>
            <CardTitle><Link to={"/apps/" + app.guid} key={app.guid}>{app.name}</Link></CardTitle>
          </CardBlock>
        </Card>

      </div>
    );
  }
}


export default AppCard
