import React, {Component} from 'react'
import AppCard from './AppCard'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
      <AppCard key={app.guid} app={app}/>
    );
  }

  render() {
    const filterRegex = new RegExp(this.state.filter, "i");
    const appList = this.props.appList;
    // const appList = this.state.appList.map(app => app.match(filterRegex) && <li key={app}>{app}</li>);
    return (
      <div>
        <h2>App List</h2>
        {/* <Input search placeholder="Filter by..." onChange={event => this.setState({ filter: event.target.value })}/> */}
        <div className="card-columns">
          {appList.map(this.renderApp)}
        </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { appList: state.apps.appList };
}

export default connect(mapStateToProps, actions)(AppList);
