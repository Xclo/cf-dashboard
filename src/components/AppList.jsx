import React, {Component} from 'react'
import Tile from './Tile'
import {TileLayout} from 'pui-react-tile-layout'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Input  from 'pui-react-inputs';

class AppList extends Component {
  componentWillMount() {
    this.props.fetchApps();
    this.state = {
      filter: "",
      appList: this.props.appList
    };
  }

  renderApp(app) {
    return (
      <Tile key={app.guid} app={app}/>
    );
  }

  render() {
    const filterRegex = new RegExp(this.state.filter, "i");
    const appList = this.state.appList.map(app => app.match(filterRegex) && <li key={app}>{app}</li>);
    return (
      <div>
        <h2>App List</h2>
        <Input search placeholder="Filter by..." onChange={event => this.setState({ filter: event.target.value })}/>
        <TileLayout columns={{xs: 1, sm: 2, md: 3}}>
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
