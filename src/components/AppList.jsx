import React, {Component} from 'react'
import AppCard from './AppCard'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { selectAppList, fetchAppsIfNeeded } from '../actions'
import { Card, CardGroup, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';


class AppList extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, foundation } = this.props
    this.props.fetchApps();
    this.state = {
      filter: "",
      appList: this.props.appList
    };

  }


  renderApp(app) {
    return (
      <AppCard key={app.guid} app={app}/>
    );
  }

  render() {
    const appList = this.props.appList;
    return (
      <div>
        <div>
          <CardGroup>
            {appList.map(this.renderApp)}
          </CardGroup>
        </div>
        <br/>
        <div>
          <CardGroup>
            <Card block inverse style={{ backgroundColor: '#333', borderColor: '#567' }}>
              <CardBlock>
                <CardTitle>App-001</CardTitle>
              </CardBlock>
            </Card>
            <Card block inverse style={{ backgroundColor: '#333', borderColor: '#567' }}>
              <CardBlock>
                <CardTitle>App-002</CardTitle>
              </CardBlock>
            </Card>
            <Card block inverse style={{ backgroundColor: '#333', borderColor: '#567' }}>
              <CardBlock>
                <CardTitle>App-003</CardTitle>
              </CardBlock>
            </Card>
            <Card block inverse color="primary" style={{ borderColor: '#567' }}>
              <CardBlock>
                <CardTitle>App-004</CardTitle>
              </CardBlock>
            </Card>
          </CardGroup>
        </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { appList: state.apps.appList };
}

export default connect(mapStateToProps, actions)(AppList);
