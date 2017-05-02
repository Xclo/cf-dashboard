import React, {Component} from 'react'
import Tile from './Tile'
import {TileLayout} from 'pui-react-tile-layout'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AppList extends Component {
  componentWillMount() {
    this.props.fetchApps();
  }

  renderApp(app) {
    return (
      <Tile key={app.guid} app={app}/>
    );
  }

  render() {
    const { appList } = this.props;
    return (
      <div>
        <h2>App List</h2>
        <TileLayout columns={2}>
          {appList.map(this.renderApp)}
        </TileLayout>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { appList: state.apps.appList };
}

export default connect(mapStateToProps, actions)(AppList);
