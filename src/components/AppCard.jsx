import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Card, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';

class AppCard extends Component {
  render() {
    const app = this.props.app;
    return (
      <div>
        <Card>
          <CardBlock>
            <CardTitle><Link to={"/apps/" + app.guid} key={app.guid}>{app.name}</Link></CardTitle>
            {/* <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText></CardText> */}
          </CardBlock>
        </Card>
      </div>
    );
  }
}


export default AppCard
