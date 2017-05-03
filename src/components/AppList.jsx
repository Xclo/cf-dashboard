import React, {Component} from 'react'
import AppCard from './AppCard'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Picker from './ui/Picker';
import { selectAppList, fetchAppsIfNeeded } from '../actions'


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


  // handleChange(foundation) {
  //   this.props.dispatch(selectAppList(foundation))
  //   this.props.dispatch(fetchAppsIfNeeded(foundation))
  // }

  renderApp(app) {
    return (
      <AppCard key={app.guid} app={app}/>
    );
  }

  // fruitsChanged(newFruits) {
  //   this.setState({
  //     fruits: newFruits
  //   })
  // }

  render() {
    // const filterRegex = new RegExp(this.state.filter, "i");
    const appList = this.props.appList;
    // const foundation  = this.props.foundation;

    // const appList = this.state.appList.map(app => app.match(filterRegex) && <li key={app}>{app}</li>);
    return (
      <div>
        <h2>App List</h2>
        {/* <div>
          <Picker value={foundation}
          onChange={this.handleChange}
          options={[ 'foundation-1', 'foundation-2' ]} />
        </div> */}
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
